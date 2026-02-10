---
title: "User"
description: "The Single User and Multi User column types allow you to select a Budibase user from a dropdown list as determined by the Application access. This list will include all admins of the tenant, and any members of the app. Note the slight variation in icons between Single User (team_leader) and Multi U\u2026"
sourceUrl: "https://docs.budibase.com/docs/users-1"
---
# User

The Single User and Multi User column types allow you to select a Budibase user from a dropdown list as determined by the [Application access](https://docs.budibase.com/docs/application-access). This list will include all admins of the tenant, and any members of the app.

With the user column added, you can now click the `+` within your data grid view to select a user as identified by their searchable email address. When using a Single User column, if you try to add another user, the current user will be removed.

> 👍
>
> ### SQL support
>
> The user column is available for both the Budibase DB and external [SQL databases](/docs/data/sql-datasource).
>
> In the case of SQL, when a user column is added within Budibase, it will create a varchar column in your table to hold the user id:

  

---

  

## Usage

A common usage of user columns in your tables is to indicate *ownership* or *assignment*.

For example, I can add an 'Assignee' user column to a 'Jobs' table to indicate who is responsible for completing that job.

When making use of a user column in your [Forms](https://docs.budibase.com/docs/forms), you need to use the [User Field](https://docs.budibase.com/docs/pickers#user-field) component.

  

### Show current user records

For single user columns, you can [filter](https://docs.budibase.com/docs/searchfilter-data) on the currently logged in user by using the `{{ Current User._id }}` [binding](/docs/data/users-table#current-user-bindings).

If your user column has *Allow multiple users* enabled, then the filter will be a [contains](/docs/data/budibasedb/multi-select#filtering) like so:

  

---

  

## Migrate to user column

> 📘
>
> As of **v2.11.0** you will no longer be able to create a relationship between the [Users table](/docs/data/users-table) and a Budibase DB.
>
> To accommodate this change, apps that were created before **v2.11.0** can migrate existing user table relationship fields to the new user column, as outlined below.

1. Open your existing app and navigate to the Budibase table that contains a user relationship
2. Click the hamburger menu, and select the last option: `Migrate to user column`

3. Click `Continue` to create the new user column. As warned, you may need to update some existing bindings

This will remove the link from the **App users** table and can improve the performance of your apps.

It should also be noted that if you were [displaying user data](https://docs.budibase.com/docs/fetching-data#display-user-specific-data) through a migrated relationship link, this would also need to be updated as shown in the 'Usage' section above.
