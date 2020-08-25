import React, { Component } from "react";
import Cardlist from "../components/cardList";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/scroll";
import Errorboundary from "../components/error";
import { connect } from "react-redux";
import { setSearchField, requestKitties } from "../actions";
import { searchCats } from "../reducers";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchCats.searchField,
    kitties: state.requestKitties.kitties,
    isPending: state.requestKitties.isPending,
    error: state.requestKitties.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKitties: () => dispatch(requestKitties()),
  };
};
class App extends Component {
  componentDidMount() {
    this.props.onRequestKitties();
  }

  render() {
    const { searchField, onSearchChange, isPending, kitties } = this.props;
    const filteredrobots = kitties.filter((robots) => {
      return robots.name.toLowerCase().startsWith(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
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
