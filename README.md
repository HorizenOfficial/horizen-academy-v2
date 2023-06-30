# Horizen Academy V2

This repository hosts the source code for the Horizen Academy website. You can view the deployed site at [horizen.io/academy](https://www.horizen.io/academy/)

## Table of Contents

-   [About the Project](#about-the-project)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Development](#development)
-   [Build](#build)
-   [Deployment](#deployment)

## About The Project

This project hosts the source code for the Horizen Academy website. The website is built using Docusaurus 2, a modern static website generator. We're using Cloudflare Pages as our hosting platform.

## Technologies Used

-   [Docusaurus 2](https://docusaurus.io/)
-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting Started

### Prerequisites

This project requires the following tools:

-   Node.js
-   npm

Some specific configurations will be required for this project. You can check the details in [this guide](https://docs.google.com/document/d/1CSYHjktlbkVgLX8TUKhz2j9H5KvzfYJXF6vuCYxnMFE/edit?usp=sharing)

### Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository using SSH:

```
git clone git@github.com:HorizenOfficial/horizen-academy-v2.git
```

2. Navigate to the project directory:

```
cd ./horizen-academy-v2
```

3. Install the project dependencies:

```
npm install
```

### Setup your environment

Create a file named `.env.local` inside the `env/` folder. You can use the `.env.local.example` file as a guide.

## Development

To run the project locally, use the following command:

```
npm run start
```

This will start the development server at <http://localhost:8000>

## Build

To build the project, use the following command:

```
npm run build
```

This will build the project into the `public` directory.

We currently deploy this project to multiple environments, so we need to specify which build command to run for each environment:

-   `build:dev` is used by Cloudflare Pages to build the site for the dev environment. Each time we push a commit to any branch that is not `main`, Cloudflare Pages will create a preview environment for that branch using this command.

-   `build:prod` is used by Cloudflare Pages to build the site for the [prod environment](https://main.horizen-academy-v2.pages.dev/). Each time we deploy to the `main` branch, Cloudflare Pages will build the site using this command.

-   Horizen.io hosts this project as a submodule, and as part of its pipeline, it executes the `build:dev-horizen` and `build:prod-horizen` commands for the development and production environments of the Horizen.io project, respectively.

## Deployment

Simply commit your changes and push them. Cloudflare Pages will automatically build and deploy your site.

Take a look at the Cloudflare Pages pipeline on Github to get the URL of your deployed site.

More detailed information about the workflow can be found in [this guide](https://horizenlabs.atlassian.net/l/cp/5GftU17P)
