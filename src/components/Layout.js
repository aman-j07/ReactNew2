import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <div id={props.id}>
        <h2>Socialify</h2>
        <div>
          <Link to="/">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
};

export default Layout;
