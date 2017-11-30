/**
 * Album Lst component to display the list of album getting from the API
 * Fake Rest API at https://jsonplaceholder.typicode.com/
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { albumsFetchData } from '../actions/albums';
import PropTypes from 'prop-types';

class AlbumList extends Component {
    componentDidMount() {
        this.props.albumsFetchData('https://jsonplaceholder.typicode.com/albums');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.albums.map((album) => (
                    <li key={album.id}>
                        <Link to={`/album/${album.id}`}> {album.id} # {album.title} </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

//propTypes to check the type of the props passed
AlbumList.propTypes = {
    albumsFetchData: PropTypes.func.isRequired,
    albums: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        albums: state.albums,
        hasErrored: state.dataHasErrored,
        isLoading: state.dataIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        albumsFetchData: (url) => dispatch(albumsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);