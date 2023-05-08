import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useLocation } from 'react-router-dom';


import { Card, Button } from 'react-bootstrap';



import { useNavigate } from 'react-router-dom';




function DishByName() {

    const [items, setItems] = useState([]);

    const location = useLocation();

    const dishName = location.state.dishName;



    //const [selectedItem, setSelectedItem] = useState(null);







    useEffect(() => {

        axios.get("https://localhost:7237/api/DishTables")

            .then(response => {

                setItems(response.data);

                console.log(response.data);

            })

            .catch(error => {

                console.log(error);

            });

    }, []);




    const dish = items.find(item => item.dishName === dishName);






    //   function handleEdit(item) {

    //     console.log(`Editing item Dishes ${item.dishId}`);

    // navigate('/EditDish', {state: {dishId: item.dishId, catId: catId.state.catId}});




    //     // Implement edit logic here

    //   }





    //   function handleDelete(item) {

    //     const confirmDelete = window.confirm(`Are you sure you want to delete ${item.menuName}?`);

    //   if (confirmDelete) {

    //     axios.delete(`https://localhost:7205/api/Dishes${item.catId}`)

    //       .then(() => {

    //         console.log(`Deleted item ${item.dishId}`);

    //         setDeletedItemId(item.dishId);




    // //         setItems(prevItems => prevItems.filter(prevItem => prevItem.catId !== item.catId));

    //       })

    //       .catch(error => {

    //         console.error(`Error deleting item ${item.dishId}:`, error);




    //       });




    //   }

    //     console.log(`Deleting item ${item.id}`);

    //     // Implement delete logic here

    //   }



    // function handleAdd(){

    //     navigate("/AddDish",  {state: {catid: catId.state.catId}});

    //     console.log("Adding dish");

    //   }






    return (

        <div className='MenuList'>

            <div className="row">

                <center> <h1 > Welcome to DishList</h1></center>



                <div className="col-md-4 mb-4">

                    {

                        dish != null ?

                            <Card>

                                <Card.Img variant="top" src={dish.dishImage} alt={dish.dishName} />

                                <Card.Body>

                                    <Card.Title className='title'  >{dish.dishName}</Card.Title>

                                    <Card.Text>{dish.dishDescription}</Card.Text>

                                    {/* <Button style={{margin: "10px"}} variant="primary" onClick={(event) => handleEdit(event,item)}>Edit</Button>

                <Button style={{margin: "10px"}} variant="danger" onClick={e => {e.preventDefault(); handleDelete(item);}}>Delete</Button> */}

                                </Card.Body>

                            </Card> : <h1>Dish not found</h1>

                    }

                </div>








            </div>

        </div>

    );

}

export default DishByName;