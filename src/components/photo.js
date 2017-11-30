/**
 * photo component to display photo in thumbnail version
 * one photo element in the list
 */
import React from "react";
import { Link } from 'react-router-dom';

const photo = (props) =>  (
    //<div  style={{ display:'inline-block'}} >
    <div  style={{display:'inline-block', justifyContent: 'center'}}>
            <Link to={`/photo/${props.id}`} >{props.id} </Link>
            <Link to={`/photo/${props.id}`} > <img alt='photoItem' src={props.thumbnailUrl} /> </Link>
    </div>
)


export default photo;