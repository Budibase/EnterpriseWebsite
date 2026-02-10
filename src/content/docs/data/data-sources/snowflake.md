---
title: "Snowflake"
description: "Snowflake is a solution for data warehousing, data lakes, data engineering, data science, data application development, and securely sharing and consuming shared data. Whilst you can add primary keys and use Snowflake for OLTP, by default tables do not have primary keys. Particularly within Budibase\u2026"
sourceUrl: "https://docs.budibase.com/docs/snowflake"
---
# Snowflake

Snowflake is a solution for data warehousing, data lakes, data engineering, data science, data application development, and securely sharing and consuming shared data.

Whilst you can add primary keys and use Snowflake for OLTP, by default tables do not have primary keys.  
Particularly within Budibase, the Snowflake connector is designed for [Custom queries](/docs/data/data-sources#custom-queries), thus is most appropriate for OLAP purposes.  
<https://www.snowflake.com/guides/olap-vs-oltp>

## Setup

Snowflake has the following hierarchy for data:

- Warehouse
- Database
- Schema
- Table

To use the Snowflake connector in Budibase, you will need to have each of these elements.  
Upon creation of a new Snowflake account, there will be sample data that you can use to verify your connection.

Warehouses can be found and added under the *Admin* tab. The default warehouse is *COMPUTE\_WH*.

You will also need your **account name**. This can be found under *Admin > Accounts*.

Click on the clip icon beside the account. The account name will be your snowflakecomputing subdomain, in this case: `hffwdhe-bn85610`

## Connect

When you add a new Snowflake Data Source you will be presented with a config dialog to fill in.

## Query

Snowflake can perform the standard SQL queries as you would expect, however it also has some nifty syntax to query JSON as well.

The sample *WEATHER* schema contains a JSON object with a nested array of weather information.  
This can be seen when running a query via the [SnowSQL CLI](https://docs.snowflake.com/en/user-guide/snowsql.html)

This structure can be flattened as needed, and then queried using the `:` notation to grab nested properties.  
<https://docs.snowflake.com/en/user-guide/querying-semistructured.html>

You can also see how [Bindings](https://docs.budibase.com/docs/bindings) can be used, in this case as a filter.

It would be possible to [Transform](/docs/data/transformers) the data rather than do the mapping as part of the query, however this is not advisable as the performance will be much better on the cloud servers.

**Preview**

> 🚧
>
> ### Limit
>
> A data warehouse query could potentially return huge amounts of data that could strain the UI.  
> For this reason, if you're not targeting specific data with a filter, use a limit in your queries, e.g. SELECT \* FROM MyTable LIMIT 1000;
