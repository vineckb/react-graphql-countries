import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import CountryPage from './pages/Country'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/country/:numericCode">
            <CountryPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
