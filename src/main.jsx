import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';   
import './index.css';
import App from './App.jsx';
import ScrollToTop from "./components/ScrollToTop"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>          
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </StrictMode>,

  console.log(`
 $$$$$$\   $$$$$$\  $$\   $$\ 
$$  __$$\ $$  __$$\ $$ | $$  |
$$ /  $$ |$$ /  $$ |$$ |$$  / 
\$$$$$$$ |\$$$$$$$ |$$$$$  /  
 \____$$ | \____$$ |$$  $$<   
$$\   $$ |$$\   $$ |$$ |\$$\  
\$$$$$$  |\$$$$$$  |$$ | \$$\ 
 \______/  \______/ \__|  \__|
                              
                              
                              

💻 Designed & Built by Rooney Kassim
🌐 mail: kassimrooneyinc@gmail.com
`)
);
