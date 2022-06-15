import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { routes } from './navigation/AppNavigator';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
