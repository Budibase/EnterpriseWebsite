---
title: "Firestore"
description: "Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. Setup To get started, add a project through the Firebase console and create a Firestore database: https://firebase.google.com/docs/firestore/quickstart Connect You will need to us\u2026"
sourceUrl: "https://docs.budibase.com/docs/firestore"
---
# Firestore

Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud.

## Setup

To get started, add a project through the Firebase console and create a Firestore database:  
<https://firebase.google.com/docs/firestore/quickstart>

## Connect

You will need to use a **Service Account** in order to be able to access your Firestore via the Budibase connector.

To get the required credentials, within the Firebase console, click on the cog icon beside *Project Overview* and then select the *Service accounts* tab.

Next, click **Generate new private key** button. This will download a json file that will contain the credentials you need to connect.

In particular:

- client\_email
- private\_key
- project\_id

Whenever you add a new Firestore Data Source you will be prompted to enter these fields:

With your Firestore config saved, you will now be able to add a query.

## Create query

1. Select the 'Create' function
2. Enter a collection to save the new document to
3. Enter the JSON payload into the query box
4. The newly created document will be returned with a randomly generated unique id

#### Bindings

You can also use [bindings](https://docs.budibase.com/docs/custom-queries#using-query-bindings) like so:

## Read query

For these examples, there is a collection named *test* with five documents representing various fruit and veg.  
Select the 'Read' function.

#### Get all documents from a collection

1. Enter the name of the collection into the collection field
2. Leave the filter fields blank

#### Using filter fields

These map to the parameters of the [where clause](https://cloud.google.com/nodejs/docs/reference/firestore/latest/firestore/query#_google_cloud_firestore_Query_where_member_1_)

1. Enter the field name: 'color'
2. Select the 'equals' filter comparison
3. Enter the filter value: 'yellow'

The full list of supported filter comparisons can be found [here](https://firebase.google.com/docs/reference/js/firestore_#wherefilterop)

#### Bindings

You can also use [bindings](https://docs.budibase.com/docs/custom-queries#using-query-bindings) like so:

## Update query

Select the 'Update' function.

#### Update by id

1. Enter the name of the collection into the collection field
2. Leave the filter fields blank
3. In the query box, enter the **id** to match on, and the field values to update to

## Delete query

Select the 'Delete' function.

#### Delete by id

1. Enter the name of the collection into the collection field
2. Leave the filter fields blank
3. In the query box, enter the **id** to match on

As with other data sources, you can [Transform](/docs/data/transformers) any query results.

For example, you may want to [access the latitude and longitude from a GeoPoint](https://github.com/Budibase/budibase/discussions/6686#discussioncomment-3172147)

## Sub-collection

To query a sub-collection simply provide the path within the *Collection* field

You can also use bindings within the collection path like so:
