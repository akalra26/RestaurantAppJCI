import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoryList.css';

function CategoryItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7237/api/CategoryTables")
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
<div className='CategoryList'>
   <center> <table>
    <thead>
      <tr>
        <th>Category ID</th>
        <th>Category Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.categoryId} onClick={() => handleClick(item)}>
          <td>{item.categoryId}</td>
          <td>{item.categoryName}</td>
          <td>{item.categoryDescription}</td>
          <td><img src = {item.categoryImage} alt = {item.categoryName} /></td>
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

export default CategoryItems;
