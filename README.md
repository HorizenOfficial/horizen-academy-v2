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

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Simply commit your changes and push them. Cloudflare Pages will automatically build and deploy your site.

Take a look at the Cloudflare Pages pipeline on Github to get the URL of your deployed site.
