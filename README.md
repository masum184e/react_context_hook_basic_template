## React Context Hook Basic Template

<p textAlign="justify">Context provides a way to pass data through the component tree without having to pass props down manually at every level. </p>

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

<p> We bassically need 5 different component:</p>

2. **wrapper:**

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
