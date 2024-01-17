package com.yashvant.emailpickz.model;

public class EmailRequest {

    private String from;
    private String subject;
    private String message;

    // getters and setters

    public EmailRequest(String from, String subject, String message) {
        this.from = from;
        this.subject = subject;
        this.message = message;
    }

    public String getFrom() {
        return from;
    }

    public String getSubject() {
        return subject;
    }

    public String getMessage() {
        return message;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

