import React from 'react';
import GlobalStyles from './index.css';
import { Navigation, Wrapper, LoadingIndicator } from 'components'
import { ThemeProvider, } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import theme from 'utils/theme';

function App() {
  return (
      
        <div>
          <GlobalStyles />

          <Router>
            <Navigation items={[
              { content: "Homepage", to: "/" },
              { content: "Budget", to: "/budget"}
            ]}
            RightElement={(
              <div>
                <button>EN</button>
                <button>PL</button>
              </div>
            )}
            />

            <Wrapper>
            <Switch>
              <Route exact path="/">Homepage</Route>
              <Route path="/budget">Budgetpage</Route>
            </Switch>
            </Wrapper>
          </Router>
          </div>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
    <React.Suspense fallback={LoadingIndicator}>
      <App />
    </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
