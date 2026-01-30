
import { createRoot } from 'react-dom/client' 
import { LanguageProvider } from './contexts/LangaugeProvider'; 
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './app/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
    
createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <LanguageProvider>  
        <App />
    </LanguageProvider>
    </Provider>
)
