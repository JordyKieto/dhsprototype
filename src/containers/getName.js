import { connect } from 'react-redux'
import getFirstName from '../components/getFirstName'

// const getName = (name) => {
//   return name;
// }

const mapStateToProps = state => {
    let firstName = state.user.firstName;
    console.log(firstName);
    console.log(state.user);
    return {
        'firstName': firstName
    };
};

export default connect(
  mapStateToProps
)(getFirstName)