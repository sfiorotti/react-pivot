import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core'

import Header from '../../components/Header'

export class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </>
    )
  }
}
