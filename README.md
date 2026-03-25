# Pakufi Headless CMS

This is the headless CMS to be use and connected to [Pakufi website](https://github.com/pakufi-agency/website/website).
It use Strapi CMS

## Before starting:

Before starting you will need:

- local postgres (find out how to install and set up postgresdb in your local machine and create one user and one database for this project)
- Nodejs (global)
- npm (global) - used for both local development and production deployment
- Env variables in .env.development

Create a local postgres DB and keep in mind the local database credentials.

### Package Manager Setup

This project uses **npm** for both local development and production deployment on Strapi Cloud.

**Why npm?**

**Strapi Cloud Compatibility**: npm works reliably with Strapi Cloud's build environment. Pnpm doesn't seems to work properly with Strapi Cloud's build environment.

## How to start:

- clone the repo
- cd /server
- npm install
- npm run develop

Now you are running an new and empty instance of strapi.
You want to have the same version of Strapi Production so you need to populate your local instance with Pakufi data.

#### How?

You have two option to populate your local Strapi instance:

1. Using the `strapi transfer` key from production
   Go to `/serve` and run `npm run strapi transfer -- --from ${STRAPI_PROD_URL}/admin`. You will need a transfer Strapi Key. Ask to your team which one it is.
   This command will take content, assets and configuration from production and put it in your local database. It erase any data you have on your local database.
   Unfortunately, Strapi team often has issue with this command and it doesn't always work.
   For this reason we often do backups.

2. You should be able to restore a recent back up to populate your local strapi.
   In the `backups` folder of this repo, you should find several backups. The name is the date of when the backup was done so pick the most recent one.
   Then you can use `npm run strapi import -- -f export_20250311155218.tar.gz.enc --key "some-key"` to import all the data.
   This should import also production configuration.

Issue that can arise:

- If you cannot retrieve any data from `http://localhost:1337/graphql` playground, you might need to change permission: Go in Setting > User & Permission > Roles and be sure that both Public and Authenticate content Type have `Find` and `FindOne` permission check.

- Is very likely that you will need to create a new API Tokens in your local strapi and add it to your Frontend `STRAPI_API_KEY` env.development. Is advise to create a FULL ACCESS key.

Once you are able to run your instance, double check that is everything up-to-date with production and if is not, update it manually (maybe some images or small part of text is out of date).

## Development Process

#### Before starting to work

1. **Production is source of truth** - Always sync FROM production to local
2. Pull updated content from Production Strapi instance: Go in your local Strapi directory and run:
   ```bash
   npx strapi transfer --from=https://energized-charity-48b64f9469.strapiapp.com/admin --from-token=cbd3c12342d945c36ebc80bb5c217b737ad61677bdc6b99d0f996e0ba6a456c0fe691532eba2162f54efd53e2fb0c5b2a8ed37dc512e8e97aaad50338f05159a12fd0941c16c1e04f46009916638f936a98e303c5452546f3d06f05926f22ff789920e7c4871f3ff4a348cb1da38fc8219b9023d7411c5acb37e70bde04f259b --exclude files
   ```
   - `--exclude files` skips assets due to Strapi transfer bug with assets
   - Assets come from Cloudflare R2 bucket, not database
3. Create a new branch from `develop` and give it a meaningful name following best practice

#### After working

1. If you change Strapi Content-Type, commit your changes to this repo
2. Open a PR and wait to be merge
3. If you have to change or add new data (Content Manager in Strapi), do it from the Production instance. Be sure to coordinate with your manager before changing any data that is already live

#### After deployment

1. After deploying to production, sync local again to stay in sync:
   ```bash
   npx strapi transfer --from=https://energized-charity-48b64f9469.strapiapp.com/admin --from-token=cbd3c12342d945c36ebc80bb5c217b737ad61677bdc6b99d0f996e0ba6a456c0fe691532eba2162f54efd53e2fb0c5b2a8ed37dc512e8e97aaad50338f05159a12fd0941c16c1e04f46009916638f936a98e303c5452546f3d06f05926f22ff789920e7c4871f3ff4a348cb1da38fc8219b9023d7411c5acb37e70bde04f259b --exclude files
   ```

**IMPORTANT:**
- **Never use `transfer --to`** - it makes local the source of truth
- **Always use `transfer --from`** - keeps production as source of truth
- **Always use `--exclude files`** - avoids asset transfer bugs

## Deployment

Strapi production is hosted in Strapi Cloud.
You can access it via: https://cloud.strapi.io (ask for credential)

Whenever code is pushed to `main`, it will automatically be deployed on production.

Content or data needs to manually be transfer to production. You can do in several ways:

**RECOMMENDED:** Always use `transfer --from` to keep production as source of truth

Other ways to AVOID unless absolutely necessary:

1. Via node script `npm run transfer:to:production` (AVOID - makes local source of truth)
2. Via command line `npx strapi transfer --to=REMOTE_STRAPI_INSTANCE_URL --to-token=TRANSFER_TOKEN_FULL_ACCESS` (AVOID - makes local source of truth)

Production configuration are saved in Strapi Cloud.

## Backups

Backups are done with the `export` command from strapi.
Every week, needs to be done this steps:

- update local with production via `transfer` command
- `export` local instance using `some-key` as encryption key i.e. `npm run strapi export -- --key some-key` or `npx strapi export --key some-key`
- upload export file to github

TODO: Automate this steps.

Unfortunately Strapi Cloud do not allow to export/import directly from production.
And unfortunately again, it seems they often have a bug with the `transfer` command. Often the transfer get stuck at `assets`. This happen mostly when transfering from production to local but might happen also the other way around.
For this reason, local export are very important.

# Common Issue:

- strapi cli commands are slightly different if you are using `npm` or `npx` or `strapi cli` directly. Keep an eye on details.

## Helpful resources

https://docs.strapi.io/dev-docs/data-management

https://docs.strapi.io/dev-docs/data-management/transfer

https://docs.strapi.io/dev-docs/data-management/import

https://docs.strapi.io/dev-docs/cli#strapi-export
