
import { createRoot } from 'react-dom/client' 
import { LanguageProvider } from './contexts/LangaugeProvider'; 

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
      <LanguageProvider>  
        <App />
    </LanguageProvider>, 
)
