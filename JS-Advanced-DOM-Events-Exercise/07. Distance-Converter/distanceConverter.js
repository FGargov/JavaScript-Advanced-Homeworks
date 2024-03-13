function attachEventsListeners() {
    const inputDistanceElement = document.getElementById('inputDistance');
    const inputUnitsSelect = document.getElementById('inputUnits');
    const outputDistanceElement = document.getElementById('outputDistance');
    const outputUnitsSelect = document.getElementById('outputUnits');
    const convertButton = document.getElementById('convert');

    const unitConversions = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertButton.addEventListener('click', function() {
        let inputDistance = parseFloat(inputDistanceElement.value);
        let inputUnits = inputUnitsSelect.value;
        let outputUnits = outputUnitsSelect.value;

        let distanceInMeters = inputDistance * unitConversions[inputUnits];
        let convertedDistance = distanceInMeters / unitConversions[outputUnits];

        outputDistanceElement.value = convertedDistance;
    });
}
