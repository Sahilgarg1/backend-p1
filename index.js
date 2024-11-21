const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

function getWelcomeMessage(){
  return 'welcome to our service';
}

function getGreetingMessage(username){
  return "hello, " + username + '!';
}
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
})

app.get('/greeting', (req, res) => {
  let username = req.query.user;
  res.send(getGreetingMessage(username));
})

app.get('/checklogin', (req, res) => {
  let isLoggedin = req.query.logged === "true";
  let result;
  if(isLoggedin){
    result = 'user is logged in';
  }
  else{
    result = 'user is not there!';
  }
  res.send(result);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
