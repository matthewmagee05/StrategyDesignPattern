const app = require('./app');

app.set('port', 3000);
app.set('view engine', 'pug');
app.set('views', './views');
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});