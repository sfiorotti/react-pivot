import React, { Component, Suspense, lazy } from 'react'
import { Container, TextField, Typography } from '@material-ui/core'

const Button = lazy(() => import('../../components/Button'))
const ErrorBoundary = lazy(() => import('../../components/ErrorBoundary'))
const Header = lazy(() => import('../../components/Header'))

export default class Login extends Component {
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
              <Button label="Login"></Button>
            </ErrorBoundary>
          </Typography>
        </Container>
      </>
    )
  }
}
