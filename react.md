# React.js Quick Guide

This guide will walk you through the essential topics in React.js, from installation to core concepts and hooks. Assignments are included at the end to test your understanding.

---

## Table of Contents

1. [Installation](#installation)
2. [Core Concepts](#core-concepts)
   - [JSX](#jsx)
   - [Components](#components)
   - [Props](#props)
3. [Hooks](#hooks)
   - [useState](#usestate)
   - [useEffect](#useeffect)
   - [Context API](#context-api)
   - [useRef](#useref)
4. [Assignments](#assignments)

---

## 1. Installation

To get started with React.js, follow these steps:

1. Install **Node.js** if you haven’t already. Download it from [Node.js Official Website](https://nodejs.org/).
2. Create a new React project using Create React App:
   ```bash
   npx create-react-app my-app
   cd my-app
   npm start
```
## 2. Core Concepts

### JSX

**JSX** (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly within JavaScript.

#### Example:
```jsx
const Greeting = () => <h1>Hello, React!</h1>;
export default Greeting;

```
### Components

**Components** are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, making the code more manageable and modular.

There are two main types of components in React:

---

#### 1. Functional Components

Functional components are the simplest type of components. They are just JavaScript functions that return JSX. These are recommended for most use cases in modern React because of their simplicity and the ability to use React Hooks.

**Example:**
```jsx
function Welcome() {
  return <h2>Welcome to React!</h2>;
}
export default Welcome;
```

## Props

**Props** (short for "properties") are used to pass data from a parent component to a child component in React. They allow components to be dynamic and reusable by giving them different data.

### Passing Props to Components

Props are passed into a component as an object. The parent component provides the props, and the child component receives them.

#### Example:
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="John" />
```
## Hooks

**Hooks** are functions that let you "hook into" React state and lifecycle features from function components. They allow functional components to manage state, perform side effects, and access other features that were previously available only in class components.

Introduced in React 16.8, hooks enable you to use state, context, refs, and other React features without writing class components. This makes your code more concise, easier to maintain, and flexible.

### Why Use Hooks?

- **Simplicity**: Hooks enable you to write simpler and more readable code.
- **Reusability**: Logic can be reused across different components through custom hooks.
- **No Classes Needed**: You don't need to use `class` components to access state or lifecycle methods, making the code easier to understand and debug.

---

### Commonly Used Hooks

1. **useState**
2. **useEffect**
3. **useContext**
4. **useRef**

These hooks are the most commonly used in React. Let's explore each of them in detail.

---

### useState

`useState` is a hook that allows you to add state to functional components. It returns a pair: the current state value and a function to update it.

#### Example:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // Declare state variable "count" with initial value 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
## React Forms

Forms are an essential part of many applications, allowing users to input data. In React, forms are handled similarly to regular HTML forms, but with some key differences to integrate with the component state and reactivity.

### Basic Form Handling in React

To handle a form in React, you'll need to manage form inputs using state, usually with the `useState` hook. This allows you to capture input values and update them as the user interacts with the form.

---

### Controlled Components

In React, **controlled components** are form elements that are bound to state. This means that the form element's value is controlled by React's state, and the state changes as the form is filled out.

#### Example:

```jsx
import React, { useState } from 'react';

function FormExample() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);  // Update the state as the input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={inputValue}  // The input's value is controlled by state
          onChange={handleInputChange}  // Update state on input change
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
```
## useEffect

The `useEffect` hook allows you to perform **side effects** in your function components. Side effects can include things like fetching data, setting up subscriptions, manually changing the DOM, or running animations. Before `useEffect`, these operations could only be performed in class components through lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

`useEffect` is one of the most powerful and commonly used hooks in React.

---

### Syntax

```jsx
useEffect(() => {
  // Your side effect code goes here
}, [dependencies]);
```

## useContext

The `useContext` hook is a simple and efficient way to access **context** values in a function component. Context provides a way to share values between components without having to explicitly pass props down through every level of the component tree.

The `useContext` hook allows you to subscribe to React context, which is useful for managing global state or passing data through the component tree without using prop drilling.

---

### Creating a Context

Before using `useContext`, you need to create a context using `React.createContext()`. This will allow you to set a default value and later provide and consume that context in your components.

#### Example:

```jsx
import React, { createContext, useContext } from 'react';

// Create a context with a default value
const ThemeContext = createContext('light');

function ThemeDisplay() {
  const theme = useContext(ThemeContext);  // Access the context value
  return <div>The current theme is {theme}</div>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">  {/* Provide a value to the context */}
      <ThemeDisplay />
    </ThemeContext.Provider>
  );
}

export default App;

```
## useRef

The `useRef` hook is a part of React's hooks API and is used to persist values across renders without causing a re-render. It can be used to reference DOM elements, store mutable values, and hold references to previous states or props in a component.

---

### Basic Usage of `useRef`

`useRef` returns an object with a `current` property. This `current` property can be used to store a reference to a DOM element or a mutable value that persists between renders.

#### Example: Referencing a DOM Element

In React, you often need to interact with a DOM element directly. `useRef` helps you to get access to the DOM node for tasks like focusing an input field, measuring an element's size, or other imperative tasks.

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();  // Focus the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default FocusInput;
```
## Controlled vs Uncontrolled Components in React

| Feature                           | **Controlled Components**                         | **Uncontrolled Components**                      |
|-----------------------------------|--------------------------------------------------|-------------------------------------------------|
| **State Management**              | Form input value is managed by React state       | Form input value is managed by the DOM itself   |
| **Accessing Input Value**         | The value is accessed from the state (`value` prop) | The value is accessed via refs (`current.value`) |
| **Re-renders**                    | Every change in input triggers a re-render       | Changes do not trigger re-renders               |
| **Example Usage**                 | Used when you need to synchronize input value with state | Used when you don't need to control the input value |
| **Common Use Cases**              | Forms that require validation, conditionally enabled fields, etc. | Simple forms where you don't need to track the input value in state |
| **Syntax for Input Element**      | `<input type="text" value={inputValue} onChange={handleChange} />` | `<input type="text" ref={inputRef} />`          |
| **When to Use**                   | When you need full control over form data or need to apply validation or transformations | When you need less control and want to reduce component complexity |
| **Handling Data**                 | Data is updated with the `setState` function and re-renders the component | Data is directly manipulated via refs without triggering re-renders |
| **Use of `useRef`**               | Not typically used for form elements             | Frequently used to access and manipulate form values without causing re-renders |

---

### Example of Controlled Component

```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);  // Updates state with the input value
  };

  return (
    <form>
      <input
        type="text"
        value={name}  // Controlled by React state
        onChange={handleChange}  // Updates state on change
      />
    </form>
  );
}
```
## Example of Uncontrolled Component

An uncontrolled component in React is one where form data is handled by the DOM rather than React state. We use `ref` to get the values of the inputs directly from the DOM.

### Code Example

```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  // Create a ref to access the input DOM node
  const nameRef = useRef();

  // Handle form submission and access the input value via the ref
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${nameRef.current.value}`);  // Accessing value directly from the DOM
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          ref={nameRef}  // Attach the ref to the input element
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
