import React, { Suspense } from "react";

// Redux:
import { Provider } from "react-redux";
import store from "./store";

// React Router:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components:
import Spinner from "./components/layout/Spinner";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import HomePage from "./components/layout/HomePage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./components/errors/NotFound";

// CSS:
import "./App.css";

// -------------------------------------------------------------------------

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

// Export:
export default App;
