document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('your_service_id', 'your_template_id', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});