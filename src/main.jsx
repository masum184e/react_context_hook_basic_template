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