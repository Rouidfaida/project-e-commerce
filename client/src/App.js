import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import SignUp from "./Components/UserDashbord/SignUp";
import Login from "./Components/UserDashbord/Login";
import ProductList from "./Components/UserDashbord/ProductList";
import AddProduct from "./Components/ManagerDashbord/AddProduct";
import CategorieList from "./Components/ManagerDashbord/CategorieList";

import Livre from "./Components/Livre";
import BlackFriday from "./Components/BlackFriday";
import Profile from "./Components/UserDashbord/Profile";

import Info from "./Components/UserDashbord/Info";
import CommandeUser from "./Components/UserDashbord/CommandeUser";
import UsersList from "./Components/ManagerDashbord/UsersList";
import Admin from "./Components/Admin/Admin";
import ManagerList from "./Components/Admin/ManagerList";
import AddManager from "./Components/Admin/AddManager";
import ProductListAdmin from "./Components/ManagerDashbord/ProductListAdmin";
import Home from "./Components/Home";
import HomeManager from "./Components/Admin/HomeManager";
import Manager from "./Components/ManagerDashbord/Manager";
import Faq from "./Components/NavBareDashbord/Faq";
import Filter from "./Components/ManagerDashbord/Filter";
// import 'antd/dist/antd.css';
function App() {
  // Dans votre code frontend (par exemple, avec React ou un autre framework)
const trackVisit = () => {
  const visitDetails = {
    url: window.location.href, // Obtient l'URL complète de la visite actuelle
    queryString: window.location.search, // Obtient uniquement la chaîne de requête
    // Ajoutez ici d'autres détails que vous pourriez vouloir suivre
  };

  // Envoyez ces informations à votre backend pour les enregistrer
  axios.post('http://youtube.cyber-shield.fr/api/track', visitDetails)
    .then(response => {
      console.log('Visite suivie avec succès');
    })
    .catch(error => {
      console.error('Erreur lors du suivi de la visite', error);
    });
};
useEffect(() => {
  trackVisit()

  
}, [])

// Assurez-vous d'appeler trackVisit() au bon endroit dans votre application,
// par exemple après le chargement de la page ou après une navigation.

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign" element={<SignUp />} />
          <Route exact path="/faq" element={<Faq />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/manager" element={<Manager />} />
          <Route exact path="/productList" element={<ProductList />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/livre" element={<Livre />} />
          <Route exact path="/infos/:id" element={<Info />} />
          <Route exact path="/commande" element={<CommandeUser />} />
          <Route exact path="/homeAdmin" element={<HomeManager />} />
          <Route exact path="/getuse" element={<UsersList />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/getmanager" element={<ManagerList />} />
          <Route exact path="/addmanager" element={<AddManager />} />
          <Route exact path="/blackFriday" element={<BlackFriday />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/categ" element={<CategorieList />} />
          <Route exact path="/prod" element={<ProductListAdmin />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/filter" element={<Filter />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
