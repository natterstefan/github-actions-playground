# Github Actions Playground

## GitHub Actions Security

- [GitHub Actions: Control permissions for GITHUB_TOKEN | GitHub Changelog](https://github.blog/changelog/2021-04-20-github-actions-control-permissions-for-github_token/)
- [Automatic token authentication - GitHub Docs](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)
- [step-security/secure-workflows: Secure GitHub Actions CI/CD workflows via automated remediations](https://github.com/step-security/secure-workflows)
- ATTENTION: `pull_request_target`: "For workflows that are triggered by the
  `pull_request_target` event, the `GITHUB_TOKEN` is granted read/write
  repository permission unless the permissions key is specified and the workflow
  can access secrets, even when it is triggered from a fork.
  ([src](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target))

## Resources

- GitHub Actions Docs
  - [Events that trigger workflows - GitHub Docs](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [Awesome Actions | Project-Awesome.org](https://project-awesome.org/sdras/awesome-actions)
- [sdras/awesome-actions: A curated list of awesome actions to use on GitHub](https://github.com/sdras/awesome-actions)

## Actions I would like to test in the future

- [ ] licensed
  - Examples:
    [.github/workflows/update_and_check_licenses.yml](https://github.com/actions/labeler/blob/e54e5b338fbd6e6cdb5d60f51c22335fc57c401e/.github/workflows/update_and_check_licenses.yml)
    and
    [here](https://github.com/peaceiris/actions-label-commenter/commit/cc255e22e031205d18932cb76c5968fe893812c6)
    or
    [here](https://github.com/TimonVS/pr-labeler-action/blob/b47402568cce2e3e871eba362e7268d5a8fb54cc/.github/workflows/license-status.yml)
- [ ] [Ilshidur/action-discord: 🚀 GitHub Action that sends a Discord message.](https://github.com/Ilshidur/action-discord)
- [ ] [tylermurry/github-pr-landmine: A simple, language agnostic solution for creating manual mutation tests directly in-line with a GitHub pull request](https://github.com/tylermurry/github-pr-landmine)
- [ ] [vijaykramesh/pr-lint-action: A GitHub Action that verifies your pull request contains a reference to a Jira ticket.](https://github.com/vijaykramesh/pr-lint-action)
  (but for different SaaS tools than Jira)
- [ ] [gregsdennis/dependencies-action: A GitHub Action that enforces PR dependencies](https://github.com/gregsdennis/dependencies-action)
- [ ] [kamilkisiela/graphql-inspector: 🕵️‍♀️ Validate schema, get schema change notifications, validate operations, find breaking changes, look for similar types, schema coverage](https://github.com/kamilkisiela/graphql-inspector)
- [ ] [actions/dependency-review-action: A GitHub Action for detecting vulnerable dependencies in your PRs](https://github.com/actions/dependency-review-action)
- [ ] https://github.com/marketplace/actions/lint-action
- [ ] Slack Notifications
  - https://github.com/slackapi/slack-github-action
  - https://github.com/act10ns/slack
  - https://github.com/rtCamp/action-slack-notify
- [ ] Try GitHub Action Summaries https://github.blog/2022-05-09-supercharging-github-actions-with-job-summaries/
- [ ] https://github.blog/2022-07-26-introducing-even-more-security-enhancements-to-npm/

## License

[MIT](./LICENSE)
