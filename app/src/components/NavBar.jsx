const NavBar = ({ title }) => {
  return (
    <nav className="futuristic-navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="navbar-brand">{title}</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
