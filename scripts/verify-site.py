#!/usr/bin/env python3
"""Check rendered routes, local assets, metadata and the September content contract."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
import hashlib
import re

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.ids = set()
        self.references = []
        self.text = []
        self.h1 = 0
        self.description = None
        self.title = False
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            assert a['id'] not in self.ids, f'Duplicate id: {self.path}: {a["id"]}'
            self.ids.add(a['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.title = True
        if tag == 'meta' and a.get('name') == 'description':
            self.description = a.get('content')
        if tag == 'img':
            assert 'alt' in a, f'Missing image alt: {self.path}'
        for field in ('href', 'src', 'poster', 'data-src'):
            if a.get(field):
                self.references.append(a[field])
        if a.get('srcset'):
            self.references.extend(part.strip().split()[0] for part in a['srcset'].split(',') if part.strip())

    def handle_data(self, data):
        self.text.append(data)


def resolve_route(path):
    relative = unquote(path).lstrip('/')
    target = (DIST / relative).resolve()
    assert target.is_relative_to(DIST.resolve()), f'Escaping local reference: {path}'
    for candidate in (target, target / 'index.html', target.with_suffix('.html')):
        if candidate.is_file():
            return candidate
    raise AssertionError(f'Missing local route or asset: {path}')

pages = {path.resolve(): Page(path) for path in sorted(DIST.rglob('*.html'))}
assert pages, 'No rendered pages'
checked_links = 0
for path, page in pages.items():
    assert page.h1 == 1, f'Expected one h1 in {path}, got {page.h1}'
    assert page.title and page.description, f'Missing title/description: {path}'
    base = 'https://local.invalid/' + path.relative_to(DIST.resolve()).as_posix().removesuffix('index.html')
    for reference in page.references:
        url = urlsplit(urljoin(base, reference))
        if url.scheme != 'https' or url.netloc != 'local.invalid':
            continue
        destination = resolve_route(url.path)
        if url.fragment and destination in pages:
            assert unquote(url.fragment) in pages[destination].ids, f'Missing anchor: {path} -> {reference}'
        checked_links += 1


def text(route):
    return ' '.join(pages[resolve_route(route)].text)

for number in range(1, 13):
    assert re.search(rf'\bGAME UPDATE #{number}\b', text(f'/changelog/development-update-{number}').upper()), f'Missing update badge: {number}'
for phrase in ('Spire 1–20', 'Narrow Market', 'Blitz Assault', 'Resonance Fever', 'FOCUS', 'Swarm', 'Siege', 'do not unlock the next Spire'):
    assert phrase in text('/game'), f'Missing current overview fact: {phrase}'
for phrase in ('FOCUS', 'four waves', 'Mutators', 'Public ranking and player run submissions remain disabled'):
    assert phrase in text('/development'), f'Missing playtest fact: {phrase}'
assert not re.search(r'HUNT\s+or\s+BREAK', text('/development'), re.I), 'Stale targeting label'
assert 'September 22, 2026' in text('/'), 'Missing media capture date'
assert 'Dated development record' in text('/changelog/development-update-9')
archive = (ROOT / 'src/data/changelog.ts').read_bytes()
blob = hashlib.sha1(b'blob ' + str(len(archive)).encode() + b'\0' + archive).hexdigest()
assert blob == '0d38021e484d2ca839fe3e052e1104ea3ae2e19b', 'Published history changed; review and explicitly update this guard when extending the archive'
expected = {f'/changelog/development-update-{n}' for n in range(1, 13)}
for slug in expected:
    assert slug in (DIST / 'changelog/index.html').read_text(), f'Missing feed entry: {slug}'
print(f'PASS: {len(pages)} rendered pages; {checked_links} local links/assets; 12 updates; current content and unchanged historical archive.')