var assert = require('chai').assert;

var Bus = require('./bus')

describe('Bus', function() {

    it.skip('should be a function', function(){
        assert.isFunction(Bus);
    })

    it.skip('should create a bus', function() {
        var bus10 = new Bus();
        assert.isObject(bus10);
    })

    it.skip('should not have a route by default', function(){
        var bus15 = new Bus(false);

        assert.equal(bus15.hasRoute, false)
        assert.equal(bus15.route, '');
    })

    it.skip('should be assigned a route', function() {
        var bus15 = new Bus(true, '15');
        var bus10 = new Bus(true, '10');

        assert.equal(bus15.hasRoute, true);
        assert.equal(bus15.route, '15');
        assert.equal(bus10.hasRoute, true);
        assert.equal(bus10.route, '10');
    })

    it.skip('should not have passengers by default', function() {
        var bus15 = new Bus(true, '15');

        assert.deepEqual(bus15.passengers, []);
    })

    it.skip('passengers should be able to request stops', function(){
        var bus6 = new Bus(true, '6');

        assert.equal(bus6.stopRequested, false);

        bus6.requestStop();
        assert.equal(bus6.stopRequested, true)

    })

    it.skip('should be able to pick up passengers', function() {
        var bus44 = new Bus(true, '44');
        var seventeenthAndLarimer = {boarding: ['Robbie', 'Mike', 'Louisa']}

        bus44.makeStop(seventeenthAndLarimer);
        
        assert.equal(bus44.passengers.length, 3);
        assert.deepEqual(bus44.passengers[1], 'Mike');
    })

    it.skip('should only let off passengers if a stop is requested', function() {
        var bus6 = new Bus(true, '6');

        var seventeenthAndLarimer = {boarding: [ 'Louisa', 'Travis', 'Khalid']};
        var grantAndTwelth = {boarding: ['James', 'Greta', 'Pierre', 'Craig']};
        
        bus6.makeStop(seventeenthAndLarimer)
        bus6.makeStop(grantAndTwelth);

        assert.equal(bus6.passengers.length, 7);

        bus6.openDoor(1);

        assert.equal(bus6.passengers.length, 7);

        bus6.requestStop();
        bus6.openDoor(2);

        assert.equal(bus6.passengers.length, 5)
        assert.equal(bus6.stopRequested, false)
    })
})