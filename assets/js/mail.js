const express = require('express');
const bodyParser = require('body-parser');
const Brevo = require('@getbrevo/brevo');

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));

// Configure Brevo API key
const defaultClient = Brevo.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '8fO3U41wRJpZTEhW';

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    const apiInstance = new Brevo.TransactionalEmailsApi();
    const sendSmtpEmail = new Brevo.SendSmtpEmail({
        sender: { email: 'brevo@brevo.com', name: 'Brevo' },
        subject: subject || 'Default Subject',
        htmlContent: `<p>${message || 'Default Message'}</p>`,
        messageVersions: [
            {
                to: [
                    { email, name }
                ],
                htmlContent: `<p>${message || 'Default Message'}</p>`,
                subject: subject || 'Default Subject'
            }
        ]
    });

    apiInstance.sendTransacEmail(sendSmtpEmail)
        .then(data => res.send('Email sent successfully'))
        .catch(error => res.status(500).send('Error sending email'));
});

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});