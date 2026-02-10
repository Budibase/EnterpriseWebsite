---
title: "Elasticsearch"
description: "Using Elasticsearch as a data source in Budibase"
sourceUrl: "https://docs.budibase.com/docs/elasticsearch"
---
# Elasticsearch

Elasticsearch is a distributed, RESTful search and analytics engine capable of addressing a growing number of use cases.

## Connect

To start, click on the `Add source` button of the **Data** section, select *Elasticsearch*, and click `Continue`.

Next enter the connection configuration to your Elasticsearch service. The URL field should include the protocol, address and port as shown below.

Choose `Save and continue to query`.

## Adding a query

After configuring the connection to your Elasticsearch Datasource, choose the `Add query` button to perform a CRUD operation against your instance.

### Read

This is the default *Function*. Specify an index to read from, and provide a JSON query payload. An example query is shown below but you can use the Inspect function in Kibana to generate more advanced queries.

Query

```
{
  "query": {
    "bool": {
      "must": [
        {
          "bool": {
            "should": [
              {
                "match_phrase": {
                  "text": "Javan"
                }
              }
            ],
            "minimum_should_match": 1
          }
        }
      ],
      "filter": [],
      "should": [],
      "must_not": []
    }
  }
}
```

Scroll down and use the *Run Query* button to preview the results of your query.

After successfully returning results use the `Save Query` button to ensure your query can be used by your app in the [Design](https://docs.budibase.com/docs/working-with-data) section.

You can also add and use a Binding within your query as shown below:

> 📘
>
> More on using datasource bindings within the Design section can be found in the [Custom queries](https://docs.budibase.com/docs/custom-queries) page.

### Create

Select *Create* from the *Function* dropdown. Provide the name of the Elasticsearch index you want to use and provide a JSON document payload in the *query* field.

Unlike the read query, you can immediately `Save Query` without running first, however it may be worth clicking `Run Query` to verify that the query is correct, but be sure to save after.

When running the query, some information will be returned, such as an **\_id**, which can be used when *updating* and *deleting*.

Create Response

```
{
  "_index": "bible",
  "_id": "YLOLCIYB1PeB0MyAV4tF",
  "_version": 1,
  "result": "created",
  "_shards": "[object Object]",
  "_seq_no": 31104,
  "_primary_term": 5
}
```

### Update

Updating involves providing an **index** and **\_id**. Select the *Update* function from the dropdown, and enter the fields.

To update the fields of an existing document, your query may look like:

There are a number of additional update operations you can take, which are documented in the [Official docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-update.html) page.

### Delete

Select the *Delete* function and provide an **index** and document **\_id** to be deleted. No query is required. You may also `Save Query` without running beforehand.
