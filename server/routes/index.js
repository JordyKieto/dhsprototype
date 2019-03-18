var router = require("express").Router();
var User = require("../models/user");

router.get('/api/users', function(request, response) {
    console.log(request.body);
    User.find({}).then(allUsers =>{
        response.status(200)
        response.json(allUsers)
    });
});
router.post('/api/users', function(request, response){
    console.log(request.body);
    User.insertOne({    firstName: request.body.firstName, 
                        lastName: request.body.lastName,    
                        phoneNumber: request.body.phoneNumber, 
                        familySize: request.body.familySize,
                        dependant: request.body.dependant,
                        education: request.body.education,
                  });
    response.status(204)
});

module.exports = router;