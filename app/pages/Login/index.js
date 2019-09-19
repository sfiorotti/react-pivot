import React, { Component, Suspense, lazy } from 'react'
import { Container, TextField, Typography } from '@material-ui/core'

const ButtonMaterial = lazy(() => import('../../components/Button'))
const ErrorBoundary = lazy(() => import('../../components/ErrorBoundary'))
const Header = lazy(() => import('../../components/Header'))

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.clickLogin = this.clickLogin.bind(this);
  }

  clickLogin(e) {
    e.preventDefault()
    throw new Error()
  }

  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Header label="Login" />
        </Suspense>
        <Container maxWidth="sm">
          <Typography component="div" style={{ margin: '10px' }}>
            <TextField
              id="email"
              label="Email"
              margin="normal"
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              margin="normal"
              fullWidth
            />
            <ErrorBoundary>
              <ButtonMaterial onClick={this.clickLogin} render={() => <>{'Login'}</>} />
            </ErrorBoundary>
          </Typography>
        </Container>
      </>
    )
  }
}
