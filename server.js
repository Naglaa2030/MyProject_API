// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
// Start up an instance of app
const app=express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors()); 


//Create post function 
app.post('/postpoint',postData);

function postData(req,res){

    projectData["date"]=req.body.date;
    projectData["temp"]=req.body.temp;
    projectData["feel"]=req.body.feel;
   res.send(projectData).status(200).end(); /* process completly done data saved to projectData store*/
}

//Create get function 
app.get('/getpoint',getData);

function getData(req,res){
    res.send(projectData).status(200).end(); /* process completly done data send to client*/
 

}
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=3000;
const server = app.listen(port,listening);
function listening(){
    console.log(`I am running on port :${port}`);
}







