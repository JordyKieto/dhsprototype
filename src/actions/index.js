let nextId = 0;

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

export const setDependants = (text) =>({
    type: 'SET_DEPENDANTS',
    text
});