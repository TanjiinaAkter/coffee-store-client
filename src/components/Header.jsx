import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/signin">Signin</NavLink>
      <NavLink to="/signup">SignUp</NavLink>

    </div>
  );
};

export default Header;
