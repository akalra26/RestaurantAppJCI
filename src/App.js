import logo from './logo.svg';
import './App.css';
import MenuItems from './Components/MenuList';
import Navbar from './Components/Navbar';
import CategoryItems from './Components/CategoryList';
import DishItems from './Components/DishList';
import{BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom"
import EditMenu from './Components/EditMenu';
import Home from './Components/Home';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMenu from './Components/AddMenu';
import AddCategory from './Components/AddCategory';
import EditCategory from './Components/EditCategory';
import EditDish from './Components/EditDish';
import AddDish from './Components/AddDish';
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
     <Navbar className = "Navbar" />
     <header><h1>Welcome to my King's Punjabi</h1></header>
      <p>Love Food, Live Food</p>
      <Router>
        <Routes>
          <Route path = "/menu-list" element = {<MenuItems />} />
          <Route path = "/add-menu" element = {<AddMenu />} />
          <Route path = "/add-category" element = {<AddCategory />} />
          <Route path = "/edit-menu" element = {<EditMenu/>} />
          <Route path = "/" element = {<Home/>} />
          <Route path = "/about" element = {<About/>} />
          <Route path = "/contactus" element = {<Contactus/>} />
          <Route path = "/category-list" element = {<CategoryItems/>} />
          <Route path = "/dish-list" element = {<DishItems/>} />
          <Route path = "/edit-category" element = {<EditCategory/>} />
          <Route path = "/edit-dish" element = {<EditDish/>} />
          <Route path = "/add-dish" element = {<AddDish/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
