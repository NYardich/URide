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
      </div>
    </Router>

  );
}

export default App;
