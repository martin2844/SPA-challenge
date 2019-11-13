import React from 'react';
import './card.scss';

import {Button} from 'reactstrap';



const Example = (props) => {


  return (
   


            <div className='card-body'>
            <div className='card-top'>
            <img alt={props.title} className='card-image' src={props.image} />
            </div>
            <div className='card-bottom'>
            <h1 className='card-title'>{props.title}</h1>
            <p className='card-subtitle'>{props.subtitle}</p>
            <p className='card-desc'>{props.text}</p>
            
            <Button className='card-buttons' color="info">Edit</Button>
           
            
            <Button onClick={props.onClick} className='card-buttons' color="danger">Delete</Button>
            
            </div>
            </div>


  
        
    
    
  );
};

export default Example;