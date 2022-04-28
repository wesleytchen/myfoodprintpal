import React from 'react';
import logo from './Logo.jpg';

const Header = () => (
  <div class="container">
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <img src={logo} class="img-fluid" alt="MyFoodprintPal"></img>
    </a>
  </header>
</div>
);
export default Header;