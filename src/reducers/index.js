import { combineReducers } from 'redux';

const initialState = {
    firstName: '',
    lastName: '',
    age: '',
    familySize: '',
    dependants: '',
    education: '',
};

const user = (currentState = initialState, action) =>{
    switch(action.type){
        case 'SET_FIRST_NAME':
            console.log('setting new name...', action.text);
            return Object.assign({}, currentState, {
                firstName: action.text
            });
        default:
        console.log('defaulting...', currentState);
        return currentState;
    }
}

const dhsApp = combineReducers({
    user: user,
});

export default dhsApp