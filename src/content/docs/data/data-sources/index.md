---
title: "Datasources"
description: "Connecting Budibase to databases and APIs"
sourceUrl: "https://docs.budibase.com/docs/data-sources"
---
Budibase can store your data inside the [native internal database](/docs/data/budibasedb) (CouchDB). This is the default datasource unless you opt to connect another datasource to Budibase.

Budibase supports connection to a range of remote datasources. More information about connecting Budibase to each of these datasources is nested in this section of the documentation.

Furthermore, if a datasource you want to use is missing, it is possible to build a [custom datasource](https://docs.budibase.com/docs/custom-datasource).

## Schema

When [Fetching tables](/docs/data/sql-datasource#fetching-tables) from external SQL databases, Budibase will attempt to match the external data types to the internal [Budibase DB](/docs/data/budibasedb) types. These default types can be changed by clicking the three dots icon beside the table column, and selecting `Edit column`:

For other basic datasources and [Custom queries](/docs/data/data-sources#custom-queries), the schema will be determined by selecting types in the query output.

The schema is important, as it will affect how [sorting and filtering](https://docs.budibase.com/docs/data-provider#pagination-and-sorting) is applied in the design section.

## Sample data

Budibase provides the option of adding some sample data to allow new users to explore the various [Data types](/docs/data/budibasedb#data-types) available, and quickly build an app for learning purposes. While it is an internal Budibase DB source, it will be kept separate to the other internal DB tables that you create.

If you do not need this data, it can easily be removed in the same way as other additional datasources. Simply click on the ellipsis to the right of the sample data source and click *Delete*.

## Security

When connecting to an external datasource you must allow Budibase access. Normally datasources will be protected by a firewall and you will need to open firewall access to your datasource from the Budibase cloud or from your self-hosted Budibase. Port numbers and user management differ across each type of datasource so if you have difficulty connecting you should speak to the Database Administrator for your organisation.

  

---

  

# Custom queries

Budibase supports the ability to write custom queries. These queries can be really useful if you want to perform advanced joins or server-side filtering.

To write custom queries, head over to your Datasource, and scroll down until you find the queries section. Click the `Add Query` button, which will guide you to a form to configure your query.

> 📘
>
> ### Budibase DB
>
> The internal Budibase DB is a unique datasource that does not support custom queries.  
> It does however support [Views](/docs/data/views)

An example would be to query all pet names from a specific owner. For this demonstration we've used a custom binding to insert the `ownerID` into the query.

> 📘
>
> ### Read or Write
>
> If you want to use a custom query with a [Data provider](https://docs.budibase.com/docs/data-provider), you must select **Read** as the function of your query.
>
> Other query types, such as Create, can be used by the [Execute Query action](/docs/data/data-sources#tutorial-posting-form-data-to-a-custom-query).

## Using query bindings

You can also override the default binding values.

When you use the query as a data source for your provider, you can click on the cog icon.

This will show a query bindings drawer where you can add a dynamic value to override the default.

## Editing custom queries

A list of your custom queries can be found underneath the associated data sources. Click on the query to be able to edit the config.

It is also possible to **delete** queries that are no longer needed, or **duplicate** queries, which can useful in cases where an additional query only requires minor changes.

To access these options, hover over the query and click the **…**

## Tutorial: Posting form data to a custom query

1. Add your query to a datasource, in this example we'll use [PostgreSQL](https://docs.budibase.com/docs/postgresql-1). Add your bindings with some optional defaults, and then reference them within your query.

2. Add a [Form](https://docs.budibase.com/docs/forms) with fields for each of the bindings, except for the *id* which will come from the [URL ID](https://docs.budibase.com/docs/url-parameters) binding.

3. **Define actions** for the 'Submit' button. Choose the **Execute Query** action and pick *PostgreSQL* as the datasource. You should now be able to see and select your custom query.

4. Finally map your form field bindings to your custom query bindings like so:

Click **Save** to finish.
