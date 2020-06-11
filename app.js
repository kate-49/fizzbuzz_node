const express = require('express');
const app = express();

var Fizzbuzz = require('./models/fizzbuzz.js')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Enter your fizzbuzz number below:')
  res.write('<form method="post" action="/">');
  res.write(' <input type="text" name="fizzbuzz_number"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
})

app.post('/', (req, res) => {
  res.write('Your fizzbuzz answer is: ')
  res.write(Fizzbuzz(req.body.fizzbuzz_number))
  res.end()
});

app.listen(3030, () => console.log('listening on port 3030'));
