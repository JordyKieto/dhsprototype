import { combineReducers } from 'redux';

const initialState = {
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    familySize: '',
    dependant: '',
    education: '',
};

const defaultIndex = {
    formIndex: 1
};

const form = (currentIndex = defaultIndex, action)=>{
    switch(action.type){
        case 'FORM_PREVIOUS':
        console.log('previous');
        return Object.assign({}, currentIndex, {
            formIndex: currentIndex.formIndex -1
        });
        case 'FORM_NEXT':
        console.log('next');
        return Object.assign({}, currentIndex, {
            formIndex: currentIndex.formIndex + 1
        });
        default:
        console.log('default index');
        return currentIndex;
    }
;}

const user = (currentState = initialState, action) =>{
    switch(action.type){
        case 'SET_FIRST_NAME':
            return Object.assign({}, currentState, {
                firstName: action.text
            });
        case 'SET_LAST_NAME':
            return Object.assign({}, currentState, {
                lastName: action.text
            });
        case 'SET_AGE':
            return Object.assign({}, currentState, {
                age: action.text
            });
        case 'SET_PHONE_NUMBER':
            return Object.assign({}, currentState, {
                phoneNumber: action.text
            });   
        case 'SET_FAMILY_SIZE':
            return Object.assign({}, currentState, {
                familySize: action.text
            }); 
        case 'SET_DEPENDANT':
            return Object.assign({}, currentState, {
                dependant: action.text
            }); 
        case 'SET_EDUCATION':
            return Object.assign({}, currentState, {
                education: action.text
            });
        default:
        console.log('defaulting...', currentState);
        return currentState;
    }
}

const dhsApp = combineReducers({
    user: user,
    form: form
});

export default dhsApp