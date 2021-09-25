import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login'

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
