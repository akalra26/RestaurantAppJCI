import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MenuList.css';
import CategoryItems from './CategoryList';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


function MenuItems() {
  const [items, setItems] = useState([]);
  const [deletedItemId, setDeletedItemId] = useState(null);

  // const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get("https://localhost:7237/api/MenuTables")
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
    navigate('/edit-menu', {state: {menuId: item.menuId}});
  }

  function handleDelete(item) {
    // event.preventDefault();
    const confirmDelete = window.confirm(`Are you sure you want to delete ${item.menuName}?`);
  if (confirmDelete) {
    axios.delete(`https://localhost:7237/api/MenuTables/${item.menuId}`)
      .then(() => {
        console.log(`Deleted item ${item.menuId}`);
        setDeletedItemId(item.menuId);
        // setItems(prevItems => prevItems.filter(prevItem => prevItem.menuId !== item.menuId));
      })
      .catch(error => {
        console.error(`Error deleting item ${item.menuId}:`, error);
      });
  }

    console.log(`Deleting item ${item.menuId}`);
    // Implement delete logic here
  }

  function handleClick(item) {
    // setSelectedItem(item.menuId);
    // <Link to = {{
    //   pathname: "/category-list",
    //   state: item.menuId
    // }}></Link>
    navigate(`/category-list`, {state: {menuId: item.menuId}});
    console.log(`Clicked item ${item.menuId}`);
    // Implement click logic here
  }

  function handleAdd(){
    navigate("/add-menu");
    console.log("Adding Menu");
  }

  return (


    <div className="MenuList">
    {/* {selectedItem ? (
      <CategoryItems item={selectedItem} />
    ) : ( */}
      <div className="row">
      {/* <Card> */}
        {items.map(item => (
          <div key={item.menuId} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={item.menuImage} alt={item.menuName} />
              <Card.Body>
                <Card.Title className='title'  onClick={() => handleClick(item)}>{item.menuName}</Card.Title>
                <Card.Text>{item.menuDescription}</Card.Text>
                <Button style={{margin: "10px"}} variant="primary" onClick={(event) => handleEdit(event, item)}>Edit</Button>
                <Button style={{margin: "10px"}} variant="danger" onClick={e => {e.preventDefault(); handleDelete(item);}}>Delete</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        <div className='col-md-4 mb-4'>
        <Card>
        <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQ8Te5K2tD29NIgMhTb9FOz4eMHfkdAr0A&usqp=CAU"} alt={"Add Menu"} />
        <Card.Body>
        <Card.Title className='title'   onClick={e => {e.preventDefault(); handleAdd();}}>{"Add Menu"}</Card.Title>
        <Card.Text>{"Add a new menu item"}</Card.Text>
        <Button style={{margin: "10px"}} variant="primary" onClick={e => {e.preventDefault(); handleAdd();}}>Add Menu</Button>
        </Card.Body>
        </Card>
        </div>
      </div>
  </div>
// {/* <div className='MenuList'>
// {/* {editMode ? (
//         <AddMenu selectedItem={selectedItem} setEditMode={setEditMode} />
//       ) : selectedItem ? (
//         <CategoryItems menuId={selectedItem} />
//       ) : ( */
//       selectedItem ? (
//         <CategoryItems menuId={selectedItem} />
//       ) : (
//    <center> <table>
//     <thead>
//       <tr>
//         <th>Menu ID</th>
//         <th>Menu Name</th>
//         <th>Description</th>
//         <th>Image</th>
//         <th>Edit</th>
//         <th>Delete</th>
//       </tr>
//     </thead>
//     <tbody>
//       {items.map(item => (
//         <tr key={item.menuId} >
//           <td>{item.menuId}</td>
//           <td><a href="#" className = "MenuListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.menuName}</a></td>
//           <td><a href="#" className = "MenuListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.menuDescription}</a></td>
//           <td><img src = {item.menuImage} alt = {item.menuName} /></td>
//           <td><button onClick={(event) => handleEdit(event, item)}>Edit</button></td>
//           <td><button onClick={e => {e.preventDefault(); handleDelete(item);}}>Delete</button></td>
//           {/* <td><button onClick={(event) => handleDelete(item, event)}>Delete</button></td> */}
//         </tr>
//       ))}
//     </tbody>
//   </table>
//   </center>
//       )}
//   </div> */}
);

  
}

export default MenuItems;
