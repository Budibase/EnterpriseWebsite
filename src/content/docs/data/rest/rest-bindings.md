---
title: "REST bindings (tutorial)"
description: "Use bindings to supply additional information to a query at runtime. In this example we have: An API endpoint that accepts a status field to filter a list of applications A query named applications An application that supplies data to the bindings of the query Creating and using bindings We \u2026"
sourceUrl: "https://docs.budibase.com/docs/rest-bindings"
---
# REST bindings (tutorial)

Use bindings to supply additional information to a query at runtime. In this example we have:

- An API endpoint that accepts a status field to filter a list of applications
- A query named *applications*
- An application that supplies data to the bindings of the query

---

## Creating and using bindings

We can create a binding named *status* with a default value of *all*.

Using handlebars the binding can be referenced throughout the query in the following places:

- URL
- Params
- Headers
- Body
- Transformer

### Params example

The binding can be used as the value of a param of the same name. While the name can be shared it is not required.

### Headers example

The binding can be used as the value of a header of the same name. As above the binding and header name may or may not be shared.

### Body example

The binding can be used in any part of the request body. e.g. as the value of a JSON field.

---

## Using REST queries in forms

You may wish to populate Default Values with the properties of your GET query, or allow users to submit form data via a POST query.

Learn more about [Bindings in forms](https://docs.budibase.com/docs/form-bindings).

---

## Video tutorial
