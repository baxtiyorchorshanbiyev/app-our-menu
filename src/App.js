import Menu from "./components/Menu";
import Categorias from "./components/Categorias";
import React, {useState} from "react";
import items from './data';
import 'bootstrap/dist/css/bootstrap.css';
import './sass/style.scss';

const allCategory = ['all', ...new Set(items.map((item) => item.category))];
function App() {
  
  const [menuItems, setMenuItems] = useState(items);
  const [categorias, setCategorias] = useState(allCategory);
  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) =>item.category === category);
    setMenuItems(newItems)
  };  
  return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="w-100 title d-flex flex-column justify-content-center">
              <h3 className="text-center">Our Menu</h3>
              <div className="underline ml-auto mr-auto text-center"></div>
              </div>
            </div>
          </div>
          <Categorias categorias ={categorias} filterItems = {filterItems } />
          <Menu items = {menuItems} />
        </div>
      </main>
  );
}

export default App;
