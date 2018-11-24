import Service from '@ember/service';

export default Service.extend({
    isAuthenticated: true,
    myhandler: function() {
        return "btn clicked: reported @ service.";
    }
});