var feathers = require('feathers');
var app = feathers();

var tempSwitchModule = {
  path: '/temp/switch',
  tempSwitchService: {
    find: function find(param,callback) {
      callback (null, {
        text: "hihi"
      })
    },
    get: function get(id, params, callback) {
      callback (null,{
        id: id,
        text: "true"
      })
    }
  }
};

app.configure(feathers.rest())
  .use(tempSwitchModule.path, tempSwitchModule.tempSwitchService)
  .listen (8082);
