---
title: "Introduction to data"
description: "The data section in the Budibase UI is where you add and manage your data. Budibase workspaces rely on data and it is strongly advised to create your data structure before designing your web application or automation. Your data structure will involve tables, columns, rows, and views - these are the \u2026"
sourceUrl: "https://docs.budibase.com/docs/data"
---
# Introduction to data

The data section in the Budibase UI is where you add and manage your data. Budibase workspaces rely on data and it is strongly advised to create your data structure before designing your web application or automation. Your data structure will involve tables, columns, rows, and views - these are the building blocks that hold and present your data in a structured manner.

Predefining the data structure also greatly helps in building the UI as the UI can be automatically generated based on the data structure, as well as any logic, filtering, and sorting.

Within Budibase we have a single built-in Datasource and several external datasources. When using a self-hosted instance of Budibase, an external datasource can still live on the same device, just not within the Budibase container.

Any datasources you create will be available to use within all apps and automations in your workspace.

## Getting started with data

By default, every Budibase workspace will start with a Budibase DB datasource. This database contains a [Users table](/docs/data/users-table) which is considered a special table that cannot be removed. This table includes all the users who have access to your application, with their respective roles.

## Adding new datasources

There are a broad set of available external datasources you can connect to right from the Budibase UI.

You can add new data sources by clicking the `+` button on the left-hand panel when you're on the Data tab, as seen in the image below.

Once you've clicked the `Add source` button, you'll see a modal presented with the available datasources. Pick your datasource of choice, and you will be presented with a configuration screen to connect to your remote datasource. You can also [use AI to generate](/docs/data/ai-powered-table-generation) a new Budibase DB table for you.

You can add as many datasources as you need following the same process.

To know more about a particular datasource, look at the relevant documentation page in the menu.
