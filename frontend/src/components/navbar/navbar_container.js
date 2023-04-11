
import { connect } from "react-redux";
import { logout} from "../../actions/session_action";
import NavBar from "./navBar";

const mstp = store => ({
  loggedIn: store.session.isAuthenticated,
  store : store
});

export default connect(mstp, {logout})(NavBar);