function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);

    function convertDays() {
        const days = parseFloat(daysInput.value);
        hoursInput.value = (days * 24).toFixed(2);
        minutesInput.value = (days * 1440).toFixed(2);
        secondsInput.value = (days * 86400).toFixed(2);
    }

    function convertHours() {
        const hours = parseFloat(hoursInput.value);
        daysInput.value = (hours / 24).toFixed(2);
        minutesInput.value = (hours * 60).toFixed(2);
        secondsInput.value = (hours * 3600).toFixed(2);
    }

    function convertMinutes() {
        const minutes = parseFloat(minutesInput.value);
        daysInput.value = (minutes / 1440).toFixed(2);
        hoursInput.value = (minutes / 60).toFixed(2);
        secondsInput.value = (minutes * 60).toFixed(2);
    }

    function convertSeconds() {
        const seconds = parseFloat(secondsInput.value);
        daysInput.value = (seconds / 86400).toFixed(2);
        hoursInput.value = (seconds / 3600).toFixed(2);
        minutesInput.value = (seconds / 60).toFixed(2);
    }
}
