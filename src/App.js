import React, { Component, Fragment } from "react";
import "./App.css";
import { AppBar, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class App extends Component {
  state = {
    ninjas: [],
    latitude: "",
    longitude: ""
  };
  componentDidMount() {
    console.log("ji");
  }
  handleSubmit = e => {
    e.preventDefault();
    const lat = this.state.latitude;
    const lng = this.state.longitude;
    fetch("/api/ninjas?lng=" + lng + "&lat=" + lat)
      .then(function(data) {
        return data.json();
      })
      .then(json => {
        this.setState({
          ninjas: json
        });
      });
  };
  handleChange = s => e => {
    this.setState({
      [s]: e.target.value
    });
  };
  render() {
    const ninjas = this.state.ninjas.map((ninja, index) => {
      return (
        <div>
          <li key={index}>Name :{ninja.name}</li>
          <li>Rank :{ninja.rank}</li>
        </div>
      );
    });

    return (
      <Fragment>
        <AppBar
          position="static"
          color="inherit"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="longitude"
              value={this.state.longitude}
              onChange={this.handleChange("longitude")}
              margin="normal"
            />
            <TextField
              label="Latitude"
              value={this.state.latitude}
              onChange={this.handleChange("latitude")}
              margin="normal"
            />
            <Button type="submit" variant="contained">
              Find Ninja
            </Button>
          </form>
          <ul>{ninjas}</ul>
        </AppBar>
      </Fragment>
    );
  }
}

export default App;
