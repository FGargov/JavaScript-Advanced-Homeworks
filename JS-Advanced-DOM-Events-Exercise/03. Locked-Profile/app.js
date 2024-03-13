function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const showMoreButton = profile.querySelector('button');
        const hiddenFieldsDiv = profile.querySelector('div');
        const unlockInput = profile.querySelector('input[type="radio"][value="unlock"]');

        showMoreButton.addEventListener('click', function() {
            if (unlockInput.checked) {
                if (hiddenFieldsDiv.style.display === 'block') {
                    hiddenFieldsDiv.style.display = 'none';
                    showMoreButton.textContent = 'Show more';
                } else {
                    hiddenFieldsDiv.style.display = 'block';
                    showMoreButton.textContent = 'Hide';
                }
            }
        });
    });
}

