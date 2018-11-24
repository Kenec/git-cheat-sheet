import React, { Component } from 'react';
import Search from '../Search';
import CheatCard from './CheatCard';

class Profile extends Component {

  render() {
    return (
      <div className="container mt-3">
        <Search />
        <div className="grid-container">
          <CheatCard />
          <CheatCard />
          <CheatCard />
          <CheatCard />
          <CheatCard />
          <CheatCard />
          <CheatCard />
          <CheatCard />
          <CheatCard />
          <CheatCard />          
        </div>
      </div>
    );
  }
};

export default Profile;