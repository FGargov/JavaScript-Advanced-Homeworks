function encodeAndDecodeMessages() {
    const encodeButton = document.querySelector('button');
    const decodeButton = document.querySelectorAll('button')[1];
    const messageInput = document.querySelector('textarea');
    const receivedMessageArea = document.querySelectorAll('textarea')[1];

    encodeButton.addEventListener('click', function() {
        const message = messageInput.value;
        const encodedMessage = encodeMessage(message);
        messageInput.value = '';
        receivedMessageArea.value = encodedMessage;
    });

    decodeButton.addEventListener('click', function() {
        const encodedMessage = receivedMessageArea.value;
        const decodedMessage = decodeMessage(encodedMessage);
        receivedMessageArea.value = decodedMessage;
    });

    function encodeMessage(message) {
        // Replace this function with the actual encoding logic
        return message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    }

    function decodeMessage(encodedMessage) {
        // Replace this function with the actual decoding logic
        return encodedMessage.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    }
}


