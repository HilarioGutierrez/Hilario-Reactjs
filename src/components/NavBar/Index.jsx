import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../app.css";
import CartWidget from "../CartWidget/Index";

// --->componente NavBar con list de opciones clickeables para navegar en el e-comerce<---
const Navbar = () => {
  return (
    <header>
      {/* Brand */}
      <Link to='/' className="linkDecoration">
        <h1 className="title">WAYNA<span className="title2">vinos</span></h1>
      </Link>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-dark">
        {/* NavBar boton responsive */}
        <Box className="container-fluid navBar">
          <Button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <Text className="navbar-toggler-icon m-0"></Text>
          </Button>
          {/* NavBar List / Categorys */}
          <Box className="collapse navbar-collapse flex justify-content-evenly" id="navbarNavAltMarkup">
            <NavLink to='/todos-los-vinos' className="listNav">Todos los Vinos</NavLink>
            <NavLink to='/tintos' className="listNav">Tintos</NavLink>
            <NavLink to='/blancos' className="listNav">Blancos</NavLink>
            <NavLink to='/rosados' className="listNav">Rosados</NavLink>
            <NavLink to='/champagne' className="listNav">Champagne</NavLink>
            <NavLink to='/contacto' className="listNav">Contacto</NavLink>
            {/* Cart */}
            <NavLink className="linkDecoration" to='carrito' background='dark' _hover={{ background: 'dark' }}><CartWidget /></NavLink>
          </Box>
        </Box>

      </nav>
    </header>

  );
};

export default Navbar;
