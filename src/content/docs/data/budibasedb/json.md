---
title: "JSON"
description: "The JSON data type is available for internal tables. JSON fields have a schema, which can be configured when creating or editing the column. Having the correct schema is important as the builder uses this to know what bindings are available and what form fields are available. Extra data that is not \u2026"
sourceUrl: "https://docs.budibase.com/docs/json"
---
# JSON

The JSON data type is available for internal tables. JSON fields have a schema, which can be configured when creating or editing the column. Having the correct schema is important as the builder uses this to know what bindings are available and what form fields are available. Extra data that is not in the schema can be stored, but no bindings will exist for it.

The JSON field schema can be edited with either a form or by providing an example JSON payload. If you are using deep JSON structures (e.g. multiple levels of objects or arrays) then you will need to use the JSON schema editor, as the form editor only goes one level deep.

Schema editor button when creating or editing a JSON column:

## Editing JSON (Form)

Using the JSON form editor, you can update your JSON without having to write JSON.

## Editing JSON (raw)

Using the JSON schema editor, you can write and edit raw JSON.

## Displaying data within a JSON column

JSON field schema is merged with table schema in client apps, and basically treated as new top level columns. This means you can filter on nested values, or display them inside tables, as if they were normal fields in your table. Here's an example of a table showing all columns inside the table containing the JSON field above:

## Displaying JSON arrays

In that screenshot, you can see that it has pulled out fields from within the JSON field and displayed them automatically. It also is showing the JSON fields as a whole (as it shows all columns by default) - but you can easily control what gets displayed by using the table setting:

---

## Filtering

You can filter using fields inside your JSON. Here's an example of filtering using the nested value Car.Make:

---

## Data bindings

Data bindings will be automatically generated for all available fields inside your JSON, including nested fields (e.g. *Car.Make*). Data bindings will be generated until an array is hit, at which point no further bindings can be generated. You can read about how arrays are handled down below. Bindings are also provided for the JSON field as a whole and any array fields, both of which integrate very nicely with JS bindings.

Here's an example of all the data bindings provided for the JSON field above. My table is called **People** and my JSON column is called **Data**.

---

## Arrays

Arrays inside JSON fields can be used as data sources. For this example, I've added a new property called **Friends** inside my JSON field, which is an array.

JSON

```
"Friends": [
    {
      "Name": "Bill",
      "Address": {
        "Number": 1,
        "Street": "High Street",
        "City": "New York"
      }
    },
    {
      "Name": "Ben",
      "Address": {
        "Number": 18,
        "Street": "Shore Road",
        "City": "Carrickfergus"
      }
    },
    {
      "Name": "Bert",
      "Address": {
        "Number": 249,
        "Street": "Mountain Cresent",
        "City": "Lima"
      }
    }
  ]
```

Here's an example using a table block to display data of *Friends*. The structure is:

- a [Data Provider](https://docs.budibase.com/docs/data-provider) with [Repeater](https://docs.budibase.com/docs/repeater) (to get the rows that contain the JSON fields),
- then a table block (to show the data inside the array inside the JSON field).

You can see from this screenshot that the schema correctly determines all available fields inside the array objects and is listing them in the table. If you have an array of primitives (e.g. an array of numbers, or strings) then a fake schema entry **value** is generated. You can then display data inside primitive arrays using *Field.something.value*.

You can nest arrays as deep as you like. If your JSON structure looked something like this:

JSON

```
{
  "countries": [{
    "name": "England",
    "cities": [{
      "name": "London",
      "boroughs": ["Barnet", "Brent", "Camden", "Croydon", "Harrow", "Sutton"]
    }]
  }]
}
```

Then you can use a repeater on *Column.countries*, then put a repeater block inside that and target *countries.cities*, then put another repeater block inside that and target *cities.boroughs*, to finally get out the borough values. You can chain this as long as you like and the schema will always be available.

---

## JSON form field

There is a new form field component for JSON fields. It will render a text area that pretty prints the content as JSON. It also has forced validation to ensure that the input is valid JSON.

The new JSON field component:

Validation enforcing JSON syntax:

---

## JSON form integration

Since nested JSON fields are considered normal fields, you can bind a form component to a nested JSON field. In my example, I have the field *Car.Make*. If I want to update this, I can simply add a text field and bind it to *Car.Make*, then save my whole row as normal. This will transparently update the value inside the JSON field with no extra configuration.

Binding a form component to a nested JSON field:

When generating form components automatically (via the `Update form fields` button on [Field groups](https://docs.budibase.com/docs/field-groups)) the builder will always insert an actual JSON field form component for the whole JSON field, rather than individual inputs for every nested property. You can always add/remove fields as you see fit if you want to be able to directly update some nested fields.

If you have a form targeting a subsection of your JSON field, then the best way to save your full row value is to write a small [JavaScript Binding](https://docs.budibase.com/docs/javascript) and make use of the new *Form.Value* binding (which is an object of the whole value of the form) to insert the value into your JSON field. This is only really needed when you are iterating over JSON arrays and want to update one of the array elements.

### Example: Questionnaires

1. Add a **Topic** table with a *Name* column and a JSON type *Questionnaires* column with the following schema:

2. After clicking `Save Column`, insert a row for each of your topics.

3. Create a [Screen](https://docs.budibase.com/docs/screens) for the `Topic` table. Insert a [Cards block](https://docs.budibase.com/docs/blocks#cards-block). Assign the *Title* property to the topic name binding (`{{ New Cards block.Topic.Name }}`, and optionally set the *Subtitle* to display the number of questionnaires: `Questionnaires: {{ length New Cards block.Topic.Questionnaires.values }}`
4. Tick the `Link card title` setting, and provide the following URL: `/new-questionnaire/:topicId`

5. Create another screen, and set the route to the link destination:

6. Add a [Repeater block](https://docs.budibase.com/docs/blocks#repeater-block) with a filter on the *topicId*

7. Add a [Headline](https://docs.budibase.com/docs/displaying-text#headline) for the topic name, with the following binding: `Topic: {{ Topics Repeater block.Topic.Name }}`.
8. Nest a [Form](https://docs.budibase.com/docs/forms) within the repeater block. Select the *Questionnaires* column as the schema.

9. Now you'll be able to add the form fields as defined by the JSON schema earlier.

10. Finally add a submit [Button](https://docs.budibase.com/docs/button). `Define actions` and select the **Save Row** action. Choose the repeater block as the *Datasource*, with *Topic* as the target table. Click `Add Column` so that the JSON *Questionnaires* array can be populated correctly.

Questionnaires.values

```
return [...($("Topics Repeater block.Topic.Questionnaires.values") || []), {
	title: $("Questionnaire Form.Fields.title"),
	rating: $("Questionnaire Form.Fields.rating"),
	comments: $("Questionnaire Form.Fields.comments")
}];
```

#### Result

| Q1 | Q2 |
| --- | --- |
|  |  |
