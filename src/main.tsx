import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './redux/store.ts'
import { Provider } from 'react-redux'
import SrcContextProvider from './context.ts/srcContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <SrcContextProvider>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </SrcContextProvider>
)
