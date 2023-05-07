import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DishList.css';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function DishItems() {
    const [items, setItems] = useState([]);
    const categoryId = useLocation();
    const navigate = useNavigate();
    const [deletedItemId, setDeletedItemId] = useState(null);
  
    useEffect(() => {
      axios.get(`https://localhost:7237/api/DishTables/categoryId=${categoryId.state.categoryId}`)
        .then(response => {
          setItems(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [deletedItemId]);
  
    function handleEdit(event, item) {
      console.log(`Editing item ${item.menuId}`);
      navigate('/edit-dish', {state: {dishId: item.dishId, categoryId: categoryId.state.categoryId}});
      // Implement edit logic here
    }
  
    function handleDelete(item) {
      const confirmDelete = window.confirm(`Are you sure you want to delete ${item.dishName}?`);
  if (confirmDelete) {
    axios.delete(`https://localhost:7237/api/DishTables/${item.dishId}`)
      .then(() => {
        console.log(`Deleted item ${item.dishId}`);
        setDeletedItemId(item.dishId);
        //setItems(prevItems => prevItems.filter(prevItem => prevItem.categoryId !== item.categoryId));
      })
      .catch(error => {
        console.error(`Error deleting item ${item.dishId}:`, error);
      });
  }
    console.log(`Deleting item ${item.dishId}`);
    // Implement delete logic here
    }
  
    function handleClick(item) {
    //   setSelectedItem(true);
      console.log(`Clicked item ${item.id}`);
      // Implement click logic here
    }

    function handleAdd(){
      navigate("/add-dish",  {state: {categoryid: categoryId.state.categoryId}});
      console.log("Adding dish");
    }

    return (
      <div className='MenuList'> 
      <div className="row">
        {items.map(item => (
          <div key={item.dishId} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={item.dishImage} alt={item.dishName} />
              <Card.Body>
                <Card.Title className='title'  onClick={() => handleClick(item)}>{item.dishName}</Card.Title>
                <Card.Text>{item.dishDescription}</Card.Text>
                <Button style={{margin: "10px"}} variant="primary" onClick={(event) => handleEdit(event, item)}>Edit</Button>
                <Button style={{margin: "10px"}} variant="danger" onClick={e => {e.preventDefault(); handleDelete(item);}}>Delete</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        <div className='col-md-4 mb-4'>
        <Card>
        <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQ8Te5K2tD29NIgMhTb9FOz4eMHfkdAr0A&usqp=CAU"} alt={"Add Category"} />
        <Card.Body>
        <Card.Title className='title'   onClick={e => {e.preventDefault(); handleAdd();}}>{"Add Category"}</Card.Title>
        <Card.Text>{"Add a new category item"}</Card.Text>
        <Button style={{margin: "10px"}} variant="primary" onClick={e => {e.preventDefault(); handleAdd();}}>Add Dish</Button>
        </Card.Body>
        </Card>
        </div>
      </div>
      </div>

  //       <div className='MenuList'>
  //          <center> <table>
  //           <thead>
  //             <tr>
  //               <th>Dish ID</th>
  //               <th>Dish Name</th>
  //               <th>Description</th>
  //               <th>Dish Price</th>
  //               <th>Image</th>
  //               <th>Nature</th>
  //               <th>Edit</th>
  //               <th>Delete</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //           {items.map(item => (
  //       <tr key={item.dishId} onClick={() => handleClick(item)}>
  //         <td>{item.dishId}</td>
  //         <td>{item.dishName}</td>
  //         <td>{item.dishDescription}</td>
  //         <td>{item.dishPrice}</td>
  //         <td><img src = {item.dishImage} alt = {item.dishImage} /></td>
  //         <td>{item.nature}</td>
  //         <td><button onClick={() => handleEdit(item)}>Edit</button></td>
  //         <td><button onClick={() => handleDelete(item)}>Delete</button></td>
  //       </tr>
  //     ))}
  //   </tbody>
  // </table>
  // </center>
  // </div>
);

  
}

export default DishItems;