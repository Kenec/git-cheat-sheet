import React, { Component } from 'react';

class ManageCheat extends Component {

  render() {
    return (
      <div className="container mt-3">
        <h4 className="custom-h4">Add Cheat</h4>
        <div className="card p-4">
          <form>
            <div className="form-group">
              <label htmlFor="cheatTitle" className="col-form-label">Cheat Title</label>
              <div className="">
                <input type="text" className="form-control" id="cheatTitle" placeholder="Cheat Title eg: Install GIT" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cheatDesc1" className="col-form-label">Cheat Description 1</label>
              <div className="">
                <input type="text" className="form-control" id="cheatDesc1" placeholder="Cheat Description" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cheatCommand" className="col-form-label">Cheat Command 1</label>
              <div className="">
                <input type="text" className="form-control" id="cheatCommand" placeholder="Cheat Command eg: brew install git" />
              </div>
            </div>

            <button type="submit" className="btn button-blend">Submit Cheat</button>
            <hr className="hr-light"/>
            <em>To add another cheat description and cheat command to this cheat title, click this button</em>
            <button type="button" className="ml-2 btn btn-danger btn-round">+</button>
          </form>
        </div>
      </div>
    );
  }
};

export default ManageCheat;