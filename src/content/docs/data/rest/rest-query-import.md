---
title: "REST query import"
description: "The REST query import feature allows you to import one or more queries at a time. The supported formats for import are: Swagger 2.0 / OpenAPI 2.0 (YAML or JSON) Swagger 3.0 / OpenAPI 3.0 (YAML or JSON) CURL Import collection File Upload a file containing your API documentation. Text Enter \u2026"
sourceUrl: "https://docs.budibase.com/docs/rest-query-import"
---
# REST query import

The REST query import feature allows you to import one or more queries at a time.

The **supported formats** for import are:

- Swagger 2.0 / OpenAPI 2.0 (YAML or JSON)
- Swagger 3.0 / OpenAPI 3.0 (YAML or JSON)
- CURL

---

## Import collection

### File

Upload a file containing your API documentation.

### Text

Enter the documentation string directly.

---

## Converting and importing a Postman collection

As Postman does not natively use OpenAPI, you will need to generate an OpenAPI definition before importing it into Budibase.

Find the collection in Postman that you want to export. Click the `...` and select `Export`.

This will download a JSON file with the API configuration.

We now need to convert this collection to an OpenAPI definition. We can do that with the handy [postman2openapi](https://github.com/kevinswiber/postman2openapi) tool.

In Budibase, add a new REST API, or select an existing one. Under *Queries* tab, click `Import`.

Click on the *Raw Text* tab and paste in the newly generated OpenAPI definition. Click `Import`.

You will now see the imported requests listed:
