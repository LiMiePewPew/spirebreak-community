import { site } from '@/data/site';

export type PublicIssue = {
  number: number;
  title: string;
  html_url: string;
  state: string;
  labels: Array<{ name: string; color: string }>;
  reactions?: { '+1'?: number };
  pull_request?: unknown;
};

let cache: Promise<PublicIssue[]> | undefined;

export function loadPublicIssues(): Promise<PublicIssue[]> {
  if (cache) return cache;

  cache = (async () => {
    try {
      const headers: Record<string, string> = {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'spirebreak-community-site',
      };
      const token = import.meta.env.GITHUB_TOKEN;
      if (token) headers.Authorization = `Bearer ${token}`;

      const response = await fetch(
        `https://api.github.com/repos/${site.repo}/issues?state=open&per_page=100`,
        { headers },
      );
      if (!response.ok) return [];
      const issues = (await response.json()) as PublicIssue[];
      return issues.filter((issue) => !issue.pull_request);
    } catch {
      return [];
    }
  })();

  return cache;
}

export function hasLabel(issue: PublicIssue, label: string) {
  return issue.labels.some((item) => item.name === label);
}
