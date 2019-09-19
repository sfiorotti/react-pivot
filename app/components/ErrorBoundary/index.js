import React, { Component } from 'react'

export default class ErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info
    })
  }

  render() {
    console.log(this.state)
    if (this.state.hasError) {
      return <div>Error...</div>
    }
    return this.props.children
  }
}