
import { createRoot } from 'react-dom/client' 
import { LanguageProvider } from './contexts/LangaugeProvider'; 
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './app/store';
 
    
createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <LanguageProvider>  
        <App />
    </LanguageProvider>
    </Provider>
)
