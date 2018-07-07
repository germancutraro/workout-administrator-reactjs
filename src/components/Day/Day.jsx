import React, { Component } from "react";
import "./Day.css";
import AddExercice from "../AddExercice/AddExercice";
import Exercice from "../Exercice/Exercice";

class Day extends Component {
  state = {
    days: [
      { day: "monday", exercices: [] },
      { day: "tuesday", exercices: [] },
      { day: "wednesday", exercices: [] },
      { day: "thursday", exercices: [] },
      { day: "friday", exercices: [] },
      { day: "saturday", exercices: [] },
      { day: "sunday", exercices: [] }
    ],
    currentDay: {}
  };

   addExercice = (day, exercice) => {
    const currentDay = this.state.days.find(el => el.day === day);

    let currentDayCopy;

    this.setState({ currentDay }, () => {
      currentDayCopy = Object.assign({}, currentDay);

      currentDayCopy.exercices.push(exercice);

      this.setState({ currentDay: currentDayCopy }, () => {
        console.log(this.state.currentDay);
      });
    });
  };

  deleteExercice = (day, exercice) => {
    const currentDay = this.state.days.find(el => el.day === day);

    let currentDayCopy;

    this.setState({ currentDay }, () => {
      currentDayCopy = Object.assign({}, currentDay);

      const index = currentDayCopy.exercices.findIndex(ex => ex === exercice);
      currentDayCopy.exercices.splice(index, 1);

      this.setState({ currentDay: currentDayCopy }, () => {
        console.log(this.state.currentDay);
      });
    });
  };

  render() {
    const exercicesList = this.state.currentDay.exercices
      ? this.state.currentDay.exercices.map((name, i) => (
          <Exercice
            name={name}
            key={i}
            index={i}
            day={this.props.title}
            deleteExercice={this.deleteExercice}
          />
        ))
      : false;

    return (
      <div className="Day-Wrapper">
        <div className="Day">
          <h4>{this.props.title}</h4>
          <AddExercice day={this.props.title} addExercice={this.addExercice} />
        </div>

        <div className="Exercices">{exercicesList}</div>
      </div>
    );
  }
}

export default Day;
