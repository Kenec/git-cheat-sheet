import React from 'react';

const CheatInputs = ({ handleChange, inputValue, index }) => (
  <div>
    <div className="form-group">
      <label htmlFor={index} className="col-form-label">Cheat Description {index + 1}</label>
      <div className="">
        <input 
          id={index} 
          name='desc'  
          value={inputValue.desc} 
          onChange={handleChange} 
          type="text" 
          className="form-control" 
          placeholder="Cheat Description"
          required
        />
      </div>
    </div>

    <div className="form-group">
      <label htmlFor={index} className="col-form-label">Cheat Command {index + 1}</label>
      <div className="">
        <input
          id={index} 
          name='command' 
          value={inputValue.command} 
          onChange={handleChange} 
          type="text" 
          className="form-control" 
          placeholder="Cheat Command eg: brew install git"
          required
        />
      </div>
    </div>
  </div>
);

export default CheatInputs;