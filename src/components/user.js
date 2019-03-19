import React from 'react';

const user = async ({firstName, lastName, age, phoneNumber, familySize, dependant, education})=>{
    const url = '/api/users'
    const data = {firstName, lastName, age, phoneNumber, familySize, dependant, education};
    fetch(url, {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", 
        referrer: "no-referrer", 
        body: JSON.stringify(data),
    }).then(res=>{
        res.json();
        console.log(res);
        return(
            <>
                <p>Hello there {firstName} {lastName} </p>
                <p>We will reach you by phone at {phoneNumber}</p>
                <p>You are {age} years old</p>
                <p>Your family is {familySize} strong</p>
                <p>{dependant} is your dependant</p>
                <p>{education} is the highest level of education you have completed</p>
            </>
        );
    })
}

export default user;