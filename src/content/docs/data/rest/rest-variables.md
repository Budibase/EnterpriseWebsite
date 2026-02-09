---
title: "REST variables"
description: "Variables are a useful way to reuse data across REST queries. Variables come in two forms; static and dynamic. Static Variables Static variables store data that does not change. These can range from constants used in the metadata of the request to information about the request itself that can \u2026"
sourceUrl: "https://docs.budibase.com/docs/rest-variables"
---
# REST variables

Variables are a useful way to reuse data across REST queries. Variables come in two forms; static and dynamic.

---

## Static Variables

Static variables store data that does not change. These can range from constants used in the metadata of the request to information about the request itself that can be used in the URL such as API version or hostname.

Variables nested inside other variables will not be evaluated.

---

## Dynamic Variables

Dynamic variables provide a way to chain data between queries.

- Response data from one query can be used to create a dynamic variable
  - Header
  - Body field
- The result of the variable will be cached for a short period of time
- A variable will be re-evaluated if a query using it fails, in which case the query will retry once
- A query will fail if a variable cannot be evaluated

### Header Variables

Use the **...** menu alongside response headers to select **Create dynamic variable**

Give the variable a name.

- The name must be unique
- The name will be used to bind this variable in your query. e.g *cookie* can be used as *{{cookie}}*

The variable will appear in the **Dynamic Variables** tab

### Body Variables

Use the ... menu alongside schema items to select **Create dynamic variable**

Give the variable a name as above

The variable will appear in the **Dynamic Variables** tab

### Editing Dynamic Variables

In the above example we can see the *user\_id* variable is bound to *{{ data.0.[user] }}* which is an object. To access nested data in the response body we can update the variable expression to reference the nested fields using dot notation e.g. *{{ data.0.[user.\_id] }}* .  
Alternatively, a query transformer can be used to update the schema so that the desired field is exposed in the schema directly.

Dynamic variables can also be created manually using the Add variable button.

- Access header data using

```
{{ info.headers.[header-name] }}
```

- Access body data using

```
{{ data.0.[body-field] }}
```

Once a variable has been defined it can be used in the exact same way as a binding.

- For example, a variable named **my-id** can be referenced in the headers, params, or body of a query using *{{my-id}}*
- For more details see [REST Bindings](/docs/data/rest/rest-bindings)
