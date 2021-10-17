import logo from './logo.svg'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SubmitAss from './Components/SubmitAss'

function App() {
  return (
    <div className='App'>
      {/* <Dashboard /> */}
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/submit'>
            <SubmitAss />
          </Route>
        </Switch>
      </Router>
      {/* <Home /> */}
    </div>
  )
}

export default App
