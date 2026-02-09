---
title: "AI-Powered Table Generation"
description: "Build internal Budibase tables fast with Budibase AI."
sourceUrl: "https://docs.budibase.com/docs/ai-powered-table-generation"
---
# AI-Powered Table Generation

Budibase makes it easy to start with our internal database by allowing you to generate table structures using Budibase AI. This feature is only available with the Budibase DB (our built-in non-relational database) and is designed to help you scaffold your data quickly.

> 🚧
>
> ### Make sure you have enabled Budibase AI, we have a Quickstart guide [here](https://docs.budibase.com/docs/quickstart-budibase-ai)

## What does it do?

Using a simple prompt, Budibase AI can:

- Generate one or more database tables based on your prompt
- Add relevant fields to each table
- Populate the tables with sample data

> 🚧
>
> ### This feature generates no UI, just the database tables and test data.

## How to use it

- Go to the Data area
- Click on the + to the right of Sources
- In the input labeled "Generate data using AI...", you can:

  - Type a custom prompt, e.g.,  
    "Build a table for managing customer feedback."  
    "Create two tables: users and tasks, with related fields."
  - Or click one of the suggested prompts to get started instantly.
- Click the ▶️ (Run) button to submit your prompt.
- Budibase AI will generate:

  - One or more tables
  - Field names and types
  - Sample records to help you get started

## Tips for better results

- Be specific: Mention what the tables are for and what fields they should include.
- You can describe relationships between tables, e.g., “Users and orders with a one-to-many relationship.”
- Start with a small prompt and expand as needed; regenerating is easy!
