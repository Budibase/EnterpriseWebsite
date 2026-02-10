---
title: "REST example"
description: "A tutorial on using rest to create an application with budibase"
sourceUrl: "https://docs.budibase.com/docs/rest-example"
---
# REST example

## Create our API

First we're going to start by creating our API, to do this we will be using MockAPI and create an endpoint with data we can use within our app

Head to MockAPI.com and create a new project

Next, create a new resource under this new project and fill it with sample data, for this example, we will use names, addresses and 'created at'

## Create the custom REST API Requests

Now that we have our API endpoint set up, we will head over to budibase and create our API requests

Head to API, and select custom REST API 2. We will not be using templates in this tutorial, however if you wish to use them you can access a similar guide [here](/docs/data/rest/rest-templates)

Add a new action and set it to GET, then with the API endpoint link we have from our MockAPI project, we can send and verify that it works.

Once we've verified it works, we can add our bindings and then our schema, name this GET request as GET User, we will then need to make three more, GET User**s**, POST Users and PUT Users, these will help us later when we are building our app

Note that the URL will change on certain API requests based on the information we are trying to pull, but more often than not it will stay default

  
  

## Create the app

We've now created our API and all of its requests, we must now start working on our app to see how this all ties together

Open up a new budibase app and start by adding a table component, set the data source to the GET Users request we made earlier, you should now see the table is displaying the names, addresses and times the users were created at in front of you, feel free to reorganise the order of the columns

Now set two *On row click* actions, **update state** and **open side panel**, we will come back to the side panel later but for now, set the following for the update state action

Now we want to create our side panel, this is what will open when we click on a user and want to update their information, create a side panel component and back in the Users table, connect it by setting the *Open Side panel* to open this one

Now, on this 'update' side panel, add a data provider and set the data source to our GET users request, then add a repeater and set the provider to this data provider we just created, then add a form component followed by a button and two text fields. We now need to connect this all together

For the button we just made, name it 'update' and add the following on click actions

For the *execute query* action, we will need to set the datasource as REST API 2, and the query we will be executing is the PUT Users one we made earlier in this tutorial, for the bindings, the javascript function within the Userid is **return JSON.parse($("State.Clicked\_Row")).id**, for the rest, use the following:

We will then want to refresh the table after we make an update, so in our second on click action *refresh data provider* set it to the users table, then to confirm our changes have went through we will want a notification action, followed by the close side panel action

Now select our form component and set the type to *Update* (this may be different depending on what you called your update button)

Lastly, when we click on a user we want this form to return the name and address of the user we've clicked on so that we may update it, select the two text fields we added earlier and name them as *Name* and *Address*, we will then need to click on the lightning symbol beside *Default value* and add this javascript function: **return JSON.parse($("State.Clicked\_Row")).name** and then for the address text field default value: **return JSON.parse($("State.Clicked\_Row")).address**

When we click on a User it should now open a side panel, with our users name and address, when we edit this information and click our update button, it should then pop up with a notification that our changes have went through and you should see these changes in the table

We can now update our users, but we also want to be able to create new users from our app, add a button to our main page and name it *Add new user*, then add another side panel component and within this, add a form component, then within this container component, add two text fields and a button. This will be similar to our previous side panel with the difference being this will add fresh data to our table instead of pulling and updating.

For the two text fields, you'll want to name these *name* and address, similar to before, and the button, you will want to name *save new user*, now it should look something like this

We will need a constraint added to both fields, to ensure that data needs to be entered in order for our table to create a new row, add the following constraint:

For our save new user button, we will want to add some on click actions, add the following

For the remainder of our actions, set the *show notification* type to success and the message as 'saved'. *Refresh data provider* will refresh our users table, followed by *clear form* clearing our create form, then the create side panel will close with the *close side panel* action

You can now see if we add a new user, they will appear within our table.

  

﻿
