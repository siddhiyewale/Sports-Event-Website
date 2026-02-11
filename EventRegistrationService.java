package com.example.ActivePulse.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ActivePulse.Entity.EventRegistration;
import com.example.ActivePulse.Repo.EventRegistrationRepo;

@Service
public class EventRegistrationService {

    @Autowired
    private EventRegistrationRepo repo;

    public EventRegistration save(EventRegistration reg) {
        return repo.save(reg);
    }

    public List<EventRegistration> getAll() {
        return repo.findAll();
    }

    public List<EventRegistration> getByEvent(int eventId) {
        return repo.findByEventId(eventId);
    }

    public List<EventRegistration> getByUser(int userId) {
        return repo.findByUserId(userId);
    }
}
