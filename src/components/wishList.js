import React from "react";
import { connect } from 'react-redux';


const wishListStyle = {
    background: "#BDBDBD",
    padding: "20px",
    margin: "20px"
};

class WishList extends React.Component {



    render(){

        let mappedWishList =  this.props.wishList.map((photo) =>{
                return(
                    <div>
                    <h3> Photo title : {photo.title} </h3>
                    <img alt="wishlist_version" src={photo.thumbnailUrl}/>
                    </div>
                )
            }
        )

        //check if the wishlist is empty
        let empty;
        if(!this.props.wishList.length){

            empty = ( <div style={{color : "red"}}><h3>Your wishlist is empty , Add some photos</h3></div>);

        }


        return (
            <div style={wishListStyle}>
                <center>
            <h1>This is your wish list</h1>
                {mappedWishList}
                {empty}
                </center>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        wishList: state.wishList,

    };
};
export default connect(mapStateToProps)(WishList);
