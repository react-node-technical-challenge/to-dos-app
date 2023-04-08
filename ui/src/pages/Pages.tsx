import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home';
import SignUp from './sign-up/SignUp';
import SignIn from './sign-in/SignIn';

export default function Pages() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
