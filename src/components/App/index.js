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
            <link rel="stylesheet" type="text/css" href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css" />
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
