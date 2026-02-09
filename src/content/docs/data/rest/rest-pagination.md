---
title: "REST pagination"
description: "Paginated REST API calls can be connected to a paginated Table. To setup, click on the 'Pagination' tab of your REST Query. Configuration Pagination type: Page number based Cursor based Pagination parameters location: The location that the paging parameters should be injected. Query params Reque\u2026"
sourceUrl: "https://docs.budibase.com/docs/rest-pagination"
---
# REST pagination

Paginated REST API calls can be connected to a paginated Table.

To setup, click on the 'Pagination' tab of your REST Query.

## Configuration

**Pagination type:**

- Page number based
- Cursor based

**Pagination parameters location**: The location that the paging parameters should be injected.

- Query params
- Request body

> 🚧
>
> ### Param Conflicts
>
> Make sure that the field names used in the Pagination tab do not conflict with any names used in the Params tab of your query.

---

| Page Number Based | Cursor Based |
| --- | --- |
| - \*Page number name\*\*:   Query/Request Body field name for the page number | - \*Request cursor name\*\*: Query/Request Body field name for the cursor token |
| - \*Page size name\*\*:    Query/Request Body field name for the page size | - \*Request limit name\*\*:    Query/Request Body field name for the max results |
|  | - \*Response body name for cursor\*\*:    Response Body field path for the next cursor token.\   *This path will be taken directly from the API response before transformation* |

---

> 📘
>
> ### Before and After Cursors
>
> Some API's offer a before and after cursor. Budibase only takes a 'next' token, however as you iterate forward through the table, the tokens of the previous pages are automatically kept in memory and used when stepping backwards.
>
> With that in mind, you could also use the API's 'before' token to paginate results in reverse order.

You can then select this query as the data source for a table, making sure the 'Paginate' checkbox is ticked.

---

## Example: Public API

For this example, we will be using Budibase's public API as it supports page number based pagination: <https://docs.budibase.com/reference/rowsearch>. We will also be using a sample table for this.

1. Create a new REST Datasource. Add the below settings to your headers and click the save button

   1. content-type -> set to application/json
   2. x-budibase-app-id (Can be found in your URL of the table you wish to search with)
   3. x-budibase-api-key You can find your api key [here](https://docs.budibase.com/docs/user-settings#view-api-key)
2. Click **Add query** and input: <https://budibase.app/api/public/v1/tables/ta_bb_employee/rows/search>
3. Change the method to **POST**
4. Switch to the body tab and select raw and add your search object

   JSON

   ```
   {"query": {"string": {"First Name": ""}}, "limit": 2, "paginate": true, "bookmark": 1}
   ```

4. Add the pagination params:

5. Exclude the meta data from the response using the transformer, and click 'Send'.  
   Under the Schema tab, undesired fields can be removed with the 'X'.  
   Then click 'Save'.

6. Finally a paginated table can be created with the help of a data provider being used as the source of the table.
