---
title: "React Components Lifecycle"
date: "August-26-2024"
slug: "React Components Lifecycle"
icon: "/icons/lifecycle.png"
---

# **🌀 React Components Lifecycle...**

In React, every component goes through a cycle of events from the moment it appears on the screen to the time it disappears. This is called the **Component Lifecycle**. Understanding this helps you fetch data, clean up resources, and control when things should or shouldn’t happen.

---

## 🚀 **1. Mounting Phase**

This is when a component is created and added to the page (DOM).

### 🛠️ **constructor(props)**

- Called **first** when the component is created.
- Used to:
  - Set initial `state`
  - Bind class methods (`this.handleClick = this.handleClick.bind(this)`)

### 🧱 **render()**

- Returns the JSX to show on the screen.
- Runs every time state or props change.
- Think of it as: “What should the UI look like right now?”

### 🧠 **static getDerivedStateFromProps(props, state)**

- Runs **before** render, during both mounting and updating.
- Used to update state **based on props**.
- It’s a static method, so it can’t use `this`.
- Return a new state object or `null` to do nothing.

```js
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null;
}
```

✅**componentDidMount()**  

Runs once, right after the component appears on screen.
Perfect for:
Fetching data
Setting timers
Subscribing to events

```js
componentDidMount(){
    fetchData()
}
```

---

🔁 **2. Updating Phase**
This happens when the component’s state or props change.

⚖️ **shouldComponentUpdate(nextProps, nextState)**
Lets you control whether the component should re-render.

Return true to update or false to skip. Helpful for performance boosts.

📸 **getSnapshotBeforeUpdate(prevProps, prevState)**
Runs before the changes are applied to the DOM.

Used to capture information (like scroll position).

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  return window.scrollY;
}
```

🔄 **componentDidUpdate(prevProps, prevState, snapshot)**
Runs after the component re-renders.

Great for:
Making additional updates
DOM changes
Using the snapshot captured earlier.

```js
componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot !== null) {
    window.scrollTo(0, snapshot);
  }
}
```

---

❌ **3. Unmounting Phase**
This is when the component is removed from the screen.

🧹 **componentWillUnmount()**
Called just before the component disappears.

Used for cleaning up:
Canceling timers
Removing event listeners
Aborting API calls

```js
componenetWillUnmount(){
    clearInterval(this.timer)
}
```

🧠 Once a component is unmounted, it can’t come back — you have to create a new instance.

⚠️ **Deprecated Methods to Avoid**
Some older methods like **componentWillUpdate()** are now deprecated and shouldn't be used in modern React.
