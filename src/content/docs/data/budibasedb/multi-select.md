---
title: "Multi-select"
description: "Using the multiple options data type in Budibase"
sourceUrl: "https://docs.budibase.com/docs/multi-select"
---
# Multi-select

In Budibase, there are two data types that allow a value to be set from a list of options.

The first is the [Options](/docs/data/budibasedb/text#options) type, which is compatible with the *Text* data type, and only allows a single option to be chosen.

The **Multi-select** type is similar to the options type, but it allows you to select multiple options, and is not convertible to any other type. You can still select a single option or none at all.

A common use of the multi-select data type is to pair it with the [Multi-select picker](https://docs.budibase.com/docs/multi-select-picker) in your [Forms](https://docs.budibase.com/docs/forms).

When a multi-select value is saved to a data table, the values will be presented in individual coloured pills:

  

## Filtering

A number of array based [filters](https://docs.budibase.com/docs/searchfilter-data) are available when using a multi-select.

### Contains

> The multi-select value must contain all of the selected comparison options.

| Filter | Result |
| --- | --- |
|  |  |
|  |  |

  

### Does not contain

> The multi-select value must not contain all of the selected comparison options.

#### Single value

| Filter | Result |
| --- | --- |
|  |  |

#### Multiple values

Note that in this case only rows that have both *Senior* AND *Manager* are filtered out.

| Filter | Result |
| --- | --- |
|  |  |

  

### Has any

> The multi-select value contains any of the selected comparison options.
