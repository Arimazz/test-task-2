import { connect } from 'react-redux';
import { LoginTemplate } from './LoginTemplate';
import { setUsers, setLoggedIn } from '../../Store';

const mapStateToProps = state => ({
  users: state.users,
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  setUsers: payload => dispatch(setUsers(payload)),
  setLoggedIn: payload => dispatch(setLoggedIn(payload)),
});

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginTemplate);
