package com.example.ActivePulse.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
public class WishlistEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({"password", "contact", "dob", "city", "createdAt", "updatedAt"})
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "event_id")
    @JsonIgnoreProperties({"totalRegistered", "organizerContact", "organizerEmail", "createdAt", "updatedAt"})

    private ApEntity event;

    public WishlistEntity() {}

    public WishlistEntity(UserEntity user, ApEntity event) {
        this.user = user;
        this.event = event;
    }

    public int getId() {
        return id;
    }

    public UserEntity getUser() {
        return user;
    }

    public ApEntity getEvent() {
        return event;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public void setEvent(ApEntity event) {
        this.event = event;
    }
}
