---
title: "PDF exporting \ud83d\udd12"
description: "The PDF Exporting feature allows you to generate downloadable PDF reports directly from your Budibase app similar to how you would build standard screens."
sourceUrl: "https://docs.budibase.com/docs/pdf-exporting"
---
# PDF exporting 🔒

> 📘
>
> ### Licensing🔒
>
> The following feature is only available to customers with a **Premium** or **Enterprise** plan.
>
> You can view more details on [our pricing page.](https://budibase.com/pricing/)

## Creating a PDF Screen

When creating a new screen, you’ll see a [screen](https://docs.budibase.com/docs/screens) option called PDF at the end of the screen list. Select this option to create a screen specifically for generating PDF documents.

Once selected, you’ll be taken to a new screen where you can begin creating your PDF. This includes standard grid functionality, allowing you to arrange content flexibly.

## Building Your PDF

Within the PDF screen, you can use Budibase components such as tables, text, images, and more, just as you would on a regular screen. You can connect [data providers](https://docs.budibase.com/docs/data-provider) to populate your report with dynamic content using Bindings. This enables you to generate personalised or context-specific PDFs for your users.

## Styling and Layout

You can fully customise the layout and design of the PDF using Budibase’s grid functionality. [Components](https://docs.budibase.com/docs/components) will be rendered in the exported file as on the PDF.

## Customisation options

In addition to adding Budibase components to your PDF screens, you can customise the title and button text used for the PDF download experience. These options are available in the screen’s settings panel.

Both fields support Bindings, allowing you to tailor the PDF to the logged-in user or any other context-specific data. For example, you can include the user's name or role in the title or adjust the button text based on permissions.

- **PDF Title**: This is displayed at the top of the screen when users visit the PDF page. It also determines the filename of the downloaded PDF.
- **Button Text**: This controls the label shown on the PDF download button.

These fields help tailor the user experience and provide context-specific naming for your reports.
