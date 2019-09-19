import React, { Component } from 'react'
import { Button } from '@material-ui/core'

function withButtonVariant(WrappedComponent, props) {
  return class extends Component {
    constructor(props) {
      super(props)
      // throw new Error()
    }

    render() {
      return (
        <WrappedComponent color="primary" size="large" onClick={this.props.onClick} {...props}>
          {this.props.render()}
        </WrappedComponent>
      )
    }
  }
}

export const ButtonContained = withButtonVariant(Button, { variant: "contained" })

export const ButtonOutlined = withButtonVariant(Button, { variant: "outlined" })

export default withButtonVariant(Button, {})