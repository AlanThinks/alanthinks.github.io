import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav style={{ padding: 16, display: "flex", gap: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}

