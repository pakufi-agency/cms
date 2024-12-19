# Pakufi Headless CMS

This is the headless CMS to be use and connected to [Pakufi website](https://github.com/pakufi-agency/website/website).
It use Strapi CMS

## Before starting:

Before starting you will need:

- local postgres (find out how to install and set up postgresdb in your local machine and create one user and one database for this project)

- Nodejs (global)
- npm (global)
- Env variables in .env.development

### Envernoment Variables

- Database: Fill in the values of these variables names based on your local postgres database
- Secrets: You will have to ask to your team for these. They are not mandatory to run the project
- `APP_KEYS` is needed to transfer the data between a local and remote version of Strapi

## How to start:

- clone the repo
- cd /server
- npm i
- npm run develop

## Development Process

#### Before starting to work

1. Import data from remote Strapi istance in your CLI with the command `npm run strapi import -- -f /path/to/my/file/export_20221213105643.tar.gz.enc`
   Strapi CLI is already part of Strapi package and there is no need to install it separately.
2. sync `main` and `develop` branch with remote repository
3. create a new branch from `develop` and give it a meaningful name following best practice

#### After working

1. If you change Strapi Content-Type, commit your changes to this repo
2. Open a PR and wait to be merge
3. If you have to change or add new data (Content Manager in Strapi), do it from the Production instance. Be sure to coordinate with your manager before changing any data that is already live

## Deployment

Strapi production is hosted in Strapi Cloud.
You can access it via: https://cloud.strapi.io (ask for credential)

Whenever code is pushed to `main`, it will automatically be deployed on production.

Content or data needs to manually be transfer to production via Strapi CLI `npm run strapi transfer -- --to=REMOTE_STRAPI_INSTANCE_URL --to-token=APP_KEYS`

Production configuration are saved in Strapi Cloud.

## Helpful resources

https://docs.strapi.io/dev-docs/data-management
https://docs.strapi.io/dev-docs/data-management/transfer
https://docs.strapi.io/dev-docs/data-management/import
https://docs.strapi.io/dev-docs/cli#strapi-export
