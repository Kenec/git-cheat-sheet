import React, { Component } from 'react';
import ManageCheatForm from './ManageCheatForm';

class ManageCheat extends Component {

  render() {
    return (
      <div className="container mt-3">
        <h4 className="custom-h4">Add Cheat</h4>
        <div className="card p-4">
          <ManageCheatForm />
        </div>
      </div>
    );
  }
};

export default ManageCheat;