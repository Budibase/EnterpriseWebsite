---
title: "AI Column\ud83d\udd12"
description: "Simply select the AI column, add a prompt, and let AI do the work for you - from analyzing customer feedback to triaging support tickets, drafting responses, or writing inventory descriptions."
sourceUrl: "https://docs.budibase.com/docs/ai-column"
---
# AI Column🔒

## Setup

This feature is only available if you have BudibaseAI activated or successfully connected an AI config. The new AI column is only available when using Budibase DB, but we do plan to add support for external databases such as Postgres and MySQL.

AI Settings can be found in the Account Portal, under the Settings tab. BudibaseAI is the default, using an OpenAI connection. However, for Enterprise customers, custom configurations can be added, such as Anthropic, TogetherAI, and AzureOpenAI, as well as more customizable options for OpenAI or an entirely custom option.

## Operations

The AI column can perform 7 specific operations on your data. In some cases, these are based on a single column in your table, like "Translate," and in other cases, it is possible to select multiple columns, like "Summarise Text." In all cases, the value returned will be a string.

/

### Summarise Text

Select multiple columns to summarise. The response generated will be in plain paragraphs.

In this example, the Summarise Text option is used to take multiple columns from the Employees table and provide a summary of the information they contain.

  

### Clean Data

Select a single column to clean. Fixes spelling and grammatical errors, as well as any data issues.

In this example, the input column is being cleaned of spelling mistakes.

  

### Translate

Select a column to translate, and specify a language. When the specified column is filled or updated a translation will be fetched.

In this example using the notes from the sample data Expenses table, we can translate the notes to Welsh - particularly useful when working across borders or in circumstances with bilingual or multi-lingual requirements.

  

### Categorise Text

Select multiple columns to categorise. Provide your desired categories separated by commas.

In this example, we can set a list of comma-separated categories and use it to classify the values of the selected columns.

  

### Sentiment Analysis

Select a single column to analyse. Useful for understanding and categorizing customer feedback at a glance.

  

### Prompt

  

### Search Web

Takes multiple columns and returns AI search results. Not compatible with OpenAI configurations.

## Credits

By default, the AI column uses the built-in Budibase AI connection, though this can be reconfigured for Enterprise customers.

When using the Budibase AI connection, each query will consume credits at a rate of one credit per AI token. You can read more about what an AI token is on the [OpenAI website](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them). Your current allowance can be found in the Usage tab of the Account Portal.

Enterprise customers can connect their own AI configuration by going to the Settings tab in the Account Portal. Any cost incurred by using a custom AI configuration will be the responsibility of the account holder and bill payer. Budibase AI Credits will not be consumed when using a custom AI configuration.
