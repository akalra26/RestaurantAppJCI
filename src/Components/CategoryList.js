import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoryList.css';
import DishItems from './DishList';


function CategoryItems({menuId}) {

  // const menuId = location.state?.menuId;
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  

  useEffect(() => {
    axios.get(`https://localhost:7237/api/CategoryTables/menuId=${menuId}`)
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
    const confirmDelete = window.confirm(`Are you sure you want to delete ${item.categoryName}?`);
  if (confirmDelete) {
    axios.delete(`https://localhost:7237/api/CategoryTables/${item.categoryId}`)
      .then(() => {
        console.log(`Deleted item ${item.categoryId}`);
        //setItems(prevItems => prevItems.filter(prevItem => prevItem.categoryId !== item.categoryId));
      })
      .catch(error => {
        console.error(`Error deleting item ${item.categoryId}:`, error);
      });
  }
    console.log(`Deleting item ${item.categoryId}`);
    // Implement delete logic here
  }

  function handleClick(item) {
    setSelectedItem(item.categoryId);
    console.log(`Clicked item ${item.categoryId}`);
    // Implement click logic here
  }

  return (
<div className='CategoryList'>
{selectedItem ? (
        <DishItems categoryId={selectedItem} />
      ) : (
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
          <td><a href="#" className = "CategoryListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.categoryName}</a></td>
          <td><a href="#" className = "CategoryListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.categoryDescription}</a></td>
          <td><img src = {item.categoryImage} alt = {item.categoryName} /></td>
          <td><button onClick={() => handleEdit(item)}>Edit</button></td>
          <td><button onClick={() => handleDelete(item)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
  </center>
  )}
  </div>
);

  
}

export default CategoryItems;
