"use client";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BrowserRouter
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";


function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{JSON.stringify(error)}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      </ErrorBoundary>
  </React.StrictMode>
)
