---
title: "Barcode/QR"
description: "This topic describes the barcode/qr data types, supported in Budibase"
sourceUrl: "https://docs.budibase.com/docs/barcodeqr"
---
# Barcode/QR

Barcodes and QR codes come in a huge range of formats, from simple product numbers to complex text patterns and URLs.

To accommodate the wide variety of content the field can handle, the Barcode/QR column type is stored as text, or a string.

Fields configured as Barcode/QR types in the database will appear as [Barcode/QR components](https://docs.budibase.com/docs/barcodeqr-field) in the builder.

## Creating a Barcode/QR column

The process for creating the column only takes a few seconds.

1. First, navigate to your Datasource and click the `+` button along the top-right
2. Give the column a Name, e.g "ProductCode"
3. Select **Barcode/QR** from the **Type**
4. Click **Save Column**

## Convertible types

In Budibase, depending on the field type, you can update the type of a column to another

In this instance, a Barcode/QR can be updated to any of the following and vice versa.

- [Text](/docs/data/budibasedb/text)
- [Options](/docs/data/budibasedb/text#options)
- [Long Form Text](/docs/data/budibasedb/text#long-form-text)

This can be handy when you've been manually entering QR code and Barcode data for years as `Text` and you finally switch the field type to Barcode/QR!
