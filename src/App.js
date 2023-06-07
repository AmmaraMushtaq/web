import logo from './logo.svg';
import './App.css';
import Layout from './components/home/Layout'
import Main from './components/main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Service from './components/main/Service';

function App() {
  return (
    <BrowserRouter>

        <Routes>
        
        <Route path="/" element={<Layout> <Main/>   </Layout>}/>
     
     
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
