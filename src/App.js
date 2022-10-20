
import './App.css';
import Moon_main from './Components/Moon_main/Moon_main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Moon_footer from './Components/Moon_footer/Moon_footer';
import Token_page from './Components/Token_page/Token_page';




function App() {
  return (
    <div className="App">
    
   
      <Router>
        <Routes>
        <Route exact  path="/" element={<Moon_main />} />
        <Route exact  path="/token" element={<Token_page />} />
        </Routes>
        <Moon_footer/>
        
        </Router>
    
    
 
    </div>
  );
}

export default App;
