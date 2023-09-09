import * as React from 'react';
import Home from "./components/Home";
import Layout from "./components/Layout";
import Settings from './components/Settings';
import ErrorPage from './components/Settings';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="settings"
          element={<Settings />}
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}