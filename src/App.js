import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Select from './pages/Select'
import RiderHome from './pages/RiderHome'
import RiderOnboard from './pages/RiderOnboard'
import DriverHome from './pages/DriverHome'
import DriverOnboard from './pages/DriverOnboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/select' component={Select}></Route>
        <Route path='/riderhome' component={RiderHome}></Route>
        <Route path='/rideronboard' component={RiderOnboard}></Route>
        <Route path='/driverhome' component={DriverHome}></Route>
        <Route path='/driveronboard' component={DriverOnboard}></Route>
      </div>
    </Router>

  );
}

export default App;
