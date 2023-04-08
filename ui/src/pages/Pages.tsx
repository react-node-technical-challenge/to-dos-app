import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home';
import LogIn from './log-in/LogIn';
import SignIn from './sign-in/SignIn';

export default function Pages() {
  return (
    <Routes>
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
