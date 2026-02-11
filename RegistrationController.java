package com.example.ActivePulse.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ActivePulse.Entity.RegistrationRequest;
import com.example.ActivePulse.Service.EmailService;

@RestController
@RequestMapping("/registration")
@CrossOrigin(origins = "*")
public class RegistrationController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/confirm")
    public String confirmRegistration(@RequestBody RegistrationRequest req) {

        String subject = "Event Registration Confirmed 🎉 | Active Pulse";

        String message =
            "Hi " + req.getName() + ",\n\n" +
            "Your registration for the event has been confirmed successfully ✅\n\n" +
            "📌 Event Name: " + req.getEventName() + "\n" +
            "📍 Location: " + req.getCity() + "\n" +
            "📅 Date: " + req.getEventDate() + "\n" +
            "💰 Amount Paid: ₹" + req.getAmount() + "\n\n" +
            "Payment ID: " + req.getPaymentId() + "\n\n" +
            "We look forward to seeing you at the event!\n\n" +
            "Stay Active,\n" +
            "Team Active Pulse";

        emailService.sendEmail(req.getEmail(), subject, message);

        return "Registration confirmed & email sent";
    }
}
