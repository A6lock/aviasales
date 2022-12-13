import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;

    return error ? (
      <h3> Возникла ошибка, мы скоро все поправим </h3>
    ) : (
      // eslint-disable-next-line react/destructuring-assignment
      this.props.children
    );
  }
}
