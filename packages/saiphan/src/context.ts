
// sample object
const needs = {
  prep: {
    result: 'success',
    outputs: {
      userId: 234,
    },
  },
};

// sample object
const steps = {
  'my-step': {
    outputs: {},
    outcome: 'success',
    conclusion: 'success',
  },
};


export interface ContextGihubOption {
  owner?: string;
  repo?: string;
  event_name?: string;
  workflow?: string;
  repository_visibility?: string;
  username?: string;
  email?: string;
  name?: string;
  commit_message?: string;
  ref?: string;
  jobId?: string;
}

/**
 * Init context for testing (Push Event)
 * @param option
 * @returns
 */
export function initContextGithub(option: ContextGihubOption = {}) {
  const owner = option.owner ?? 'mildronize';
  const repo = option.repo ?? 'saiphan';
  const event_name = option.event_name ?? 'push';
  const workflow = option.workflow ?? '${workflow}';
  const repository_visibility = option.repository_visibility ?? 'public';
  const username = option.username ?? 'mildronize';
  const email = option.email ?? 'john@email.com';
  const name = option.name ?? 'John Doe';
  const commit_message = option.commit_message ?? 'Update README.md';
  const ref = option.ref ?? 'refs/heads/main';
  const jobId = option.jobId ?? 'build';
  // sample object when push event
  return {
    token: `ghs_A6oVa`,
    job: `${jobId}`,
    ref: `${ref}`,
    sha: `fa825a3e9e47ef3d585e62e885dc04c573c33cc2`,
    repository: `${owner}/${repo}`,
    repository_owner: `${owner}`,
    repository_owner_id: 3647850,
    repositoryUrl: `git://github.com/${owner}/${repo}.git`,
    run_id: 4871234356,
    run_number: 3,
    retention_days: 90,
    run_attempt: 1,
    artifact_cache_size_limit: 10,
    repository_visibility: `${repository_visibility}`,
    repository_id: 635736144,
    actor_id: 3647850,
    actor: `${owner}`,
    triggering_actor: `${owner}`,
    workflow: `${workflow}`,
    head_ref: null,
    base_ref: null,
    event_name: `${event_name}`,
    event: {
      after: `fa825a3e9e47ef3d585e62e885dc04c573c33cc2`,
      base_ref: null,
      before: `7d422958a27830c0edc54bdbe9472c49b9d8393c`,
      commits: [
        {
          author: {
            email: `${email}`,
            name: `${name}`,
            username: `${username}`,
          },
          committer: {
            email: `${email}`,
            name: `${name}`,
            username: `${username}`,
          },
          distinct: true,
          id: `fa825a3e9e47ef3d585e62e885dc04c573c33cc2`,
          message: `${commit_message}`,
          timestamp: `2023-05-03T18:12:51+07:00`,
          tree_id: `1d14230a2bdb0b2a29137642634a68a4c21db5d5`,
          url: `https://github.com/${owner}/${repo}/commit/fa825a3e9e47ef3d585e62e885dc04c573c33cc2`,
        },
      ],
      compare: `https://github.com/${owner}/${repo}/compare/7d422958a278...fa825a3e9e47`,
      created: false,
      deleted: false,
      forced: true,
      head_commit: {
        author: {
          email: `${email}`,
          name: `${name}`,
          username: `${owner}`,
        },
        committer: {
          email: `${email}`,
          name: `${name}`,
          username: `${owner}`,
        },
        distinct: true,
        id: `fa825a3e9e47ef3d585e62e885dc04c573c33cc2`,
        message: `${commit_message}`,
        timestamp: `2023-05-03T18:12:51+07:00`,
        tree_id: `1d14230a2bdb0b2a29137642634a68a4c21db5d5`,
        url: `https://github.com/${owner}/${repo}/commit/fa825a3e9e47ef3d585e62e885dc04c573c33cc2`,
      },
      pusher: {
        email: `${email}`,
        name: `${owner}`,
      },
      ref: `${ref}`,
      repository: {
        allow_forking: true,
        archive_url: `https://api.github.com/repos/${owner}/${repo}/{archive_format}{/ref}`,
        archived: false,
        assignees_url: `https://api.github.com/repos/${owner}/${repo}/assignees{/user}`,
        blobs_url: `https://api.github.com/repos/${owner}/${repo}/git/blobs{/sha}`,
        branches_url: `https://api.github.com/repos/${owner}/${repo}/branches{/branch}`,
        clone_url: `https://github.com/${owner}/${repo}.git`,
        collaborators_url: `https://api.github.com/repos/${owner}/${repo}/collaborators{/collaborator}`,
        comments_url: `https://api.github.com/repos/${owner}/${repo}/comments{/number}`,
        commits_url: `https://api.github.com/repos/${owner}/${repo}/commits{/sha}`,
        compare_url: `https://api.github.com/repos/${owner}/${repo}/compare/{base}...{head}`,
        contents_url: `https://api.github.com/repos/${owner}/${repo}/contents/{+path}`,
        contributors_url: `https://api.github.com/repos/${owner}/${repo}/contributors`,
        created_at: 1683111176,
        default_branch: `main`,
        deployments_url: `https://api.github.com/repos/${owner}/${repo}/deployments`,
        description: null,
        disabled: false,
        downloads_url: `https://api.github.com/repos/${owner}/${repo}/downloads`,
        events_url: `https://api.github.com/repos/${owner}/${repo}/events`,
        fork: false,
        forks: 0,
        forks_count: 0,
        forks_url: `https://api.github.com/repos/${owner}/${repo}/forks`,
        full_name: `${owner}/${repo}`,
        git_commits_url: `https://api.github.com/repos/${owner}/${repo}/git/commits{/sha}`,
        git_refs_url: `https://api.github.com/repos/${owner}/${repo}/git/refs{/sha}`,
        git_tags_url: `https://api.github.com/repos/${owner}/${repo}/git/tags{/sha}`,
        git_url: `git://github.com/${owner}/${repo}.git`,
        has_discussions: false,
        has_downloads: true,
        has_issues: true,
        has_pages: false,
        has_projects: true,
        has_wiki: true,
        homepage: null,
        hooks_url: `https://api.github.com/repos/${owner}/${repo}/hooks`,
        html_url: `https://github.com/${owner}/${repo}`,
        id: 635736144,
        is_template: false,
        issue_comment_url: `https://api.github.com/repos/${owner}/${repo}/issues/comments{/number}`,
        issue_events_url: `https://api.github.com/repos/${owner}/${repo}/issues/events{/number}`,
        issues_url: `https://api.github.com/repos/${owner}/${repo}/issues{/number}`,
        keys_url: `https://api.github.com/repos/${owner}/${repo}/keys{/key_id}`,
        labels_url: `https://api.github.com/repos/${owner}/${repo}/labels{/name}`,
        language: null,
        languages_url: `https://api.github.com/repos/${owner}/${repo}/languages`,
        license: null,
        master_branch: `main`,
        merges_url: `https://api.github.com/repos/${owner}/${repo}/merges`,
        milestones_url: `https://api.github.com/repos/${owner}/${repo}/milestones{/number}`,
        mirror_url: null,
        name: `${repo}`,
        node_id: `R_kgDOJeSQUA`,
        notifications_url: `https://api.github.com/repos/${owner}/${repo}/notifications?since`,
        open_issues: 0,
        open_issues_count: 0,
        owner: {
          avatar_url: `https://avatars.githubusercontent.com/u/3647850?v=4`,
          email: `${email}`,
          events_url: `https://api.github.com/users/${owner}/events{/privacy}`,
          followers_url: `https://api.github.com/users/${owner}/followers`,
          following_url: `https://api.github.com/users/${owner}/following{/other_user}`,
          gists_url: `https://api.github.com/users/${owner}/gists{/gist_id}`,
          gravatar_id: null,
          html_url: `https://github.com/${owner}`,
          id: 3647850,
          login: `${owner}`,
          name: `${owner}`,
          node_id: `MDQ6VXNlcjM2NDc4NTA=`,
          organizations_url: `https://api.github.com/users/${owner}/orgs`,
          received_events_url: `https://api.github.com/users/${owner}/received_events`,
          repos_url: `https://api.github.com/users/${owner}/repos`,
          site_admin: false,
          starred_url: `https://api.github.com/users/${owner}/starred{/owner}{/repo}`,
          subscriptions_url: `https://api.github.com/users/${owner}/subscriptions`,
          type: `User`,
          url: `https://api.github.com/users/${owner}`,
        },
        private: false,
        pulls_url: `https://api.github.com/repos/${owner}/${repo}/pulls{/number}`,
        pushed_at: 1683112375,
        releases_url: `https://api.github.com/repos/${owner}/${repo}/releases{/id}`,
        size: 0,
        ssh_url: `git@github.com:${owner}/${repo}.git`,
        stargazers: 0,
        stargazers_count: 0,
        stargazers_url: `https://api.github.com/repos/${owner}/${repo}/stargazers`,
        statuses_url: `https://api.github.com/repos/${owner}/${repo}/statuses/{sha}`,
        subscribers_url: `https://api.github.com/repos/${owner}/${repo}/subscribers`,
        subscription_url: `https://api.github.com/repos/${owner}/${repo}/subscription`,
        svn_url: `https://github.com/${owner}/${repo}`,
        tags_url: `https://api.github.com/repos/${owner}/${repo}/tags`,
        teams_url: `https://api.github.com/repos/${owner}/${repo}/teams`,
        topics: [],
        trees_url: `https://api.github.com/repos/${owner}/${repo}/git/trees{/sha}`,
        updated_at: `2023-05-03T10:52:56Z`,
        url: `https://github.com/${owner}/${repo}`,
        visibility: `public`,
        watchers: 0,
        watchers_count: 0,
        web_commit_signoff_required: false,
      },
      sender: {
        avatar_url: `https://avatars.githubusercontent.com/u/3647850?v=4`,
        events_url: `https://api.github.com/users/${owner}/events{/privacy}`,
        followers_url: `https://api.github.com/users/${owner}/followers`,
        following_url: `https://api.github.com/users/${owner}/following{/other_user}`,
        gists_url: `https://api.github.com/users/${owner}/gists{/gist_id}`,
        gravatar_id: null,
        html_url: `https://github.com/${owner}`,
        id: 3647850,
        login: `${username}`,
        node_id: `MDQ6VXNlcjM2NDc4NTA=`,
        organizations_url: `https://api.github.com/users/${owner}/orgs`,
        received_events_url: `https://api.github.com/users/${owner}/received_events`,
        repos_url: `https://api.github.com/users/${owner}/repos`,
        site_admin: false,
        starred_url: `https://api.github.com/users/${owner}/starred{/owner}{/repo}`,
        subscriptions_url: `https://api.github.com/users/${owner}/subscriptions`,
        type: `User`,
        url: `https://api.github.com/users/${owner}`,
      },
    },
    server_url: `https://github.com`,
    api_url: `https://api.github.com`,
    graphql_url: `https://api.github.com/graphql`,
    ref_name: `main`,
    ref_protected: false,
    ref_type: `branch`,
    secret_source: `Actions`,
    workflow_ref: `${owner}/${repo}/${workflow}@${ref}`,
    workflow_sha: `fa825a3e9e47ef3d585e62e885dc04c573c33cc2`,
    workspace: `/home/runner/work/${repo}/${repo}`,
    action: `__run`,
    event_path: `/home/runner/work/_temp/_github_workflow/event.json`,
    action_repository: null,
    action_ref: null,
    path: `/home/runner/work/_temp/_runner_file_commands/add_path_4c4ceb32-5fc4-4ec9-9d8e-3676e84a35a1`,
    env: `/home/runner/work/_temp/_runner_file_commands/set_env_4c4ceb32-5fc4-4ec9-9d8e-3676e84a35a1`,
    step_summary: `/home/runner/work/_temp/_runner_file_commands/step_summary_4c4ceb32-5fc4-4ec9-9d8e-3676e84a35a1`,
    state: `/home/runner/work/_temp/_runner_file_commands/save_state_4c4ceb32-5fc4-4ec9-9d8e-3676e84a35a1`,
    output: `/home/runner/work/_temp/_runner_file_commands/set_output_4c4ceb32-5fc4-4ec9-9d8e-3676e84a35a1`,
  };
}
