import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserContextHook from './components/hooks/UseContextHook.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <UserContextHook>
    <App />
    </UserContextHook>

)
