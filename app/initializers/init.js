export function initialize(app) {
app.inject('route', 'start', 'service:start');
  app.inject('controller', 'start', 'service:start');
}

export default {
name:'init',
initialize:initialize
};
