# Data Docs Migration Plan

## Scope
- Migrated only the `Data` section from `https://docs.budibase.com/docs/...`.
- Ported text/headings/lists/tables/callouts/code blocks/links.
- Skipped all images/video/embeds/media.
- Skipped API reference content pages (out of scope).

## Source URL List (Data section)
1. https://docs.budibase.com/docs/data
2. https://docs.budibase.com/docs/dev-prod-switcher
3. https://docs.budibase.com/docs/views
4. https://docs.budibase.com/docs/users-table
5. https://docs.budibase.com/docs/budibasedb
6. https://docs.budibase.com/docs/ai-column
7. https://docs.budibase.com/docs/attachments
8. https://docs.budibase.com/docs/barcodeqr
9. https://docs.budibase.com/docs/boolean-truefalse
10. https://docs.budibase.com/docs/datetime
11. https://docs.budibase.com/docs/json
12. https://docs.budibase.com/docs/multi-select
13. https://docs.budibase.com/docs/number
14. https://docs.budibase.com/docs/relationships
15. https://docs.budibase.com/docs/text
16. https://docs.budibase.com/docs/users-1
17. https://docs.budibase.com/docs/options
18. https://docs.budibase.com/docs/data-sources
19. https://docs.budibase.com/docs/couchdb
20. https://docs.budibase.com/docs/csv-import
21. https://docs.budibase.com/docs/dynamodb
22. https://docs.budibase.com/docs/elasticsearch
23. https://docs.budibase.com/docs/firestore
24. https://docs.budibase.com/docs/google-sheets
25. https://docs.budibase.com/docs/mongodb
26. https://docs.budibase.com/docs/ms-sql-server
27. https://docs.budibase.com/docs/mysql-mariadb
28. https://docs.budibase.com/docs/oracle
29. https://docs.budibase.com/docs/postgresql
30. https://docs.budibase.com/docs/redis
31. https://docs.budibase.com/docs/s3
32. https://docs.budibase.com/docs/snowflake
33. https://docs.budibase.com/docs/rest
34. https://docs.budibase.com/docs/rest-templates
35. https://docs.budibase.com/docs/rest-queries
36. https://docs.budibase.com/docs/rest-bindings
37. https://docs.budibase.com/docs/rest-query-import
38. https://docs.budibase.com/docs/rest-authentication
39. https://docs.budibase.com/docs/rest-variables
40. https://docs.budibase.com/docs/rest-pagination
41. https://docs.budibase.com/docs/rest-oauth2
42. https://docs.budibase.com/docs/rest-example
43. https://docs.budibase.com/docs/sql-datasource
44. https://docs.budibase.com/docs/transformers
45. https://docs.budibase.com/docs/environment-variables
46. https://docs.budibase.com/docs/pdf-exporting
47. https://docs.budibase.com/docs/ai-powered-table-generation

## Source to Destination Mapping
- `https://docs.budibase.com/docs/data` -> `/docs/data` -> `/src/content/docs/data/index.md`
- `https://docs.budibase.com/docs/dev-prod-switcher` -> `/docs/data/dev-prod-switcher` -> `/src/content/docs/data/dev-prod-switcher.md`
- `https://docs.budibase.com/docs/views` -> `/docs/data/views` -> `/src/content/docs/data/views.md`
- `https://docs.budibase.com/docs/users-table` -> `/docs/data/users-table` -> `/src/content/docs/data/users-table.md`
- `https://docs.budibase.com/docs/budibasedb` -> `/docs/data/budibasedb` -> `/src/content/docs/data/budibasedb/index.md`
- `https://docs.budibase.com/docs/ai-column` -> `/docs/data/budibasedb/ai-column` -> `/src/content/docs/data/budibasedb/ai-column.md`
- `https://docs.budibase.com/docs/attachments` -> `/docs/data/budibasedb/attachments` -> `/src/content/docs/data/budibasedb/attachments.md`
- `https://docs.budibase.com/docs/barcodeqr` -> `/docs/data/budibasedb/barcodeqr` -> `/src/content/docs/data/budibasedb/barcodeqr.md`
- `https://docs.budibase.com/docs/boolean-truefalse` -> `/docs/data/budibasedb/boolean-truefalse` -> `/src/content/docs/data/budibasedb/boolean-truefalse.md`
- `https://docs.budibase.com/docs/datetime` -> `/docs/data/budibasedb/datetime` -> `/src/content/docs/data/budibasedb/datetime.md`
- `https://docs.budibase.com/docs/json` -> `/docs/data/budibasedb/json` -> `/src/content/docs/data/budibasedb/json.md`
- `https://docs.budibase.com/docs/multi-select` -> `/docs/data/budibasedb/multi-select` -> `/src/content/docs/data/budibasedb/multi-select.md`
- `https://docs.budibase.com/docs/number` -> `/docs/data/budibasedb/number` -> `/src/content/docs/data/budibasedb/number.md`
- `https://docs.budibase.com/docs/relationships` -> `/docs/data/budibasedb/relationships` -> `/src/content/docs/data/budibasedb/relationships.md`
- `https://docs.budibase.com/docs/text` -> `/docs/data/budibasedb/text` -> `/src/content/docs/data/budibasedb/text.md`
- `https://docs.budibase.com/docs/users-1` -> `/docs/data/budibasedb/users-1` -> `/src/content/docs/data/budibasedb/users-1.md`
- `https://docs.budibase.com/docs/options` -> `/docs/data/budibasedb/options` -> `/src/content/docs/data/budibasedb/options.md`
- `https://docs.budibase.com/docs/data-sources` -> `/docs/data/data-sources` -> `/src/content/docs/data/data-sources/index.md`
- `https://docs.budibase.com/docs/couchdb` -> `/docs/data/data-sources/couchdb` -> `/src/content/docs/data/data-sources/couchdb.md`
- `https://docs.budibase.com/docs/csv-import` -> `/docs/data/data-sources/csv-import` -> `/src/content/docs/data/data-sources/csv-import.md`
- `https://docs.budibase.com/docs/dynamodb` -> `/docs/data/data-sources/dynamodb` -> `/src/content/docs/data/data-sources/dynamodb.md`
- `https://docs.budibase.com/docs/elasticsearch` -> `/docs/data/data-sources/elasticsearch` -> `/src/content/docs/data/data-sources/elasticsearch.md`
- `https://docs.budibase.com/docs/firestore` -> `/docs/data/data-sources/firestore` -> `/src/content/docs/data/data-sources/firestore.md`
- `https://docs.budibase.com/docs/google-sheets` -> `/docs/data/data-sources/google-sheets` -> `/src/content/docs/data/data-sources/google-sheets.md`
- `https://docs.budibase.com/docs/mongodb` -> `/docs/data/data-sources/mongodb` -> `/src/content/docs/data/data-sources/mongodb.md`
- `https://docs.budibase.com/docs/ms-sql-server` -> `/docs/data/data-sources/ms-sql-server` -> `/src/content/docs/data/data-sources/ms-sql-server.md`
- `https://docs.budibase.com/docs/mysql-mariadb` -> `/docs/data/data-sources/mysql-mariadb` -> `/src/content/docs/data/data-sources/mysql-mariadb.md`
- `https://docs.budibase.com/docs/oracle` -> `/docs/data/data-sources/oracle` -> `/src/content/docs/data/data-sources/oracle.md`
- `https://docs.budibase.com/docs/postgresql` -> `/docs/data/data-sources/postgresql` -> `/src/content/docs/data/data-sources/postgresql.md`
- `https://docs.budibase.com/docs/redis` -> `/docs/data/data-sources/redis` -> `/src/content/docs/data/data-sources/redis.md`
- `https://docs.budibase.com/docs/s3` -> `/docs/data/data-sources/s3` -> `/src/content/docs/data/data-sources/s3.md`
- `https://docs.budibase.com/docs/snowflake` -> `/docs/data/data-sources/snowflake` -> `/src/content/docs/data/data-sources/snowflake.md`
- `https://docs.budibase.com/docs/rest` -> `/docs/data/rest` -> `/src/content/docs/data/rest/index.md`
- `https://docs.budibase.com/docs/rest-templates` -> `/docs/data/rest/rest-templates` -> `/src/content/docs/data/rest/rest-templates.md`
- `https://docs.budibase.com/docs/rest-queries` -> `/docs/data/rest/rest-queries` -> `/src/content/docs/data/rest/rest-queries.md`
- `https://docs.budibase.com/docs/rest-bindings` -> `/docs/data/rest/rest-bindings` -> `/src/content/docs/data/rest/rest-bindings.md`
- `https://docs.budibase.com/docs/rest-query-import` -> `/docs/data/rest/rest-query-import` -> `/src/content/docs/data/rest/rest-query-import.md`
- `https://docs.budibase.com/docs/rest-authentication` -> `/docs/data/rest/rest-authentication` -> `/src/content/docs/data/rest/rest-authentication.md`
- `https://docs.budibase.com/docs/rest-variables` -> `/docs/data/rest/rest-variables` -> `/src/content/docs/data/rest/rest-variables.md`
- `https://docs.budibase.com/docs/rest-pagination` -> `/docs/data/rest/rest-pagination` -> `/src/content/docs/data/rest/rest-pagination.md`
- `https://docs.budibase.com/docs/rest-oauth2` -> `/docs/data/rest/rest-oauth2` -> `/src/content/docs/data/rest/rest-oauth2.md`
- `https://docs.budibase.com/docs/rest-example` -> `/docs/data/rest/rest-example` -> `/src/content/docs/data/rest/rest-example.md`
- `https://docs.budibase.com/docs/sql-datasource` -> `/docs/data/sql-datasource` -> `/src/content/docs/data/sql-datasource.md`
- `https://docs.budibase.com/docs/transformers` -> `/docs/data/transformers` -> `/src/content/docs/data/transformers.md`
- `https://docs.budibase.com/docs/environment-variables` -> `/docs/data/environment-variables` -> `/src/content/docs/data/environment-variables.md`
- `https://docs.budibase.com/docs/pdf-exporting` -> `/docs/data/pdf-exporting` -> `/src/content/docs/data/pdf-exporting.md`
- `https://docs.budibase.com/docs/ai-powered-table-generation` -> `/docs/data/ai-powered-table-generation` -> `/src/content/docs/data/ai-powered-table-generation.md`

## Skipped Content Notes
- Omitted inline images, screenshots, videos, iframes, and other media from all migrated pages.
- Kept surrounding narrative text when media was removed.
- Left links to non-migrated docs sections as absolute `https://docs.budibase.com/...` URLs.

## Link-check Note
- Internal Data links rewritten to new routes: **87**
- Internal docs links left absolute (non-migrated targets): **164**
- External links preserved: **69**
- Media elements removed during conversion: **513**
- Broken internal links discovered in migrated `/docs/data/...` links: **0**

### Non-migrated docs links kept absolute
- `https://docs.budibase.com/docs/users-table` -> `doc:user-management` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `doc:portal` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `https://docs.budibase.com/docs/application-access` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `https://docs.budibase.com/docs/fetching-data#display-user-specific-data` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `https://docs.budibase.com/docs/user-roles#adding-custom-roles` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `doc:searchfilter-data` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `https://docs.budibase.com/docs/authentication-and-sso#using-the-oauth-token` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `doc:using-sections` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `https://docs.budibase.com/docs/displaying-text#headline` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `doc:button` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `doc:container` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `doc:icon` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `https://docs.budibase.com/docs/displaying-text` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `doc:data-provider` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `doc:side-panel` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/users-table` -> `doc:form-block` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/budibasedb` -> `doc:formula` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/budibasedb` -> `https://docs.budibase.com/docs/quickstart#preview-and-publish` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/attachments` -> `https://docs.budibase.com/docs/attachment` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/attachments` -> `https://docs.budibase.com/docs/accessing-minio` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/attachments` -> `https://docs.budibase.com/docs/table-block#autogenerated-screen` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/attachments` -> `https://docs.budibase.com/docs/forms#form-schema` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/barcodeqr` -> `https://docs.budibase.com/docs/barcodeqr-field` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/boolean-truefalse` -> `doc:repeater` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/boolean-truefalse` -> `doc:introduction-to-bindings` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/datetime` -> `https://docs.budibase.com/docs/date-picker` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/datetime` -> `https://docs.budibase.com/docs/form-bindings#tutorial-calculate-age-from-dob-field` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/datetime` -> `https://docs.budibase.com/docs/bindings` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/datetime` -> `https://docs.budibase.com/docs/javascript#using-a-date-column` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `doc:data-provider` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `doc:repeater` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `doc:field-groups` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `doc:javascript` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `doc:screens` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `https://docs.budibase.com/docs/blocks#cards-block` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `https://docs.budibase.com/docs/blocks#repeater-block` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `https://docs.budibase.com/docs/displaying-text#headline` (docs-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `doc:forms` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/json` -> `doc:button` (doc-link-not-in-data)
- `https://docs.budibase.com/docs/multi-select` -> `doc:multi-select-picker` (doc-link-not-in-data)
- ...additional non-migrated links were handled with the same absolute-link fallback.
