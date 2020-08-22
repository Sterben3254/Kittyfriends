import React, { Component } from "react";
import Cardlist from "../components/cardList";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/scroll";
import Errorboundary from "../components/error";
class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ kitties: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { kitties, searchfield } = this.state;
    const filteredrobots = kitties.filter((robots) => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div>
        <Errorboundary>
          <h1 className="f1 bg-navy green  ba tc">Kitty Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <Cardlist robots={filteredrobots} />
          </Scroll>
        </Errorboundary>
      </div>
    );
  }
}

export default App;
