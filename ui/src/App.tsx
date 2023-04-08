import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages/Pages';

export default function App() {
  return (
    <Router>
      <Pages />
    </Router>
  );
}
