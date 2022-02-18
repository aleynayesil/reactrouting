import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout() {
  return (
    <Container fluid>
      <NavBar />
      <main style={{ minHeight: "35rem", overflow: "auto" }}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Container>
  );
}

export default Layout;
