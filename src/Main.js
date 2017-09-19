import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Test from './components/Test'

const Main = () => (
  <main>
    <Switch>
      <Route path='/' component={Test}/>
    </Switch>
  </main>
)

export default Main
