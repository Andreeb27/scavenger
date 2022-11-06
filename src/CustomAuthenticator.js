import logo from './logo.svg';
import awsExports from './aws-exports'
import './App.css';
import {Amplify,Auth, toast} from 'aws-amplify'
import { Authenticator, Heading} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";  
import { useEffect, useState } from 'react';


Amplify.configure(awsExports);

export default function CustomAuthenticator(){
const [level,setLevel] = useState("Managers");
const [userData,setUserData] = useState([]);
  function generatedUserName(firstname,lastname){
    let initial = firstname.charAt(0);
    let lName = lastname;
    let date = new Date();
    let day = date.getDate().toString();
    let month = date.getMonth() + 1;
    let generatedName = initial + lName + month+ day;
    console.log(day)
    console.log("name generated = " + generatedName);
return generatedName
}

function getUserGroup(Username){
console.log("Fetcing user groups")
fetch("https://dsxdo0hm4c.execute-api.us-east-2.amazonaws.com/default/",{
method:'POST', 
headers:{'Content-Type':'application/json'},
body: JSON.stringify({
  "UserPoolId": 'us-east-2_yq4Klaavu',
  "Username": Username,
  
})})}

function elevateAccount(Username,accountLevel,Method){
  //account method should be add,remove, or disabled/enable
  fetch("https://7eiwgt5u32.execute-api.us-east-2.amazonaws.com/default/",{
    method: 'POST',
    headers: {'Content-Type':"application/json"},
    body : JSON.stringify({
      "UserName": Username,
      "UserPoolId": 'us-east-2_yq4Klaavu',
      "newGroup": accountLevel,
      "method": Method

    })
  })
}

function TestApiCall(username,method){
  //put url of api in the fetch
  fetch(" https://qdkw8owsn3.execute-api.us-east-2.amazonaws.com/default",{
    method: 'POST',
    headers: {'Content-Type':"application/json"},
    body : JSON.stringify({
        "UserPoolId": "us-east-2_yq4Klaavu",
        "Username" : username,
        "method": method
    })
  }).then(function(response){

    console.log(response)

    return response.json();

  }).then(function(JsonData){
    console.log(JsonData);
    setUserData(JsonData)
  })
}
function GetUser(username,method){
  //put url of api in the fetch
  fetch(" https://qdkw8owsn3.execute-api.us-east-2.amazonaws.com/default",{
    method: 'POST',
    headers: {'Content-Type':"application/json"},
    body : JSON.stringify({
        "UserPoolId": "us-east-2_yq4Klaavu",
        "Username" : username,
        "method": method
    })
  }).then(function(response){

    console.log(response)

    return response.json();

  }).then(function(JsonData){
    console.log(JsonData);
    setUserData(JsonData)
  })
}





const services={
  async handleSignUp(formData){
    let {username,password,attributes} = formData;
    
    username = generatedUserName(attributes.given_name,attributes.family_name.toLowerCase());
    
    return Auth.signUp({
      username,
      password,
      attributes,
    });
  },
};
  return (

<Authenticator services={services} initialState="signUp">
  
{
  ({signOut, user}) => (
  <>
  
  <Heading level={1}>Hello {user.username}</Heading>

  <button onClick={signOut}>Sign Out</button>

  <button onClick={() => TestApiCall()}>TEST BUTTON</button>
  <button onClick={() => GetUser(user.username,"single")}>Get Single User</button>
  <button onClick={() => GetUser(user.username,"all")}>Get All Users</button>

  <button onClick={() => {console.log(userData)}}>LogData</button>
  
  <button onClick={() => getUserGroup(user.username)}>Get groups</button>

  <button onClick={() => elevateAccount(user.username,"Managers","add")}>Elevate Account</button>
  
  <button onClick={() => elevateAccount(user.username,"Managers","remove")}>remove Account from managers</button>
  </>
  
  )
}
</Authenticator>

  );
}


