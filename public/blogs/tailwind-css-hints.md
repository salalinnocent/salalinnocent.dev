---
title: "Behind the Classes: Tailwind Explained"
date: "April-17-2025"
slug: "Tailwind CSS Notes."
icon: "/icons/css.png"
---

# 🚀 Things to know when apporaching Tailwind CSS...

⚡️Tidbit: In production tailwind removes all the unnecessary **Unused Utility Classes**.

➡️ **How does the styling convention works in CSS ?**

It is a clockwise approach that it should move from TOP, RIGHT, BOTTOM, LEFT

---

➡️ **What is the difference btw the Relative and Absolute position ?**

**Relative**: means it remains in the normal document flow but can be offset with top, right, bottom, left. The element still takes space in the layout and the other elements should be placed relative to it.

**Absolute**: means the element is removed from the document flow and can no longer be affected by the positioning of the other elements. There should be a parent container with the relative positioning so the child element can be positioned absolute to it.

---

➡️ **What do we keep constants or the logic for the constants in separate file ?**

We do this to keep the logic of the constants away from our components or the other files so it should be easy to read and manage. For example if you want to add additional feature in the website you can just add it in the constant file. In a case i-e we have a list of items that are constant and we need to iterate over them its hard to bring in the items one by one while we can keep it in a separate file in a variable and then iterate over them.

```js
// constants.js
export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];
```

➡️ **What is <li> <ul> and <ol> ?**

```js
<li> List Items
<ul> Unordered List
<ol> Ordered List
```

---

➡️ **What does flex or flex-1 means ?**

**flex**: Makes the Container as flexbox.

**flex-1**: Allows the item to grow and fill reminaing space proportionally.

---

➡️ **What does href and label do when we declare them in constants ?**
**href**is typically used in the anchor tag <a> it means where to link the page when it is clicked
**label** is the name that appears on the page.

---

➡️ **What are HTML Semantic tags ?**
Html 5 semantic are introduced to improve the meaning and structure to the web documents. Common ones are

```js
<header> Header Section
 <nav> Navigation Links
 <main> Specify the main content of the page
 <section> Group related content such as themes or topics
 <article> Represents stand alone content
 <aside> Defines content related to the main page such as callouts, or advertisements
 <footer> Footer of the page
 <figure> Images
```

---

➡️ **If you want to use images as a background in Tailwind with a Vite `.svg` file:**

To use `image.svg` as a **CSS background image**, place it in the `public/` folder.  
If it's inside `src/assets/images`, Vite treats it as a JS module, which **won’t work** for CSS backgrounds.  
That setup works for: `<img src={image} />`  
But **not** for background images like:

```css
background-image: url("/image.svg");
```

---

➡️ **What does flex flex-wrap does ?**

**flex** makes the container becomes a row as by default. If you explicitly type **flex-col** then it becomes it aligns the items to be in a column
**flex-wrap** makes the container become a **flex-box** and the content inside moves to the next line nicely if the box shrinks or / width shrinks.

---

➡️ **JIT Mode in tailwind CSS ?**

JIT Mode is \***\*Just-In-Time** mode in Tailwind that generates styles on demand rather then ahead of time. It make development faster. So tailwind generates utility classes that are used in the project rather then compiling whole massive stylesheet with every utility class.

---

➡️ **One Rule of thumb regarding the layout ?**

One rule of thumb is always apply layout spacing classes to the parent div which is the outer div should have **flex**, **margin**, **grid** and **gap**
And the inner child should contain the content styling **padding** **bg**, **text**, **font**.

---

➡️️ **How to wrap anchor tag for a logo or an image ?**

To wrap the anchor tag you have to wrap it outside the image as <img/> is a self closing (void) HTML tag, it doesnt allow any kind of child element inside it. To make it clickable and navigate it to the desired link we have to wrap the anchor outside the image.

---
