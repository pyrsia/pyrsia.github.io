---
title: "Pull Request (PR) Cheat Sheet"
linkTitle: "Pull Request Cheat Sheet"
weight: 10
description: >
  Pull Request (PR) Cheat Sheet.
---

## Pull Request (PR) Cheat Sheet

### Quick look at Pull Requests

Patches for fixes, features, and improvements are accepted through pull requests. Here are some tips for contributing:

* Add Git Commit Signing to your local git install and to GitHub.  Here are the [config instructions](https://blog.petehouston.com/sign-git-commits/).
* Write good commit messages in the present tense ("Add X", not "Added X") with a short title, blank line, and bullet points if needed. Capitalize the first letter of the title and any bullet items. No punctuation in the title.
* Include tests to improve coverage and prevent regressions.
* Whenever possible, tag your pull request with appropriate Github labels and issue numbers.

**Important:** For any **breaking changes** that require a major version bump, add `BREAKING CHANGE` somewhere in the commit title or message.

### Terms

* Branch - series of commits
* Clone - create a local copy of a repo
* Commit - change to the repo
* Downstream - this would be your repository that is forked from an Pyrsia repo [sbtaylor15/pyrsia](https://github.com/sbtaylor15/pyrsia)
* Fetch - sync a repo with another
* Fork - your copy of the upstream repo
* Local Repo - a repo on your computer
* Pull - get changes from GitHub into your local repo
* Pull Request (PR) - changes to be merged from one repo to another repo
* Push - send your changes to GitHub
* Rebase - rewrite commit history
* Remote Repo - a repo on GitHub
* Squash - combining multiple commits into one
* Upstream - this would be an Pyrsia repository [pyrsia/pyrsia](https://github.com/pyrsia/pyrsia)

### Working scenarios

We want to update the User Guide that is in the [pyrsia/pyrsia.github.io](https://github.com/pyrsia/pyrsia.github.io) repo.

#### First pull request

1) Fork the Pyrsia repo
   In GitHub click on the Fork button for the repo you want to make a copy of, i.e. [pyrsia/pyrsia.github.io](https://github.com/pyrsia/pyrsia.github.io).  The fork will be created under your userid as [sbtaylor15/pyrsia.github.io](https://github.com/sbtaylor15/pyrsia.github.io).

2) Make a local copy of your repo [sbtaylor15/pyrsia.github.io](https://github.com/sbtaylor15/pyrsia.github.io). The url for the repo is under the *Code* button in GitHub for your repo.

   From a command prompt, `cd /home/steve/repos`

   Run `git clone https://github.com/sbtaylor15/pyrsia.github.io.git` this will create `/home/steve/repos/pyrsia.github.io`

3) Tell your local repo about the upstream repos (this only needs to be done once)
   
   By this step you will create `upstream` local variables which contain address of source and your forked repos. You can use them as parameters of `git` key word.

   ```
   git remote add upstream https://github.com/pyrsia/pyrsia.github.io.git
   ```
   `upstream` holds `https://github.com/pyrsia/pyrsia.github.io.git`

4) Make a branch for your work

   ```
   cd /home/steve/repos/pyrsia.github.io
   git checkout -b maintenance
   ``` 
   `maintenance` will be your branch name

5) Make some changes

   Update the files and commit the changes back to your local branch

   ```
   git add .
   git commit -m "changed some files"
   ```

   Do this as many time that you want.

6) Update GitHub forked repo with your local changes

   We can backup changes to GitHub at anytime without effecting anyone else.

   ```
   git push
   ```

   This syncs forked GitHub repo with your local branch.  Basically, you are overriding GitHub.

7) Create your Pull Request

    In GitHub, go to the upstream repo and do a new pull request.  Choose compare across
    forks.  Select your fork and main branch.

8) After the PR has been merged you need to bring your repo in sync with upstream since it has new commits

      ```
      git checkout main
      git fetch upstream
      git rebase upstream/main
      ```

#### Daily regime

1) Sync your local repo

      ```
      git pull upstream
      git push
      ```
      This will download the latest version of the upstream to your local repo and after push it will update (override) your forked GitHub repo

2) Make changes
   
3) Update GitHub forked repo with your local changes

      ```
      git push
      ```

4) Create your Pull Request

5) After PR merging, sync your repos (step 1)
