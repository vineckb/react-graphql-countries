import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyle'
import Helmet from 'react-helmet'
import { ApolloProvider } from '@apollo/client'
import HomePage from '../../pages/Home'
import CountryPage from '../../pages/Country'
import apolloClient from './apolloClient'

function App() {
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <Helmet>
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" />
          </Helmet>
          <GlobalStyle />
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
