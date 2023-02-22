---
sidebar_position: 3
---

# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

## Linking documents

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/create-a-document).
```

```md
Let's see how to [Create a page](./create-a-document.md).
```

**Result:** Let's see how to [Create a page](./create-a-document.md).

## Linking headings

You can link to headings in the same document by adding an id to the heading:

```md
## Level 2 title {#id-level-2}

### Level 3 title {#id-level-3}

#### Level 4 title {#id-level-4}
```

Go to [Level 2 title](#id-level-2) or [Level 3 title](#id-level-3) or [Level 4 title](#id-level-4).

## Level 2 title {#id-level-2}

```





```

### Level 3 title {#id-level-3}

```





```

#### Level 4 title {#id-level-4}

```





```

## Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory (`static/img/docusaurus.png`):

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return <h1>Hello, Docusaurus!</h1>
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

    :::tip My tip

    Use this awesome feature option

    :::

    :::danger Take care

    This action is dangerous

    :::

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

## Quotes

Markdown quotes are beautifully styled:

```md
> Easy to maintain open source documentation websites.
>
> — Docusaurus
```

> Easy to maintain open source documentation websites.
>
> — Docusaurus
