package com.yashvant.emailpickz.controller;
import com.yashvant.emailpickz.model.EmailRequest;
import com.yashvant.emailpickz.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/sendEmail")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        String from = emailRequest.getFrom();
        String to = "pickz.2023@gmail.com";
        String subject = emailRequest.getSubject();
        String message = emailRequest.getMessage();

        emailService.sendEmail(from, to, subject, message);

        return "Email sent successfully!";
    }
}
