let nextId = 0;

export const formNext = () =>({
    type: 'FORM_NEXT'
});

export const formPrevious = () =>({
    type: 'FORM_PREVIOUS'
});

export const setId = (text) =>({
    type: 'SET_ID',
    id: nextId++
});

export const setFirstName = (text) =>({
    type: 'SET_FIRST_NAME',
    text
});

export const setLastName = (text) =>({
    type: 'SET_LAST_NAME',
    text
});

export const setAge = (text) =>({
    type: 'SET_AGE',
    text
});

export const setPhoneNumber = (text) =>({
    type: 'SET_PHONE_NUMBER',
    text
});

export const setFamilySize = (text) =>({
    type: 'SET_FAMILY_SIZE',
    text
});

export const setDependant = (text) =>({
    type: 'SET_DEPENDANT',
    text
});

export const setEducation = (text) =>({
    type: 'SET_EDUCATION',
    text
});