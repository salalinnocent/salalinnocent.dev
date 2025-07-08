---
title: "Documented Full-Stack Application Journey"
date: "June-12-2025"
slug: "Full-Stack Web Development with GraphQL & React"
icon: "/icons/full-stack.png"
---

# 📚 Full-Stack Web Development with GraphQL and React …

**GraphQL** release in **2015**, alternative to **SOAP & REST API**. It is a protocol for sending and receiving data & Apollo is a library that is used to implement that protocol.
GraphQL resolves correct entities and data specified in your object query. Every Field in a GraphQL represents a function that resolves to a value. These functions are called Resolver Functions. The return value could just be the corresponding database value.
React makes rendering more efficiently by creating a virtual DOM, which compares the virtual and and actual DOM and updates it accordingly. When there is a difference btw the virtual and the real DOM react apply changes.

---

➡️**What is a dist [distribution] folder ?**

This is the folder where all the complied and optimized files for deployment lives, Its just a convention for distribution - deployable code. For instance when you build a web application [all the raw React components, styles and assets] gets transformed and minimized into browser friendly version.

---

➡️**How do I create a directory and create a file ?**

To create a directory I need to make command mkdir src/client it will create a folder src and a client folder inside it src/client. To create a file inside I can use touch index.js command in the terminal.

---

➡️**What is the entry point of the application and the output ?**

The entry point is the starting point of the application where the app begins execution. for example if our entry: “./src/index.js” look at for all the dependencies and imports from this file and bundle them. Secondly, the output tells where to put the results of the bundling and what to name them for instance filename: “main.js”.

---

➡️**What is Class Inheritance ?**

**Class inheritance** is a core concept in **Object Oriented Programming [OOP]** which allows one class to inherit properties and method/behaviour from another class. These classes are coined as parent class and derived class.

---

➡️**Why we cannot declare the event handler methods in the React Class Components ?**
Firstly, class body only supports class methods or class fields. const or let is used for variables inside the functions or blocks not inside the method or a class.

---

➡️**Why we run event.preventDefault( ) on our handleSubmit class method ?**

When we do that it stops our browser from submitting the form and reload the page. So we do that because it performs validation checking if all the fields are filled or not. Secondly it gives you control over the handler so it doesn’t automatically sends in the data or upon refresh it gets lost.

---

➡️**What is a race condition problem in programming ?**

**Race condition** is when multiple functions or threads try to access the shared resource of information and try to update it leading to bugs or even unpredictable results. So the functions execution should be properly handled because the result might depend on the function that ends first. Example : Real life example might be of banking that multiple processors try to fetch money from the same account if not handled properly will cause error.

---

➡️**Why we need to keep an eye on the bandwidth we are using in Production level ?**

We have to keep an eye on as **Little Bandwidth** to use as more data means more bandwidth which costs more money. Secondly the more unused libraries we use it means more issues in performance of the application.

---

➡️**What does it mean by Routing ?**

Routing means how application responds to specific endpoints and methods.

---

➡️**What does next( ) do in a callback function ?**

When we call next we hand over the execution from one callback function to next function in the row, these functions can also be a middleware function.

---

➡️**How do we serve our production build ?**

We can serve our production build of the front end through Express.js but this approach is not great for development purposes but its important and useful for testing the build process and seeing how the live application acts.

---

➡️**What does it mean to serve static files in Production ?**

Instead for running separate front-end and back-end servers in production the React build is served as static files.

---

➡️**Why we use Cross-Site-Scripting (XSS) tactics ?**

We add **Cross Site Scripting** tactics in our web applications from malicious attacks. **XSS** is a vulnerability where attackers can inject JavaScript code in our web application. For that we use helmet.js which adds a security layer for the and set default headers and also prevents attackers from loading resources from **external URLS**.

---

➡️**What is a Preflight Request ?**

A **Preflight Request** is an HTTP OPTIONS request sent by the browser before making the CORS[Cross-Origin-Resource-Sharing] request. It checks if the server allowed the actual request.
Sends an OPTION request to check if server allows it, then it waits for the server response typical the response is in terms of Headers, Methods and origin, then it makes the actual request.

---

➡️**What is the connection between the Resolvers and Schema in GraphQL ?**

**Resolvers** is just like controllers in Express it is where we implement the logic for fetching data or modifying it. Secondly, every field in the schema needs a resolver to process requests.
**Schema**[Type Definitions] is where we define the structure of the GraphQL API. It specifies the mutation, queries and data types. And it is written using GraphQL SDL schema definition language.

---

➡️**What is the connection between the Output Types Input Types Mutation Types and Root Schema ?**

**Output Types** : This defines how the data looks like when it is returned
**Input Types** : This defines what data the clients sends in while making a mutation. No ids as it is generated by server
**Mutation Types** : sends This is where we define mutation signature functions signatures specifying the return and input types.
**Root Mutation** : handling changes like adding a post
**Root Query** : is the starting point where all the GraphQL queries begin.
**Root Schema** : This combines the RootQuery and RootMutation at the top level schema

---

➡️**How do we do logging in Node.js via Winston ?**

**Winston** is a library that helps us get rid of the console.log statements and give persistent logging for error information. Even in production level its **error tracking and monitoring**. A transports in winston is nothing more than a way in which winston separate and saves different log types in different files.

---

➡️**How do you deal with legacy systems and old backend code bases ?**

One of the way to deal with upgradation is to build a top layer API, which bridges the gap between the old code foundations and the client queries. Of course firstly we have record the clients request what it is demanding and then upgrade it with a layer of new API.

---

➡️**What are the advantages of creating a migration file in MySQL ?**

**Migrations** allows us to track database changes through our regular version and system version such as **GIT** and **SVN** [central version control system]. Every change in our database will be covered in our migration file. Secondly, it also enables us to write updates that automatically apply database changes for new version of our application.
A migration has **two** properties
**Up**: this property states what should be done when running the migration.
**Down**: this property states what is run when undoing the migration.

---

➡️**What does seeding does in development phase ?**

It helps you **generate fake data** dynamically rather then implementing static values which is time consuming.

---

➡️**What is Dependency Injection Pattern ?**

**Dependency Injection** is pattern where we passes dependencies to a class or a function instead of hardcoding them. It helps us decouple components by injecting dependencies. It helps to make the application more modular, testable and flexible with loose coupling.

---

➡️**What is Loose Coupling and Tight Coupling ?**

**Loose Coupling**: Components are independent and changes in one doesn’t effect the others
**Tight Coupling**: Components are strongly dependent on each other, which makes modifications very harder.

---

➡️**What does Foreign Key Constraint does in MySQL ?**

In MySQL or in relational databases in general **foreign keys** creates a **parent child relationship** between **tables**. A foreign key in the one table [child] points to the primary key of another table [parent].
//Migrated the userId to the Posts Table and ran the command to check if migration was updated successfully//

---

➡️**What is the major difference between a seeders and migrations ?**

**Migration** contains files that define how the structure of your database evolves over time. Like creating Tables, adding Columns or adding constraints, its like a historical record of the changes to the schema.
**Seeders** contains files that insert sample data or default data. Its like a dynamic way of adding fake data into the structure we have rather then hard coding the values.

---

➡️**What are the types of relationships in Database ?**

**One to Many Relationship**: This is the common type of relationship in database where Table A can be linked to many records in Table B, but each record in Table B links to only one in Table A. **For example**, One department can have many employees but each each employ belongs to only one department.
**Many to Many Relationship**: This means record in Table A can belong to many in Table B and vice versa. To make this work we create another Table called junction table which holds the foreign key from both the tables.
**For example**, students can enrol in many courses and each course has many students so how we link them is we create a junction table named student courses to link them together.

---

➡️**What is an Abstract Syntax Tree [AST] ?**

**Abstract Syntax Tree** is a way of describing **deeply nested objects** that holds all the information about the source code or in the GraphQL case its the queries. For example the babel the famous JavaScript compiler. It writes the JavaScript that is not widely supported and convert it into older syntax. Babel transforms all the source code thrown at it into Abstract Syntax Tree and then executes the transformation on this tree. After that transformations are used to generate source code that works with the latest version of the browsers and also on the version that are not been updated yet.

---

➡️**What is an Higher Order Component ?**

A **Higher Order Component** is a advance technique in React for using reusable components. Its not a built in feature of React but a pattern that emerges from its compositional nature. It takes a component as an argument and return a new component with additional functionality.

---

➡️**What is an Higher Order Function ?**

A **Higher Order Function** is a function that takes another function as an argument or returns a function as a result. Its one of the core concepts of Functional Programming as it makes the code more reusable and modular.

---

➡️**What are the two ways we can update the UI after running mutation in Apollo/Client ?**

**Refetching the Dataset**: this approach is simpler and easier to implement but extra network request need to be made in order to fetch the data with the new added data.
**Updating the Cache**: this approach is harder to understand and implement but it attaches new data to the cache of the Apollo Client, so no Refetching is required.

---

➡️**What is Polling with react query or Apollo client in the newer version ?**

**Polling** in react query or Apollo Clients allows us to refresh data at regular intervals, ensuring the UI’s stays up to date without manually refreshes.
There are certain drawbacks to this approach:
**Firstly**, It is inefficient to send requests without knowing there is new data, browser might send dozens of request without ever receiving new data.
**Secondly**, If we directly send the initial request again, we will get the posts, including the ones already shown to the client.
**Thirdly**, When sending requests the server needs to query the database and calculate everything. Unnecessary requests cost money and time.

---

➡️**What is the Suspense Based Polling introduced in the newer versions of the Apollo Client v3.8 ?**

It is way of handling UI’s that leverages React 18’s Suspense API, to handle polling more efficiently, instead of manually loading states, Apollo Client can suspend component fetching new data, while making UI more smoother. This feature is the simplest way to implement real time updates for news feed for example.

---

➡️**What are the ways to send real-time updates to the user ?**

**Server Send Events**[SSE]: is a technology that allows sever to push updates to the user over a persistent HTTP connection. Its a unidirectional means the server can send the data back to the client but the client cannot send back the data using the same connection. Automatic reconnection built into the browser. Ideal for the real-time notifications, live feeds and dashboard.
**Web Sockets**: it is a powerful technology that enables real time, bidirectional communication between a client and a server over a single persistent connection. Unlike HTTP which required a new connection for every interaction, web sockets maintain an open channel allowing data to flow freely in both directions.

---

➡️**What is Pagination ?**

**Pagination** is a technique to divide/cut large data sets into smaller chunks making it more manageable and user-friendly, makes less network calls for the client to make. Otherwise load large data sets makes the application slow and miserable user experience. Also it enhance application performance.

---

➡️**What are the common React Pattern ?**

**Controlled & Uncontrolled Components**
**Stateless Function**
**Conditional Rendering**
**Rendering Children**

---

➡️**What is the Controlled and Uncontrolled components means ?**

**Controlled Component**:
**Uncontrolled Component**: A component is uncontrolled when the component value is not set through a react property as it has been saved and taken from the browser Node. The value of the input is also retrieved through the reference of the DOM Node and its not managed from the react component state.

---

➡️**What are Stateless Functions in React ?**

**Stateless functions** in react are functional components that **don't** manage there own **state** or **lifecycle methods**. They are pure function to which you give props and they out JSX. But with the introduction of react hooks functional components can manage states the hooks didn't make them obsolete they empowered them.

---

➡️**What is Conditional Rendering ?**

**Conditional Rendering** is what makes react **responsive** and **dynamic**. Its how application adapts to users, data & states in real time. If this condition is true, this should happen if not that should happen.

---

➡️**What is Rendering a Child Component means ?**

**Rendering a child component** means displaying one component inside another component like nesting building block to create a full UI.
If parent component includes the child component, react will render the child component as part of the parent’s output. That is the way to abstract
logic into smaller chunks to make it reusable and scalable.

---

➡️**What is an Optimistic UI approach of Apollo Client ?**

An **Optimistic UI** approach of Apollo Client is a approach where user gets the taste of the success, it will show that the mutation has occurred like liking the button, and it turns blue even if you have no network access. So, apparently it gives a negative id temporarily but when the network access is granted it gives out the real assigned id from the server.

---

➡️**What are React Helper Components ?**

**React Helper Components** are the components that does not have any business logic but they are kind of helper to reuse or compose feature in **reusable chunks** across application. For example a drop down menu, toast message.

---

➡️**What is nullish coalescing operator [ ?? ] ?**

**Nullish Coalescing Operator** is a logical operator in JavaScript which returns the right hand side value only if the left hand side value is null or undefined if not it will return the left hand side value.

---

➡️**What is the difference between a Run-Time Error & Compile-Time Error ?**

**Run-Time Error**: This happens while the code is running, the syntax looks fine so the code starts executing but something goes wrong during execution. Like accessing a property of undefined, Calling a function that doesn't exist.
**Compile-Time Error**: These types of error occur before the code runs, typically during the parsing or trans-pilling phase (like when using Typescript or Babel). JavaScript itself is interpreted so pure JS doesn't have compile time errors. But tools like linter or type checker can catch For example a missing curly braces, undeclared variables.

---

➡️**What is the difference between React Context API & Apollo Consumer ?**

**React Context API**: General purpose is to value and state sharing like theme or auth. Its purely client-site and framework agnostic, no backend data fetching is involved. Its best for lightweight global states, UI preferences and passing down props deeply.
**Context**: This is a React approach for sharing data between components, without having to pass it through the complete tree.
**Provider**: This is a global component, mostly used at just one point in your code. It enables you to access the specific context data.
**Consumer**: This is a component that can be used at many different points in your application, reading the data behind the context that you are referring to.
**Apollo Consumer**: Specifically for the Graph QL data fetching using Apollo Client. Its best for fetching and caching remote data, managing server states, and interacting with GraphQL API.

---

➡️**What are JSON Web Tokens ?**

A **JSON Web Token** is a compact, URL safe way to represent claims between two parties, typically used for **authorization** and **authentication**. It consists of three parts separated with a dot **[ . ]**

**Header**: contains metadata like the signing algorithm
**Payload**: holds the actual data or claim i-e userID, roles, expiration.
**Signature**: ensures the token hasn't been tempered yet.

---

➡️**What is the difference between localStorage versus Cookies ?**

**Advantages & Disadvantages of localStorage**: Easy to use with JavaScript with setItem, getItem. Persistent across sessions unless explicitly cleared. Works well with the API’S that except tokens within the header Authorization: Bearer <token>
The **disadvantages** is they are vulnerable to XSS attacks, if an attacker can inject JavaScript into your app, he can read and write localStorage. Not automatically, sent with request you must manually attach the tokens to the header
**Advantages & Disadvantages of Cookies**: Can be marked with HTTP only and secure makes them inaccessible to JavaScript and XSS attacks. Automatically attached to every request of the same origin making it wonderful for the session based auth.
Size limit is 4KB and more complex to manage specially with the cross-origin API’S. Vulnerable to CSRF.

---

➡️**What is a Content Delivery Network [CDN] ?**

**Content Delivery Network** is a global distributed system of servers designed to deliver web content like HTML, CSS, JavaScript, pictures and videos to its users as quickly and reliable as possible.
Key Components of CDN:
**Origin Server** where your content lives.  
**Edge Server** CDN nodes that cache and serve content closer to the user.
**Pop’s** [points of presence] physical location housing edge servers.

---

➡️**What is the difference between Dynamic Routing and Static Routing ?**

**Static Routing**: Is where the routes are manually configured by a network administrator, there routes don't change themselves unless manually edited. It doesn't adapt to network changes automatically.
**Dynamic Routing**: A routing technique where routes use algorithms and protocols like [RIP, OSPF, BGP] to find out the best path based on the current network. It adapts to the real time changes like link failure, congestion.
**RIP**: Routing Information Protocol [ Distance vector protocol ]
**OSPF**: Open Shortest Path Protocol [ Link State Protocol ]
**BGP**: Border Gateway Protocol [Path Vector Protocol ]

---

➡️**What are Secured Routes ?**

**Secured Routes**: are the paths that are only accessible to the users who are authenticated or have the correct authorization.

---

➡️**What is React Interpolation ?**

**React Interpolation** refers to embedding JavaScript expression directly into JSX to dynamically render values such as **variables, props, function results** within your UI.

---

➡️**What is Programmatic Navigation in React Router ?**

**Programmatic Navigation** in React Router is way to redirect users without using Links component, its perfect for handling redirects after form submission, authentications or custom logic.
