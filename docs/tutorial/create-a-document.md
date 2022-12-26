---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:

-   a **sidebar**
-   **previous/next navigation**
-   **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: "Hi!"
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

## Doc URLs

By default, a document's URL location is its file path relative to the docs folder. Use the slug front matter to change a document's URL.

For example, suppose your site structure looks like this:

```bash
website # Root directory of your site
└── docs
    └── guide
        └── hello.md
```

By default hello.md will be available at /docs/guide/hello. You can change its URL location to /docs/bonjour:

```bash
---
slug: /bonjour
---

Lorem ipsum
```
