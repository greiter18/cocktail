
import { connect } from "react-redux";
import { logout} from "../../actions/session_action";
import NavBar from "./navBar";

const mstp = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(mstp, {logout})(NavBar);