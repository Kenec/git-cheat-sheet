import React, { Component } from 'react';
import toastr from 'toastr';
import CheatInputs from './CheatInputs';

class ManageCheatForm extends Component {
  state = {
    cheatTitle: '',
    cheatInputs: [ {id: 1, desc: '', command: ''} ]
  };

  handleChange = event => {
    if (event.target.id === 'cheatTitle') {
      this.setState({ cheatTitle: event.target.value });
    } else {
      const newCheatInputs = [...this.state.cheatInputs]
      newCheatInputs[event.target.id][event.target.name] = event.target.value;
      this.setState({ cheatInputs: newCheatInputs });
    }
  };

  isFieldsEmpty = () => {
    return !this.state.cheatInputs.every(item => (item.desc !== '' && item.command !== ''));
  };

  addCheatInputs = () => {
    if (this.isFieldsEmpty()) {
      return toastr.error('Please Fill the previous Cheat Description and Command');
    }
    const newCheatInputs = this.state.cheatInputs.slice();
    newCheatInputs.push({ id: this.state.cheatInputs.length + 1, desc: '', command: '' })
    this.setState({ cheatInputs: newCheatInputs });
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="cheatTitle" className="col-form-label">Cheat Title</label>
          <div className="">
            <input 
              value={this.state.cheatTitle}
              onChange={this.handleChange} 
              type="text" 
              className="form-control" 
              id="cheatTitle" 
              placeholder="Cheat Title eg: Install GIT"
            />
          </div>
        </div>
        {
          this.state.cheatInputs.map((value, index, array) =>
            <CheatInputs key={index} handleChange={this.handleChange} inputValue={value} index={index} />
          )
        }

        <button type="submit" className="btn button-blend">Submit Cheat</button>
        <hr className="hr-light"/>
        <em>To add another cheat description and cheat command to this cheat title, click this button</em>
        <button type="button" onClick={this.addCheatInputs} className="ml-2 btn btn-danger btn-round">+</button>
      </form>
    );
  }
}

export default ManageCheatForm;