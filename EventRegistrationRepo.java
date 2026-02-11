package com.example.ActivePulse.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ActivePulse.Entity.EventRegistration;

@Repository
public interface EventRegistrationRepo
        extends JpaRepository<EventRegistration, Integer> {

    List<EventRegistration> findByEventId(int eventId);

    List<EventRegistration> findByUserId(int userId);
}
