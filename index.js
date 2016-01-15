var feathers = require('feathers');
var app = feathers();

var tempSwitchModule = {
  path: '/temp/switch',
  tempSwitchService: {
    get: function get(id, params, callback) {
      callback (null,{
        id: id,
        text: true
      })
    }
  }
};

app.configure(feathers.rest())
  .use(tempSwitchModule.path, tempSwitchModule.tempSwitchService)
  .listen (8082);
