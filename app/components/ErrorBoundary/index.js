import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
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
      info,
    })
  }

  render() {
    if (this.state.hasError) {
      return <div>Error...</div>
    }
    return this.props.children
  }
}