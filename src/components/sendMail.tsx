import React from 'react'
import emailjs from '@emailjs/browser';
import { ContactProps } from '../types';

emailjs.init('service_n4895xg');

function sendMail(data: ContactProps) {
    const templateParams = {
        from_name: data.Name,
        from_email: data.Email,
        message: data.Message,
    };

    emailjs
        .send('service_n4895xg', 'template_tn80jia', templateParams)
        .then(
            function (response) {
                console.log('Email sent successfully:', response);
                // Add any success message or further actions here
            },
            function (error) {
                console.error('Email failed to send:', error);
                // Add any error handling here
            }
        );
}

export default sendMail