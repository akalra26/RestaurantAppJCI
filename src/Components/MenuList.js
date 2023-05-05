import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MenuList.css';
import CategoryItems from './CategoryList';
import AddMenu from './AddMenu';  
/*eslint no-restricted-globals: ["error", "history"]*/


function MenuItems() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);


  useEffect(() => {
    axios.get("https://localhost:7237/api/MenuTables")
      .then(response => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function handleEdit(event, item) {
    console.log(`Editing item ${item.menuId}`);
    event.preventDefault();
    setSelectedItem(item.menuId);
    setShowEditForm(true);

    // Implement edit logic here
  }

  function handleDelete(item) {
    // event.preventDefault();
    const confirmDelete = window.confirm(`Are you sure you want to delete ${item.menuName}?`);
  if (confirmDelete) {
    axios.delete(`https://localhost:7237/api/MenuTables/${item.menuId}`)
      .then(() => {
        console.log(`Deleted item ${item.menuId}`);
        setItems(prevItems => prevItems.filter(prevItem => prevItem.menuId !== item.menuId));
      })
      .catch(error => {
        console.error(`Error deleting item ${item.menuId}:`, error);
      });
  }

    console.log(`Deleting item ${item.menuId}`);
    // Implement delete logic here
  }

  function handleClick(item) {
    setSelectedItem(item.menuId);
    console.log(`Clicked item ${item.menuId}`);
    // Implement click logic here
  }

  return (
<div className='MenuList'>
{selectedItem ? (
        <CategoryItems menuId ={selectedItem} />
      ) : (
   <center> <table>
    <thead>
      <tr>
        <th>Menu ID</th>
        <th>Menu Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.menuId} >
          <td>{item.menuId}</td>
          <td><a href="#" className = "MenuListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.menuName}</a></td>
          <td><a href="#" className = "MenuListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.menuDescription}</a></td>
          <td><img src = {item.menuImage} alt = {item.menuName} /></td>
          <td><button onClick={() => handleEdit(event, item)}>Edit</button></td>
          <td><button onClick={e => {e.preventDefault(); handleDelete(item);}}>Delete</button></td>
          {/* <td><button onClick={(event) => handleDelete(item, event)}>Delete</button></td> */}
        </tr>
      ))}
    </tbody>
  </table>
  </center>
      )}
  </div>
);

  
}

export default MenuItems;
