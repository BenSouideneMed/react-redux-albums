/**
 * photo page to display photo
 * and addToWishList button
 */
import React from "react";
import { connect } from 'react-redux';
import {addToWishList} from "../actions/addToWishList";
import { Button} from 'react-bootstrap';


//for div style object
const photoStyle = {
    background: "#EFFBFB",
    padding: "20px",
    margin: "20px"
};

class PhotoList extends React.Component{

    /*
    function take photo in argumenet and
    dispatche Addtowishlist action to add this
    photo to the wishlist
    */
    addToWishList(photo){
        this.props.addToWishList(photo)
    }

    render(){

        //DisplayPhoto return photo to show from photos table in the props
        let DisplayPhoto = this.props.photos.map((photo) => {
                if(Number(this.props.match.params.photoid) === Number(photo.id)) {
                    return (
                            <div>
                                <h2>Title : {photo.title}</h2>
                                    <div>
                                        <Button  bsStyle="primary" onClick={() => { this.props.addToWishList(photo) }}>
                                            Add to WishList
                                        </Button>
                                    </div>
                                    <div>
                                         <img alt="big_version" src={photo.url}/>
                                    </div>
                            </div>
                            )
                }

            }
        )

        //check if photos is empty
        let empty;
        if(!this.props.photos.length){
            empty = (<div style={{color:"red"}}> <h3>Photo not found please back to home </h3> </div>);
        }


        return (
            <div  style={photoStyle}>
                <center>
                    <h1>Photo Page</h1>
                    {DisplayPhoto}
                    {empty}
                </center>
            </div>
        )
    }
}

//passing photos table from the state to props
const mapStateToProps = (state) => {
    return {
        photos: state.photos
    };
};

//passing AddToWishList dispatch function to the props
const mapDispatchToProps = (dispatch) => {
    return {
        addToWishList: (photo) => dispatch(addToWishList(photo))
    };
};

//connect between redux state + dispatch and react component props
export default connect(mapStateToProps,mapDispatchToProps)(PhotoList);

