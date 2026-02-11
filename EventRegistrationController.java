package com.example.ActivePulse.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.ActivePulse.Entity.EventRegistration;
import com.example.ActivePulse.Service.EventRegistrationService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/registration")
public class EventRegistrationController {

    @Autowired
    private EventRegistrationService service;

    @PostMapping("/save")
    public EventRegistration save(@RequestBody EventRegistration reg) {
        return service.save(reg);
    }

    @GetMapping("/all")
    public List<EventRegistration> getAll() {
        return service.getAll();
    }

    @GetMapping("/user/{userId}")
    public List<EventRegistration> getByUser(@PathVariable int userId) {
        return service.getByUser(userId);
    }

    @GetMapping("/event/{eventId}")
    public List<EventRegistration> getByEvent(@PathVariable int eventId) {
        return service.getByEvent(eventId);
    }
}
