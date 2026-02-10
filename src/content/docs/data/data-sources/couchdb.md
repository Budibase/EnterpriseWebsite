---
title: "CouchDB"
description: "Apache CouchDB is an open-source NoSQL database. At Budibase we use CouchDB as the underlying technology of our internal Budibase DB. Connect To start, click on the Add source button of the Data section, select CouchDB, and click Continue. CouchDB datasource Next enter a connection URL and database \u2026"
sourceUrl: "https://docs.budibase.com/docs/couchdb"
---
# CouchDB

Apache CouchDB is an open-source NoSQL database.

At Budibase we use CouchDB as the underlying technology of our internal [Budibase DB](/docs/data/budibasedb).

## Connect

To start, click on the `Add source` button of the **Data** section, select *CouchDB*, and click `Continue`.

Next enter a connection URL and database to connect to. Click `Save and continue to query`.

### Providing a username and password

If you need to authenticate with a username and password, you can that by providing them in the URL as so:

## Adding a query

You can add a query by clicking `Add query` on the CouchDB configuration page.

> 🚧
>
> ### Connecting to a BudibaseDB
>
> You can use this connector to connect to your internal Budibase tables, including the [Users table](/docs/data/users-table).
>
> We recommend that you do not do this, because a bad write/delete could break your apps.
>
> If you are determined, you will need to [port forward](https://docs.budibase.com/docs/accessing-couchdb).

There are a number of query types available, which are chosen from the *Function* dropdown.

For more information on query syntax for this connector, you can look at the [PouchDB API docs](https://pouchdb.com/api.html).

### Read

Performs an **allDocs** query against your configured database. If you choose to provide no query body, you still need to add `{}` into the box.

### Get / Delete

Allows you to retrieve or remove a single document by **id**.

In this example a Binding called *doc\_id* is being used, so that the query can be used to obtain any document specified in your app. See more here: [Custom queries](https://docs.budibase.com/docs/custom-queries)

### Create / Update

More here: <https://pouchdb.com/api.html#create_document>.

Provide a JSON payload. In the case of *Update* you will need to specify a document **\_id**.

When creating a document you do not need to provide an id. An automatically generated id will be returned in the response.
