import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Login = lazy(() => import('./pages/Login'))
const ErrorComponent = lazy(() => import('./components/ErrorBoundary'))

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <ErrorComponent>
            <Route path="/" component={Login} />
            <Route exact path="/login" component={Login} />
          </ErrorComponent>
        </Switch>
      </Suspense>
    </Router>
  )
}