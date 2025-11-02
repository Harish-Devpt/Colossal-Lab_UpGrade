import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Loading from './Components/common/Loading.jsx'
import NavContext from './Context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Loading>
    <NavContext>
       <App />
    </NavContext>
   </Loading>
   </BrowserRouter>
  </StrictMode>,
)
