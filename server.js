const express = require('express');
const app = express();
console.log('listening to PORT 3000')

//Greetings
app.get('/greeting/:name', (req, res) => {
  res.send('Whats up ' + req.params.name + ' Its so great to see you!');
});



//tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send('Whats up ' + req.params.name + ' Its so great to see you!');
  });

app.listen(3000);