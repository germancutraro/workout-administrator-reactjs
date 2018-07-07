import React, { Component } from "react";
import "./AddExercice.css";

class Exercice extends Component {

  state = {
    value: ''
  };

  onClickHandler = () => {
    this.props.addExercice(this.props.day, this.state.value);
  };

  render() {
    return (
      <div className="Add-Exercice-Wrapper">
        <input 
          type="text" 
          placeholder="Add Exercice..." 
          onChange={ e => this.setState({ value: e.target.value }) } 
          className="Input-Add-Exercice" 
        />
        <button onClick={ this.onClickHandler } className="Button-Add-Exercice">Add</button>
      </div>
    );
  }
}

export default Exercice;
