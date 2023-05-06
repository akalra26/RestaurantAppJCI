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

function App() {
  return (
    <div className="App">
     <Navbar className = "Navbar" />
      <h1>Welcome to my Restaurant App</h1>
      <p>Love Food, Live Food</p>
      <Router>
        <Routes>
          <Route path = "/" element = {<MenuItems />} />
          <Route path = "/edit-menu" element = {<EditMenu/>} />
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/category-list" element = {<CategoryItems/>} />
          <Route path = "/dish-list" element = {<DishItems/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
