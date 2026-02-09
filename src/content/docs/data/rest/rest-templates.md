---
title: "REST Templates"
description: "Budibase now offers REST Templates to allow you to hit the ground running with a selection of ready-made REST API request patterns. These templates provide a structured starting point for common HTTP methods, so you can connect to external APIs quickly without configuring every request from scratch \u2026"
sourceUrl: "https://docs.budibase.com/docs/rest-templates"
---
# REST Templates

Budibase now offers REST Templates to allow you to hit the ground running with a selection of ready-made REST API request patterns. These templates provide a structured starting point for common HTTP methods, so you can connect to external APIs quickly without configuring every request from scratch

## Selecting a template

To add a new `REST` data source click:

- > API's > Add new API > choose a template

  

## Configuration

Add additional configuration to your data source in the form of queries, default headers, authentication and variables

## Name

By default the REST data source will have a name like REST or REST-1, you can change this to something recognisable if desired.

## Queries

A query is an individual request in the rest data source. Either create one from scratch or import an existing. For more details see: [Rest Bindings](/docs/data/rest/rest-bindings)

## Tutorial

In this example, we will use the templates to create an app that will list issues in a Github repo

First, we'll select Github as our template and add an action

Now we will select an option, in this case we will use the GET query 'issues/list-for-repo', if you're unsure, you can read the description for this option to make sure it is the correct one

We now need to set our repo and owner bindings to the repo we wish to get the issues list from, in this example, we will be using the budibase repo, to confirm the request is working, we will send it and get the expected response

Moving over to our app, we will now see how we can display this information

Here, I've created a new PDF table, and set the datasource to be the GET request we have just created, then to organise my findings, I've set 3 columns within this table under 'title', 'body', and 'created\_at'

Now, we can see the most recent issues that have been created, and the description for each issue
