import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoryList.css';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


function CategoryItems() {
  const menuId = useLocation();
  const navigate = useNavigate();
  // const menuId = location.state?.menuId;
  const [items, setItems] = useState([]);
  const [deletedItemId, setDeletedItemId] = useState(null);
  // const [selectedItem, setSelectedItem] = useState(null);
  

  useEffect(() => {
    axios.get(`https://localhost:7237/api/CategoryTables/menuId=${menuId.state.menuId}`)
      .then(response => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [deletedItemId]);


  function handleEdit(event, item) {
    console.log(`Editing item ${item.categoryId}`);
    navigate('/edit-category', {state: {categoryId: item.categoryId, menuId: menuId.state.menuId}});
    // Implement edit logic here
  }

  function handleDelete(item) {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${item.categoryName}?`);
  if (confirmDelete) {
    axios.delete(`https://localhost:7237/api/CategoryTables/${item.categoryId}`)
      .then(() => {
        console.log(`Deleted item ${item.categoryId}`);
        setDeletedItemId(item.categoryId);
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
    navigate(`/dish-list`, {state: {categoryId: item.categoryId}});
    // setSelectedItem(item.categoryId);
    console.log(`Clicked item ${item.categoryId}`);
    // Implement click logic here
  }

  function handleAdd(){
    navigate("/add-category",  {state: {menuid: menuId.state.menuId}});
    console.log("Adding Category");
  }

  return (
    <div className='CategoryList'>
      <div className="row">
        {items.map(item => (
          <div key={item.categoryId} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={item.categoryImage} alt={item.categoryName} />
              <Card.Body>
                <Card.Title className='title'  onClick={() => handleClick(item)}>{item.categoryName}</Card.Title>
                <Card.Text>{item.categoryDescription}</Card.Text>
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
        <Button style={{margin: "10px"}} variant="primary" onClick={e => {e.preventDefault(); handleAdd();}}>Add Category</Button>
        </Card.Body>
        </Card>
        </div>
      </div>
    </div>




// {/* <div className='CategoryList'>
// {selectedItem ? (
//         <DishItems categoryId={selectedItem} />
//       ) : (
//    <center> <table>
//     <thead>
//       <tr>
//         <th>Category ID</th>
//         <th>Category Name</th>
//         <th>Description</th>
//         <th>Image</th>
//         <th>Edit</th>
//         <th>Delete</th>
//       </tr>
//     </thead>
//     <tbody>
//       {items.map(item => (
//         <tr key={item.categoryId} onClick={() => handleClick(item)}>
//           <td>{item.categoryId}</td>
//           <td><a href="#" className = "CategoryListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.categoryName}</a></td>
//           <td><a href="#" className = "CategoryListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.categoryDescription}</a></td>
//           <td><img src = {item.categoryImage} alt = {item.categoryName} /></td>
//           <td><button onClick={() => handleEdit(item)}>Edit</button></td>
//           <td><button onClick={() => handleDelete(item)}>Delete</button></td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//   </center>
//   )}
//   </div> */}
);

  
}

export default CategoryItems;
