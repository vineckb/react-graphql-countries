import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import HomePage from './pages/Home'
import CountryPage from './pages/Country'

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </Router>
  );
}

export default App;
