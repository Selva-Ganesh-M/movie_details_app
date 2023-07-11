import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './redux/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Provider store={store}>
        <Route path="/*" element={<App />} />
      </Provider>
    </Routes>
  </Router>
)
