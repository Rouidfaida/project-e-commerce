import './App.css';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Navbare from './Components/Navbare';
import ProductList from './Components/ProductList';
import Livre from './Components/Livre';

import AddProduct from './Components/AddProduct';
import Info from './Components/Info';
import CommandeUser from './Components/CommandeUser';
import HomeAdmin from './Components/HomeAdmin';
import UsersList from './Components/UsersList';
import Manager from './Components/Manager';
import Admin from './Components/Admin';
import ManagerList from './Components/ManagerList';
import AddManager from './Components/AddManager';
import BlackFriday from './Components/BlackFriday';
import Profile from './Components/Profile';
import CategorieList from './Components/CategorieList';
import ProductListAdmin from './Components/ProductListAdmin';
import About from './Components/About';
import Contact from './Components/Contact';
// import 'antd/dist/antd.css';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route exact path='/'element={<Home/>} />
        <Route exact path='/sign'element={<SignUp/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/manager' element={<Manager/>}/>
        <Route exact path='/productList' element={<ProductList/>}/>
        <Route exact path='/addproduct' element={<AddProduct/>}/>
        <Route exact path='/livre' element={<Livre/>}/>
        <Route exact path="/infos/:id" element={<Info/>}/>
        <Route exact path='/commande' element={<CommandeUser/>}/>
        <Route exact path='/homeAdmin' element={<HomeAdmin/>}/>
        <Route exact path='/getuse' element={<UsersList/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
        <Route exact path='/getmanager' element={<ManagerList/>}/>
        <Route exact path='/addmanager' element={<AddManager/>}/>
        <Route exact path='/blackFriday' element={<BlackFriday/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/categ' element={<CategorieList/>}/>
        <Route exact path='/prod' element={<ProductListAdmin/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
