---
title: "REST authentication"
description: "Authentication configs are specified at the datasource level and can be selected from queries within the datasource. Adding authentication to a datasource allows queries to run well-known authentication strategies and can reduce the amount of configuration needed when multiple queries share the same\u2026"
sourceUrl: "https://docs.budibase.com/docs/rest-authentication"
---
# REST authentication

Authentication configs are specified at the datasource level and can be selected from queries within the datasource. Adding authentication to a datasource allows queries to run well-known authentication strategies and can reduce the amount of configuration needed when multiple queries share the same authentication.

---

## Datasource Configuration

A REST datasource can contain multiple authentication configs of well known types.

- Multiple configs of the same type can exist
- Configs must have a unique name

The appropriate information is added to the request when authentication is selected.

- **Basic Auth** - Adds the Base64 encoded username and password to the Authorization header
- **Bearer Token** - Adds the token to the Authorization header as Bearer token

---

## Query Configuration

From within a query use the Auth dropdown to select the desired authentication config to be added to the query.

## Using SSO Tokens in REST Requests

> 📘
>
> ### If you have not configured SSO, you can follow the guide here: <https://docs.budibase.com/docs/openid-connect>

If you have configured your budibase tenant to use SSO, you can use the SSO token as a binding in your REST API requests. The `{{ Currentuser.OAuthToken }}` binding is available anywhere you can use bindings in the REST connector, such as:

- Request Body
- Request Headers
- Request Parameters
- Request Bindings

> 📘
>
> ### SSO Tokens Automatically Refresh!
>
> Budibase will handle the refreshing of SSO tokens for you directly from your provider - you don't need to do it yourself.
