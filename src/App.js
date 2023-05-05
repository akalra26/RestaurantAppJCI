import logo from './logo.svg';
import './App.css';
import MenuItems from './Components/MenuList';
import Navbar from './Components/Navbar';
import CategoryItems from './Components/CategoryList';
import DishItems from './Components/DishList';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AddMenu from './Components/AddMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Navbar className = "Navbar" />
      <h1>Welcome to my Restaurant App</h1>
      <p>Love Food, Live Food</p>
      <Router>
        <Routes>
          <Route path = "/" element = {<AddMenu/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
