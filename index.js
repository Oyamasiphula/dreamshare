var express = require('express'),
  exphbs = require('express-handlebars');
// products = require('./routes/products');

var app = express();

// <layout> basic setup template handlebars as the template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
// </layout>

// middleware below
// ...code
// middleware above

// <requests> now lets get ready for requests
// app.get("/", products.home)
app.get('/', (req, res) => {
  res.render('home');
})

// <portSetup>port delcaration
var port = process.env.port || 2000
// </portSetup>

// <serveCodeBlocksRun>Lets configure our localhost server's port
app.listen(port, () => {
  console.log('app is listening on' + port);
});
// </serveCodeBlocksRun>
