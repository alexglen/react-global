import React from "react";

export default class ErrorBoundry extends React.Component {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something was wrong. Try reloading the project</h1>;
    }

    return this.props.children;
  }
}
