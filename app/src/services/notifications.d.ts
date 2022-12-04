export interface INotification {
  id: string
  unread: boolean
  reason: string
  updated_at: string
  last_read_at?: string
  subject: ISubject
  repository: IRepo
  url: string
  subscription_url: string
}

export interface ISubject {
  title: string
  url: string
  latest_comment_url?: string
  type: string
}

export interface IRepo {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: IOwner
  html_url: string
  description?: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
}

export interface IOwner {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface IFullNotification {
  url: string
  id: number
  node_id: string
  html_url: string
  diff_url: string
  patch_url: string
  issue_url: string
  number: number
  state: string
  locked: boolean
  title: string
  user: IUser
  body: string
  created_at: string
  updated_at: string
  closed_at: any
  merged_at: any
  merge_commit_sha: string
  assignee: any
  assignees: any[]
  requested_reviewers: any[]
  requested_teams: any[]
  labels: any[]
  milestone: any
  draft: boolean
  commits_url: string
  review_comments_url: string
  review_comment_url: string
  comments_url: string
  statuses_url: string
  head: IHead
  base: IBase
  _links: Links
  author_association: string
  auto_merge: any
  active_lock_reason: any
  merged: boolean
  mergeable: boolean
  rebaseable: boolean
  mergeable_state: string
  merged_by: any
  comments: number
  review_comments: number
  maintainer_can_modify: boolean
  commits: number
  additions: number
  deletions: number
  changed_files: number
}

export interface IUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface IHead {
  label: string
  ref: string
  sha: string
  user: IUser
  repo: IRepo
}

export interface IBase {
  label: string
  ref: string
  sha: string
  user: IUser
  repo: IRepo
}

export interface Links {
  self: Self
  html: Html
  issue: Issue
  comments: Comments
  review_comments: ReviewComments
  review_comment: ReviewComment
  commits: Commits
  statuses: Statuses
}

export interface Self {
  href: string
}

export interface Html {
  href: string
}

export interface Issue {
  href: string
}

export interface Comments {
  href: string
}

export interface ReviewComments {
  href: string
}

export interface ReviewComment {
  href: string
}

export interface Commits {
  href: string
}

export interface Statuses {
  href: string
}