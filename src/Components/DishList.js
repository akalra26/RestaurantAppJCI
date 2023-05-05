import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DishList.css';


function DishItems({categoryId}) {
    const [items, setItems] = useState([]);
    
  
    useEffect(() => {
      axios.get(`https://localhost:7237/api/DishTables/categoryId=${categoryId}`)
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
    //   setSelectedItem(true);
      console.log(`Clicked item ${item.id}`);
      // Implement click logic here
    }

    return (
        <div className='MenuList'>
           <center> <table>
            <thead>
              <tr>
                <th>Dish ID</th>
                <th>Dish Name</th>
                <th>Description</th>
                <th>Dish Price</th>
                <th>Image</th>
                <th>Nature</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {items.map(item => (
        <tr key={item.dishId} onClick={() => handleClick(item)}>
          <td>{item.dishId}</td>
          <td>{item.dishName}</td>
          <td>{item.dishDescription}</td>
          <td>{item.dishPrice}</td>
          <td><img src = {item.dishImage} alt = {item.dishImage} /></td>
          <td>{item.nature}</td>
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

export default DishItems;