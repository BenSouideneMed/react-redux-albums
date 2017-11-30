import React from "react";
import { connect } from 'react-redux';
import { photosFetchData } from '../actions/photos';
import PropTypes from 'prop-types';

import Photo from './photo';

//for div style object
const photoListStyle = {
    background: "#EFFBFB",
    padding: "20px",
    margin: "20px"
};

class PhotoList extends React.Component{

    // to get the list off all the photos when the component build
    componentDidMount() {
        this.props.photosFetchData('https://jsonplaceholder.typicode.com/photos');
    }


    render(){
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the photos</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        let mappedPhotos = this.props.photos.map((photo) => {
                if(Number(this.props.match.params.albumid) === Number(photo.albumId)) {
                    return (

                        <Photo key={photo.id} id={photo.id} thumbnailUrl={photo.thumbnailUrl} />
                    )
                }

            }
        )

        //return the album title to display on the top page
        let albumTitle = this.props.albums.map((album) =>{
            if(Number(this.props.match.params.albumid) === Number(album.id)){
                return (
                    album.title
                    )
                }
            }

        )

        return (
            <div style={photoListStyle}>
                <center>
                    <h1>List of photos </h1>
                    <h3>Album Title : {albumTitle}</h3>
                    {mappedPhotos}

                </center>
            </div>
        )
    }
}


//propTypes to check the type of the props passed
PhotoList.propTypes = {
    photosFetchData: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool
};
const mapStateToProps = (state) => {
    return {
        albums: state.albums,
        photos: state.photos,
        hasErrored: state.HasErrored,
        isLoading: state.IsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        photosFetchData: (url) => dispatch(photosFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);

