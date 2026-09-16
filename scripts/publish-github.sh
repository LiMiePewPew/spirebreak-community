#!/usr/bin/env bash
set -euo pipefail
REPO="LiMiePewPew/spirebreak-community"
command -v gh >/dev/null || { echo "Install/authenticate GitHub CLI first: https://cli.github.com/" >&2; exit 1; }
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git init
fi
git add .
if ! git diff --cached --quiet; then
  git commit -m "Launch Spirebreak development hub"
fi
git branch -M main
if gh repo view "$REPO" >/dev/null 2>&1; then
  git remote remove origin >/dev/null 2>&1 || true
  git remote add origin "https://github.com/$REPO.git"
else
  gh repo create "$REPO" --public --source=. --remote=origin --description "Public development hub, changelog, roadmap and feedback tracker for Spirebreak."
fi
git push -u origin main
./scripts/setup-labels.sh "$REPO"
echo "Published: https://github.com/$REPO"
