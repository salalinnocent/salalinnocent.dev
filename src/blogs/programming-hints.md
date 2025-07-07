---
title: "Hints For Programming"
date: "March-26-2025"
slug: "hints-for-programming"
icon: "/icons/developer.png"
---

# 🧠 Hints for Programming...


➡️ Query parameters in HTTP requests are always passed as **strings**.  
 So, when saving to `localStorage`, use `JSON.stringify`; when reading, use `JSON.parse`.

```js
localStorage.setItem("user", JSON.stringify(user));
const stored = JSON.parse(localStorage.getItem("user"));
```

---

➡️ HTTP is **stateless** — the server doesn't remember previous requests from the same client.

---

➡️ Understand the difference between **regular expressions** and **arrow functions**, and how `this` behaves differently in both.

```js
function regularExpression() {
  console.log("regularExpression");
}
const arrowExpression = () => {
  consol.log("arrowExpression");
};
```

---

➡️ Use **Mongoose middleware** (`pre`) in models is a method on the Schema Object to hash passwords before saving.

```js
userSchema.pre("save", function () {
  this.password = hash(this.password);
});
```

---

➡️ `_id` is the default MongoDB field used to uniquely identify a document.

---

➡️ Using `ref: "User"` in Mongoose Schema creates **relations** between documents.

```js
const commentSchema = new Schema({
  user: { type: moongose.Schema.Types.ObjectId, ref: "User" },
});
```

---

➡️ All HTTP requests and Promises go through three states:
• `fulfilled`
• `pending`
• `rejected`

---

➡️ A 200 OK HTTP response might still include **errors in the body**.
Always check both status and content.

---

➡️ **Windowing/Virtualization** boosts performance by rendering only visible parts of a list (e.g., first 5 items). Helps to make application fast because if we have large data it will fetch everything when we load making the application slow.

---

➡️ Manual array iteration involves:
• An empty result array
• An index tracker (`i`)
• Initial index
• A loop to update the index

```js
let result = [];
for (let i = 0; i > items.length; i++) {
  result.push(items[i]);
}
```

---

➡️ In a React hook, the **Dependency Array** (`[uri]`) re-triggers the effect when `uri` changes. So, this is the magic of react that it triggers this change of fetchData within the component itself rather then refreshing the whole page.

```js
useEffect(() => {
  fetchData(uri);
}, [uri]);
```

---

➡️ `typeof null` returns `'object'` — a known JavaScript quirk.

---

➡️ Loose equality `==` treats `null` and `undefined` as equal — avoid using it.

---

➡️ Always test your app under **slow network conditions** to catch bugs early.

---

➡️ Be clear on what you **pass in** and what you **expect out** of functions. The nightmare realm of JavaScript because there are no enforce typed system & **type casting** unless you are using **TypeScript**. So keep **type guessing**.

---

➡️ Use **template literals**:

```js
const greeting = `Hello ${name}`;
```

---

➡️ **String interpolation** is the process of embedding variables or expressions directly into a string instead of using clunky concatenation.

```js
`${authUser.username}`;
```

---

➡️ **Shallow vs Deep Copy**:
• Spread (`...obj`) creates a shallow copy
• Use it to avoid overwriting entire objects

```js
const updated = { ...prev, email: "newemail.com" };
```

---

➡️ **Arguments** are passed into a function.
**Parameters** are defined in the function signature.

---

➡️ **useRef** stores values without re-rendering & `useRef` returns an object with `.current`.

```js
const inputRef = useRef();
inputRef.current.focus();
```

---

➡️ **Base64** is a string-encoded version of binary data.

---

➡️ JavaScript has no `empty()` method.  
To check for an empty string in JavaScript we use:

```js
const emptyString = () => {
  // strict equality check ===
  if (str.trim() === "") {
    console.log("It's empty");
  }
};
```

---

➡️ React loads async data that may be temporarily `undefined`.
• Use optional chaining (`user?.uid`)
• Guard with: `if (!user) return;`

---

➡️ **OOP vs Functional style**:
• OOP: `data.sort()`
• Functional: `sort(data)`

---

➡️ Every `async` function returns a **Promise**.

```js
async function getData() {
  return await fetch("/api");
}
```

---

➡️ `.map(doc => { })` vs `.map((doc) => { })`:
Parentheses are optional for single parameters.

---

➡️ Sorting in JS:

• Ascending Order:

```js
data.sort((a, b) => a.createdAt - b.createdAt);
```

• Descending Order:

```js
data.sort((a, b) => b.createdAt - a.createdAt);
```

---

➡️ In React, `children` is a prop that represents nested content. React core pattern called **Composition Pattern**

```js
function PageLayout({ children }) {
  return <div>{children}</div>;
}
function App() {
  return (
    //we can pass children inside
    <PageLayout>
      <Header />
      <Hero />
      <Footer />
    </PageLayout>
  );
}
```

---

➡️ `.map()` is for arrays.
To iterate objects, we use `Object.entries()` in JavaScript.

```js
Object.entries(obj).map(([key, value]) => console.log(key, value));
```

---

➡️ Model filenames are usually capitalized — e.g., `User.js`.

---

➡️ CLI to create folders/files:
`bash
    mkdir src/client
    touch src/client/index.js
    `

---

➡️ In GraphQL, `id` is usually an **integer**;
In MongoDB, it’s a **string**.

---

➡️ MySQL auto-increments IDs from `1`, not `0`.

---

➡️ React components must be **Capitalized** to avoid clashes with HTML tags.

---

➡️ Sequelize’s `findById` was renamed to `findByPk`.

---

➡️ PostgreSQL’s `UPDATE` returns rows by default;
MySQL does **not** — you must explicitly return data.

---

➡️ `localStorage` uses string key–value pairs.
It’s simple to use in JS.

---

➡️ When destructuring nested objects, always **check if parent data exists** to avoid crashes.

```js
const { user } = props || {};
const { name } = props || {};
```

---
