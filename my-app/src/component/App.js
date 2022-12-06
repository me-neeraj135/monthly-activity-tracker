/** @format */

import React, { Component } from "react";
import AddActivity from "./AddActivity";
import ShowActivity from "./ShowActivity";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
    };
  }

  getLocalStorage = () => {
    return JSON.parse(localStorage.getItem(`activities`)) || [];
  };

  componentDidMount() {
    this.setState({
      activities: this.getLocalStorage(),
    });
  }

  handleAdd = event => {
    event.preventDefault();

    if (event.target.activity.value !== "") {
      const now = new Date();
      const month = now.toLocaleString("default", { month: "long" });

      let days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

      let activity = {
        activity: event.target.activity.value,
        month: month,
        days: days,
        activeDays: [],
      };
      this.setState(prevState => {
        return {
          activities: [...prevState.activities, activity],
        };
      });
      event.target.activity.value = ``;
    }
  };

  handleActiveDay = (a, d) => {
    this.setState(prevState => {
      return {
        activities: prevState.activities.map(act => {
          if (act.activity === a) {
            let days = [...act.activeDays];
            if (days.includes(d)) {
              days = days.filter(day => day !== d);
            } else {
              days.push(d);
            }
            return { ...act, activeDays: [...days] };
          }
          return act;
        }),
      };
    });
  };

  handleDelete = act => {
    // console.log(activity, `del`);

    this.setState(prevState => {
      return {
        activities: prevState.activities.filter(
          a => a.activity !== act.activity
        ),
      };
    });
  };

  componentDidUpdate() {
    localStorage.setItem(`activities`, JSON.stringify(this.state.activities));
  }

  render() {
    return (
      <>
        <header className="App-header">
          <h1>monthly activity tracker</h1>
        </header>
        <main>
          <AddActivity add={this.handleAdd} activity={this.state.activities} />
          <ShowActivity
            AddActivity={this.state.activities}
            active={this.handleActiveDay}
            deleteActivity={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default App;
