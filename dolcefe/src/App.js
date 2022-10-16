import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddDolce from './dolci/AddDolce';
import EditDolce from './dolci/EditDolce';
import ViewDolce from './dolci/ViewDolce';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/adddolce" element={<AddDolce/>}/>
          <Route exact path="/editdolce/:id" element={<EditDolce/>}/>
          <Route exact path="/viewdolce/:id" element={<ViewDolce/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
