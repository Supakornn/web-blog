const NavbarComponent = () => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item pr-3 pt-3 pb-3">
          <a href="/" className="nav-link">
            Blogs
          </a>
        </li>
        <li className="nav-item pr-3 pt-3 pb-3">
          <a href="/create" className="nav-link">
            Create
          </a>
        </li>
        <li className="nav-item pr-3 pt-3 pb-3">
          <a href="/Login" className="nav-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
