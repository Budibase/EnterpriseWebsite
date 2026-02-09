---
title: "Dev / Prod switcher"
description: "Understanding Dev and Prod Environments In Budibase, you can switch between two different data environments: Dev (development) and Prod (production). This is a core experience that allows you to safely build and test data changes. The Budibase database has these established by default, though extern\u2026"
sourceUrl: "https://docs.budibase.com/docs/dev-prod-switcher"
---
# Understanding Dev and Prod Environments

In Budibase, you can switch between two different data environments: Dev (development) and Prod (production). This is a core experience that allows you to safely build and test data changes. The Budibase database has these established by default, though external datasources can be configured to use the Dev/Prod Switcher using Environment Variables.

## What's the Difference?

The Dev environment is for building, testing, and experimenting with data, while the prod environment is the live, End User data.

## Dev Environment

This is your data sandbox. The Dev environment is where you can freely build, edit, and construct your data, automations and apps.

- **What it's for:** Configuring your schema, experimenting with data, and making changes that aren't ready to go live.
- **The data:** Any data (records) you see or edit in Dev is test data. It is not connected to your live users. This means you can't accidentally mess up or delete real user data while you're in this environment.

> ❗️
>
> ### Editing/Deleting columns
>
> If you edit/delete a column in Dev, then click publish, the column and its data within Prod will be updated/deleted.

## Prod Environment

> 📘
>
> ### Access Prod environment
>
> To access the Prod environment, your table must be published. If it is not published, when switching to the Prod environment you will be prompted to either Publish (without copying any data), or *Seed & Publish*, which will copy over the rows from your Development Environment. Seeding to production can only be done when the production table is empty.

The Prod environment contains live data. Any changes you make here will be immediately live.

- **What it's for:** Making changes that need to go live immediately and viewing real-time data.
- **The data:** Any data you see or edit in Prod is real production data. Always be careful when making changes in this environment, as they will immediately go live.

## How to Switch Environments

Switching between Dev and Prod is simple. Look for the dev/prod switcher within the action bar. Select the environment you want to switch to. That's it!

## Configuring External Databases with the Dev/Prod Switcher

Using [Environment Variables](/docs/data/environment-variables) it is possible to set different values for Production and Development environments. Knowing this, when connecting to your external datasource, instead of providing a plain text string - `database_name` - you should select (or create) an environment variable which returns the values for `production_database_name` and `development_database_name`  - these values can be configured for all variables in the connection, for example if your two environments are hosted on different servers with different passwords.

In instances such as this, it is essential that the Production schema matches the Development schema. Columns found in Development but absent from Production will cause errors. Columns found in Production but absent from Development will not be shown.
