# Pakufi Headless CMS

This is the headless CMS to be use and connected to [Pakufi website](https://github.com/pakufi-agency/website/website).
It use Strapi CMS

## Before starting:

Before starting you will need:

- local postgres (find out how to install and set up postgresdb in your local machine and create one user and one database for this project)
- Nodejs (global)
- npm (global)
- Env variables in .env.development

Create a local postgres DB and keep in mind the local database credentials.

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

1. Pull updated content from Production Strapi instance: Go in your local Strapi directory and run `npm run strapi transfer -- --from ${STRAPI_PROD_URL}/admin`. If you have problems with `strapi transfer`, you can use the restore-backup-content.sh file, to restore the last backups. If you do so, please check carefully that the last backups is up to date with production. (check the Backups section for more information).
2. create a new branch from `develop` and give it a meaningful name following best practice

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

## Backups

Currently we backups just the text content. No media is backed up.
There is a Github Action that backups the content from production to a /backups folder in json format.
The backup Json file is saved in /backups/content.
In the backups folder there is also `restore-backup-content.sh` script which should import the backup Json file in the local instance and restore the content.
At the moment the `restore-backup-content.sh` is not working as it might not possible to PUSH from Strapi Cloud.

To update and keep remote-local in sync, Strapi provide a `strapi transfer` CLI but currently seems to have a bug and hang on at the assets.

Further investigation is required for a proper backups system.

## Helpful resources

https://docs.strapi.io/dev-docs/data-management
https://docs.strapi.io/dev-docs/data-management/transfer
https://docs.strapi.io/dev-docs/data-management/import
https://docs.strapi.io/dev-docs/cli#strapi-export
