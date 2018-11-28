import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../Search';
import CheatCard from './CheatCard';

class Profile extends Component {

  render() {
    return (
      <div className="container mt-3">
        <Search />
        <div className="grid-container">
          {
            this.props.gitCheats.map((gitCheat, index) => {
              return <CheatCard key={index} id={gitCheat.id} gitCheat={gitCheat} />  
            })
          }       
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  gitCheats: state.gitCheats
});

export default connect(mapStateToProps)(Profile);