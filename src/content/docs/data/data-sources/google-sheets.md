---
title: "Google Sheets"
description: "Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite. \ud83d\udea7Google Sheets CompatibilityThe Google Sheets integration only supports simple table structures. For data fetching to work correctly, the sheet must have a clear header row as the first availab\u2026"
sourceUrl: "https://docs.budibase.com/docs/google-sheets"
---
# Google Sheets

Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite.

> 🚧
>
> ### Google Sheets Compatibility
>
> The Google Sheets integration only supports simple table structures. For data fetching to work correctly, the sheet must have a clear header row as the first available row.

## Setup

Navigate to the spreadsheet you want to integrate into Budibase. Copy the URL.

## Connect

Click the `+` button to add a datasource, and then select 'Google Sheets'.

You will then be prompted to sign-in with a Google account. This account should have permissions to view the spreadsheet you want to work with.

Allow Budibase to access your Google account.

> ❗️
>
> ### Self-hosting
>
> If you are self-hosted, you will need to setup [Google SSO](https://docs.budibase.com/docs/sso-with-google)

Once you have authenticated with Google, you will be asked to provide your Google Sheet URL

Once Budibase successfully connects to your Google Sheet, you can select which worksheets to import (or skip):

> 🚧
>
> ### Header row needed
>
> Your worksheets will need to have a header row to successfully import into Budibase. Your header row must be the first row in each sheet.

## Data view

Each sheet can be viewed and edited as a grid within the Budibase builder.

You can edit columns, add rows, edit rows and delete rows via the Grid interface. Changes made in Budibase will be reflected in that sheet of your Google spreadsheet. You can also create views that will not be reflected in your Google Sheet, but will help you visualise existing data.

In addition, Google Sheets data tables can utilise the row actions, such as [Save Row](https://docs.budibase.com/docs/actions#save-row) and be used as a [Form schema](https://docs.budibase.com/docs/forms#form-schema)

## Query

The Google Sheets connector supports adding queries for when you might need to [transform data](/docs/data/transformers) or perform CRUD operations with specific [bindings](https://docs.budibase.com/docs/custom-queries#using-query-bindings).

To add a query, select your Google spreadsheet datasource, and click `Add query` at the bottom of the configuration page.

### Create

Allows you to insert a row. You must provide the name of the sheet as well as a JSON payload to specify the column names and value.

The row number of the created entry will be returned on success.

### Read

Simply returns all the rows of a specified sheet. The transformer allows you to filter and map the data into the schema you desire.

### Update

Similar to *Create* in that you must provide a payload of data, however you must also provide a row index to be overwritten.

> 📘
>
> ### Row index
>
> Row indexing starts from zero - the first row below the header row (usually the second row).

### Delete

The same as *Update*, a sheet name and row index must be provided. That row will be deleted.

Rows will be shifted up after deletion.
