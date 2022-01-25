---
title: "How To Tips"
linkTitle: "How To Tips"
weight: 10
description: >
  Tips on opening an issue, making documentation changes, submit coding changes, create videos, and help in project management.
---

## Opening an Issue

GitHub Issues are used to track all bugs, enhancement requests, and "todos."  Pyrsia is spread across many repositories so the [pyrsia/pyrsia](https://github.com/pyrsia/pyrsia) repo is used for all issues.  Issues should have a link, using markdown `[]()` link format, to the true repository in which the bug, enhancement, or "todos" needs to be made.  

Please be detailed in your description of the issue.  Not everything needs to go in the summary line.  Feel free to use the description area to provide additional details.

## Making Website and Documentation Changes

Documentation is stored in [pyrsia/pyrsia.github.io](https://github.com/pyrsia/pyrsia.github.io) along with the website.  The website is at the root of the directory structure `/content/en/` and documentation is in `/content/en/guides/`. The website includes the documentation and is served up by a [hugo/docsy](https://www.docsy.dev/docs/getting-started/) server.  You can run this server locally to view your changes before committing to Github. 

### Setup for Website and Documentation Updates

1. [Install hugo](https://www.docsy.dev/docs/getting-started/) locally.  If you are on Windows make sure to install the *extended* packages as well. 
2. Fork the [pyrsia/pyrsia.github.io](https://github.com/pyrsia/pyrsia.github.io) to your GitHub account.
3. Clone the new repo to your computer.
4. Launch an editor such as [Visual Studio Code](https://code.visualstudio.com/).  Make sure the *Markdown Preview Enhanced by Yiyi Wang* is installed.  This will give you a split screen of the markdown and the rendered version.
5. The markdown files can be found under the `content/en/` (website) and the `content/en/guides/` (the documentation).
6. Start your hugo server.  Open a command prompt and cd to your local git repo directory.  From the root of the repo run `hugo server`.  This will start the local hugo server running.  The pages can be viewed in your browser using the `http://localhost:1313/` url.
7. Next make a change.  This change will automatically be seen in the Visual Studio Code - Markdown Preview Enhanced window.  Also, the hugo server will automatically render the changed markdown page.  

Note: Visual Studio is only a preview and will not render all markdown updates such as embedded html.  You will need to view the pages being hosted by the hugo server in your browser for an accurate rendering.

[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) can be used for the basic page layout.  CSS has been applied to the Docsy theme template in order to tweak the final page rendering.  

8. Create a Pull Request to merge in your changes. See [PR Cheat Sheet](/guides/contributorguide/getting-started/pull-request-cheat-sheet/)

## Making Coding Changes

The Pyrsia code base is stored mainly in the [pyrsia/pyrsia](https://github.com/pyrsia/pyrsia) repository.  Pyrsia is written in Rust. 

### Steps

1. Fork the [pyrsia/pyrsia](https://github.com/pyrsia/pyrsia) to your GitHub account.
2. Clone the new repo to your computer.
3. Make the coding changes with your favorite editor.
4. The code can be run and debug natively in your favorite editor.  You may need to run multiple instances of the `pyrsia_node` in order to test certain scenarios.  This can be achieved by passing a unique port number when you start the `pyrsia_node` running.
5. Create a Pull Request to merge in your changes. See [PR Cheat Sheet](/guides/contributorguide/getting-started/pull-request-cheat-sheet/)

## Project Management

### GitHub Kanban Board

[Kanban Board for Pyrsia](https://github.com/orgs/pyrsia/projects/2) is used to track tasks and development efforts.  The cards will contain links to the GitHub issues where appropriate.

### GitHub Labels and Tags

GitHub issues will be label to help filter and navigate issues.

## Release Numbering

As a rust project using cargo, we will be adhering to the [Semenatic Versioning](https://semver.org/) compatibility requirements as
specified [here](https://doc.rust-lang.org/cargo/reference/resolver.html?highlight=version#semver-compatibility)
