# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Setup your environment

Create a file named `.env.local` inside the `env/` folder. You can use the `.env.local.example` file as a guide.


### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory.

> Note: the static content generated by this command is for local testing only. To test it locally you can serve it using the `npm run serve` command.
 
We currently deploy this project to multiple environments, so we need to specify which build command to run for each environment:

- `build:dev` is used by Cloudflare Pages to build the site for the dev environment. Each time we push a commit to any branch that is not `main`, Cloudflare Pages will create a preview environment for that branch using this command.

- `build:prod` is used by Cloudflare Pages to build the site for the [prod environment](https://main.horizen-academy-v2.pages.dev/). Each time we deploy to the `main` branch, Cloudflare Pages will build the site using this command.

- Horizen.io hosts this project as a submodule, and as part of its pipeline, it executes the `build:dev-horizen` and `build:prod-horizen` commands for the development and production environments of the Horizen.io project, respectively.


### Deployment

Simply commit your changes and push them. Cloudflare Pages will automatically build and deploy your site.

Take a look at the Cloudflare Pages pipeline on Github to get the URL of your deployed site.
