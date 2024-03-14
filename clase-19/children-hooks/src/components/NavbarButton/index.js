function NavbarButton({ titulo, href }) {
  return (
    <li>
      <a href={href}>{titulo}</a>
    </li>
  );
}

export default NavbarButton;