import NavbarButton from "../NavbarButton";

function Header() {
  return (
    <header>
      <nav class="container">
        <div class="nav-subcontainer">
          <a id="nav-logo" href="https://google.com">
            Verti
          </a>
          <span id="nav-logo-companion">HTML5</span>
        </div>
        <ul class="nav-subcontainer">
          <li>
            <a id="nav-first-a" href="#cards-container">
              Lorem
            </a>
          </li>
          <li>
            <a href="#cards-container">Ipsum</a>
          </li>
          <li>
            <a href="#cards-container">Dolor</a>
          </li>
          <NavbarButton
            titulo={"Prueba"}
            href={"https://www.google.com/"}
          ></NavbarButton>
          <NavbarButton
            titulo={"Prueba 2"}
            href={"https://www.facebook.com/"}
          ></NavbarButton>
          <NavbarButton titulo={"Prueba"}></NavbarButton>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
