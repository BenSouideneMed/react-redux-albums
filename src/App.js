import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//get the components
import AlbumList from './components/albumList';
import PhotoList from './components/photoList';
import PhotoDisplay from './components/photoDisplay';
import WishList from './components/wishList';

const headStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px"
};

const linkStyle ={
    padding: "10px",
    margin: "10px",
    background: "#ffde00",
    color: "#333",
    display: "inline-block",
    font: "monospace"
};
class App extends Component {


    render() {
    return (
      <div>
          <div style={headStyle}>
          <h1>PiC Choose</h1>
          <Link style={linkStyle} to="/">Home</Link>
          <Link style={linkStyle}  to="/wishlist">WishList</Link>
          </div>
          <Switch>
              <Route exact path="/" component={AlbumList}/>
              <Route path="/album/:albumid" component={PhotoList}/>
              <Route path="/photo/:photoid" component={PhotoDisplay}/>
              <Route path="/wishlist" component={WishList}/>
          </Switch>
      </div>
    );
  }
}

export default App;
