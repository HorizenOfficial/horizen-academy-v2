---
sidebar_position: 4
---

# Create a folder

## Category item metadata

Add a `_category_.yml` file in the respective folder. You can specify any category metadata and also the `position` metadata. `label`, `className` and `position` will default to the respective values of the category's linked doc, if there is one.

```yaml title="docs/tutorial/folders/_category_.yml"
position: 2.5 # Position in the menu
label: "Tutorial" # Label in the menu
collapsible: true # make the category collapsible
collapsed: false # keep the category open by default
className: red
link:
    type: generated-index # no need to change this
    title: Tutorial overview
```
