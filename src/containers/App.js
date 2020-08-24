import React, { Component } from "react";
import Cardlist from "../components/cardList";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/scroll";
import Errorboundary from "../components/error";
import { connect } from "react-redux";
import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ kitties: users }));
  }

  render() {
    const { kitties } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredrobots = kitties.filter((robots) => {
      return robots.name.toLowerCase().startsWith(searchField.toLowerCase());
    });
    return (
      <div>
        <h1 className="f1 bg-navy green  ba tc">Kitty Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <Errorboundary>
            <Cardlist robots={filteredrobots} />
          </Errorboundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
