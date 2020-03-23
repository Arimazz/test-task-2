import { connect } from 'react-redux';

import { ProfileTemplate } from './ProfileTemplate';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

export const Profile = connect(
  mapStateToProps,
  null,
)(ProfileTemplate);
