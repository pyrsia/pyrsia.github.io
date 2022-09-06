# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
npm i
```

### Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Making changes locally before you submit a PR

This docusaurus project pulls all the documentation from the [Pyrsia](github.com/pyrsia/pyrsia) repo and copies docs and blogs into local folders
to be published. You will see that the download happens using a script in `package.json`.

By default the script will download the latest and greatest from the Pyrsia repo. If you are working locally and want your local changes to be tested on docusaurus, you can do so by editing the following line in `package.json`

```
 "download-main-repo": "cp -r <path to your pysia repo>/docs ./ && cp -r <path to your pysia repo>/blog ./"
```

Once you make this change and run `npm start` you will see that the docs that are shown are from your local repo. Confirm by making a small change in the docs folder and verifying that it shows up on the localhost website before you proceed.
