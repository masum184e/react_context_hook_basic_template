## React Context Hook Basic Template

<p textAlign="justify">Context hook provides a way to pass data through the component tree without having to pass props down manually at every level. </p>

## Preview
<img src="https://github.com/masum184e/react_context_hook_basic_template/blob/main/preview.png" >
<a href="https://react-context-hook-basic-template.vercel.app//"><b>Live View</b></a>

## Requirements

[Install Node On Your Device](https://nodejs.org/)

## How to Run

```
git clone https://github.com/masum184e/react_context_hook_basic_template.git
cd react_context_hook_basic_template
npm install
npm run dev
```

## Explaination

<p> We bassically need 3 different component:</p>

1. **wrapper:**

    It allows you to integrate the context provider     `Provider` into your application more seamlessly. Instead of directly importing and using `Provider` everywhere in your app, you can simply wrap your entire application or a specific subtree with `Provider`, which internally handles the context provider setup. This helps keep your code organized and reduces redundancy.

   ```jsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import Provider from '../provider/Provider.jsx'

    ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>,
    )

2. **provider:**

    The provider component in React is a way to pass data down through the component tree. It allows components to access this data using the context API, regardless of how deep they are nested in the component hierarchy. It essentially creates a scope where the provided data (in this case, `count` and `setCount`) is available to all descendant components. This avoids the need to pass props down manually through each level of the component tree, making your code cleaner and more maintainable.

   ```jsx
    import { createContext, useState } from "react";

    export const ImplementContext = createContext(null)

    const Provider = ({ children }) => {
        const [count, setCount] = useState(0);
        const [name, setName] = useState("");

        const contextValue = {
            count,
            setCount,
            name,
            setName
        }

        return (
            <ImplementContext.Provider value={contextValue}>{children}</ImplementContext.Provider>
        )
    }

    export default Provider

3. **consumer:**

    Consumer component demonstrates how to consume the context created by `Provider` using the custom hook `useMyContext`.  You can easily access the context state and update functions provided by `Provider`. This separation of concerns allows you to keep your components clean and focused, while still having access to shared state managed by the context provider.

    ```jsx
    import { useContext } from "react"
    import { ImplementContext } from "../provider/Provider"

    const Child = () => {
    const { setCount, setName } = useContext(ImplementContext)
    return (
        <>
        <div>
            <h5>I&apos;m from Child</h5>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
            <button
            aria-label="Increment value"
            onClick={() => setCount(prev => prev = prev + 1)}
            >
            Increment
            </button>
            <button
            aria-label="Decrement value"
            onClick={() => setCount(prev => prev = prev - 1)}
            >
            Decrement
            </button>
        </div>
        <div style={{ marginTop: "5px" }}>
            <input type="text" name="" id="" onChange={(event) => setName(event.target.value)} />
        </div>
        </>
    )
    }

    export default Child
    ```
    
    ```jsx
    import { useContext } from "react"
    import SuperParent from "./SuperParent"
    import { ImplementContext } from "../provider/Provider"

    const App = () => {
    const { count, name } = useContext(ImplementContext)
    return (
        <>
        <h1 style={{ textAlign: "center" }}>Hello React Context</h1>
        <h2>I&apos;m from App, my name {name} & value {count}</h2>
        <SuperParent />
        </>
    )
    }

    export default App

## Features
__Update Counter:__ It allows the user to increase/decrease the counter value by 1 as well as increase the counter value by a specific amount. It is typically used to track and display incremental changes.

__Decrement Counter:__ It lets the user update the name value to a new string. It's useful for scenarios where dynamic updates to a displayed name are required.

## Structure
```
├─ public
│  └─ images                  - store images
│
├─ provider
│  └─ Provider.jsx            - sets up a React context using the Context API, providing a way to manage and share state 
│
├─ src
│  ├─ App.jsx                 - main application component that typically includes routing and other high-level logic and display state value
│  ├─ Child.jsx               - component that where state will change
│  ├─ Parent.jsx              - component that help to increase tree size
│  ├─ SuperParent.jsx         - component that help to increase tree size
│  └─ main.jsx                - entry point file where the React application is rendered and the Redux provider is set up.
│
├─ .eslintrc.cjs              - configuration for eslint
├─ .gitignore                 - store details about ingnored file by git
├─ README.md                  - serve a details documentation
├─ index.html                 - main HTML file for the application. It typically includes a <div id="root"></div> where your React app will be mounted. Vite injects the necessary scripts into this file.
├─ package-lock.json          - contains metadata about dependencies, scripts, and other configurations
├─ package.json               - contains metadata about dependencies, scripts, and other configurations.
├─ preview.png                - preview image
├─ vercel.json                - configuration for vercel
└─ vite.config.js             - configuration for vite
```