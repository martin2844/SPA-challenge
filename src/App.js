import React, {useState, useEffect} from 'react';
import {Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

//delete handling
import _ from "lodash";
import nextId from "react-id-generator";

import BootstrapNavbar from './components/Navbar';
import Card from './components/Card';
import './bootstrap.min.css';


function App() {
  
  

  const hidden = {
    display: 'none'
  }

  const shown = {
    display: 'block'
  }


  const [toggle, setToggle] = useState(true);

  

  const [newItem, setNewItem] = useState({
    title: '',
    subtitle: '',
    text:'',
    image: ''
  })
  const {title, subtitle, text, image} = newItem;
  
 

  //just a padding object for main container
  const containerStyle = {
    paddingTop: '1rem'
  }
  

  //main item array, will not use a DB, just an array of items that will store it in local memory.

  const items = [{
    title: "Towel",
    subtitle: "subtitle 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: './images/towel.jpg',
    id: 1
  },
  {
    title: "Candle",
    subtitle: "subtitle 2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: './images/candle.jpg',
    id: 2
  },
  {
    title: "Oil",
    subtitle: "subtitle 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: './images/oil.jpg',
    id: 3
  },
  {
    title: "Fragrances",
    subtitle: "subtitle 4",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: './images/fragrances.jpg',
    id: 4
  },
  {
    title: "Lotion",
    subtitle: "subtitle 5",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: './images/lotion.jpg',
    id: 5
  },
]

//set Items to state
const [objects, setObjects] = useState(items);


useEffect(() => {

  const data = localStorage.getItem('local-items');
  if (data) {

    setObjects(JSON.parse(data));

  }

  

},[])

useEffect(() => {

  localStorage.setItem('local-items', JSON.stringify(objects));

})



//map of items array to show on container. Passes the items properties as props to the Card component
const cards = objects.map((card) => {
  
  function handleChildClick() {
    console.log(card.id);
  let inmutable = objects;
  _.remove(inmutable, {
    id: card.id
  })
  console.log(inmutable);




  

  }
  

 return (
   
    <Card key={card.id} onClick={handleChildClick} title={card.title} subtitle={card.subtitle} image={card.image} text={card.text}/>
  )

})



console.log(newItem);

//toggler to show the form to add new Item
function formShow() {
  toggle ? setToggle(false) : setToggle(true);
}

// function for setting state of the new Item to add.
const onChange = e => {setNewItem({...newItem, [e.target.name]: e.target.value })}


// function for submiting the new item to add.
const onSubmit = e => {
  e.preventDefault();
  //destructure state
 

  const itemToPush = {

    title: title,
    subtitle: subtitle,
    text: text,
    image: image || './images/lotion.jpg',
    id: nextId()

  }

  console.log('click')

  setObjects([...objects, itemToPush]);

  

}





  return (
    <div className="App">
      <BootstrapNavbar/>
      <Container style={containerStyle}> 

        <h1>Welcome to SPA app</h1>
        <p>There are currently {objects.length} items</p>
        <Button color='success' onClick={() => formShow()}> Add Item</Button>

        {/* form container */}
        <Container style={toggle ? hidden : shown}>

        <Form onSubmit={e => onSubmit(e)}>

      <FormGroup>
        <Label for="Title">Title</Label>
        <Input onChange={e => onChange(e)} value={title}  type="Title" name="title" id="Title" placeholder="Put title for item" />
      </FormGroup>
      <FormGroup>
        <Label for="Subtitle">Subtitle</Label>
        <Input onChange={e => onChange(e)} value={subtitle} type="Subtitle" name="subtitle" id="Subtitle" placeholder="Put subtitle for item" />
      </FormGroup>
      <FormGroup>
      <Label for="Description">Description</Label>
        <Input onChange={e => onChange(e)}  value={text}  type="Description" name="text" id="Description" />
        </FormGroup>
      </Form>
      <Button className='card-buttons' color='primary' onClick={e => onSubmit(e)}> Submit </Button>
      <Button className='card-buttons' color='danger' onClick={() => formShow()}>Close </Button>
        </Container>

        <div className='card-main wrap'>
        {cards}
        </div>

      </Container>
    
    </div>
  );
}

export default App;
