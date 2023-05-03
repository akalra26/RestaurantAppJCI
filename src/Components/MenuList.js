import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MenuList.css';

function MenuItems() {
  const [items, setItems] = useState([]);

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

  function handleEdit(item) {
    console.log(`Editing item ${item.menuId}`);
    // Implement edit logic here
  }

  function handleDelete(item) {
    console.log(`Deleting item ${item.id}`);
    // Implement delete logic here
  }

  function handleClick(item) {
    console.log(`Clicked item ${item.id}`);
    // Implement click logic here
  }

  return (
<div className='MenuList'>
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
        <tr key={item.menuId} onClick={() => handleClick(item)}>
          <td>{item.menuId}</td>
          <td>{item.menuName}</td>
          <td>{item.menuDescription}</td>
          <td><img src = {item.menuImage} alt = {item.menuName} /></td>
          <td><button onClick={() => handleEdit(item)}>Edit</button></td>
          <td><button onClick={() => handleDelete(item)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
  </center>
  </div>
);

  
}

export default MenuItems;
