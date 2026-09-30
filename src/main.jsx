
import { createRoot } from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className='parent h-full'>
    <App/>
  </div>
)
