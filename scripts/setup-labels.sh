#!/usr/bin/env bash
set -euo pipefail
REPO="${1:-LiMiePewPew/spirebreak-community}"
command -v gh >/dev/null || { echo "GitHub CLI (gh) is required." >&2; exit 1; }
labels=(
  "type:bug|d45d4d|Bug report"
  "type:feature|6fc7e1|Feature request"
  "type:feedback|8b95a5|General feedback"
  "status:investigating|e4a661|Under investigation"
  "status:planned|76d0d2|Accepted for planned work"
  "status:in-progress|b08a58|Active work"
  "status:fixed|78b98a|Fixed"
  "status:exploring|72838b|Being explored, not committed"
  "status:not-planned|505b61|Not planned"
  "priority:high|e27f70|High priority"
  "priority:medium|e4a661|Medium priority"
  "priority:low|71838b|Low priority"
  "area:combat|8fb6c2|Combat"
  "area:ui|a68fc3|Interface"
  "area:performance|65a7a7|Performance"
  "area:mobile|77a8d4|Mobile"
  "area:audio|a88c77|Audio"
  "area:balance|bd8f63|Balance"
  "area:accessibility|8fa58b|Accessibility"
  "public:known-issue|cf7c74|Show in public known-issue tracker"
  "public:roadmap|b08a58|Public roadmap item"
)
for item in "${labels[@]}"; do
  IFS='|' read -r name color description <<<"$item"
  gh label create "$name" --repo "$REPO" --color "$color" --description "$description" --force
 done
