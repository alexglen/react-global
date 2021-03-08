import React from 'react';

export default class ErrorBoundry extends React.Component {
  state = { hasError: false };

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Some error message</h1>;
    }

    return this.props.children;
  }
}
