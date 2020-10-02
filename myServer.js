let express = require("express");

let myServer = express(); 

myServer.use(express.urlencoded({extended: false}));

myServer.get("/", function(clientRequest, serverResponse){
    serverResponse.send(`
    <form action="/user_page" method="POST">
    <label for="fname">Your name:</label><br>
    <input type="text" name="userName" autocomplete="off"><br>
    <label for="password">Your password:</label><br>
    <input type="password" name="userPassword" autocomplete="off"><br><br>
    <input type="submit" value="Submit">
   </form>
    `);
});

myServer.post("/user_page", function(clientRequest, serverResponse){
    if(clientRequest.body.userName == "Husein" && 
    clientRequest.body.userPassword == "husein"
    ){
        serverResponse.send(
            `Welcome to our forum <br>
            <a href="/">Go back</a>`
        );
    } else {
        serverResponse.send(`
        Sorry, that is incorrect, try again. <br>
        <a href="/">Go back</a>
        `)
    }
});

myServer.listen(3000);
