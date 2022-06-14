import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { routes } from './navigation/AppNavigator';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path} element={<Layout>{route.component}</Layout>} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
