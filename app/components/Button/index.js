import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class ButtonMaterial extends Component {
  render() {
    return (
      <Button variant="contained" color="primary" size="large" onClick={this.props.onClick}>
        {this.props.render()}
      </Button>
    )
  }
}
