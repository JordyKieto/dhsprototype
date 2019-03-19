import { connect } from 'react-redux'
import user from '../components/user'

// const getName = (name) => {
//   return name;
// }

const mapStateToProps = state => {
    return state.user;
};

export default connect(
  mapStateToProps
)(user)