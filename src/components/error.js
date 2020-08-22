import React, { Component } from "react";

class Errorboundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return <h1 className="green tc">Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default Errorboundary;
