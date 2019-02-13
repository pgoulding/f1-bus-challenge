class Bus {
    constructor(routeAssigned, route) {
        this.hasRoute = routeAssigned;
        this.route = route || '';
        this.passengers = [];
        this.stopRequested = false;
    }

    makeStop(passengers) {
        for (var i = 0; i < passengers.boarding.length; i++) {
            this.passengers.push(passengers.boarding[i]);
        }

        
    }

    requestStop() {
        this.stopRequested = true;
    }

    openDoor(passengersDeparting){
        if (this.stopRequested) {
            for (var j = 0; j < passengersDeparting; passengersDeparting--) {
                this.passengers.pop();
            }
            this.stopRequested = false;
        }
    }
}

module.exports = Bus;