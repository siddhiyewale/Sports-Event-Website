package com.example.ActivePulse.Entity;

import java.time.LocalDate;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
public class ApEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Event name is required")
    private String eventName;

    @NotBlank(message = "City is required")
    private String city;

    @NotBlank(message = "State is required")
    private String state;

    @NotBlank(message = "Category is required")
    private String category;

    @NotNull(message = "Event date is required")
    @FutureOrPresent(message = "Event date cannot be in the past")
    private LocalDate eventDate;

    @NotBlank(message = "Start time is required")
    private String startTime;

    @NotBlank(message = "End time is required")
    private String endTime;

    @PositiveOrZero(message = "Registration fee cannot be negative")
    private double registrationFee;

    @NotBlank(message = "Organizer name is required")
    private String organizerName;

    @NotNull(message = "Organizer contact is required")
    @Digits(integer = 10, fraction = 0, message = "Contact must be 10 digits")
    private long organizerContact;

    @NotBlank(message = "Organizer email is required")
    @Email(message = "Invalid email format")
    private String organizerEmail;

    @Min(value = 1, message = "Max participants must be at least 1")
    private int maxParticipants;

    @Min(value = 0, message = "Total registered cannot be negative")
    private int totalRegistered;

    @NotBlank(message = "Image URL is required")
    private String imageUrl;

    @NotNull(message = "Registration status is required")
    private Boolean isRegistrationOpen;

    @NotNull(message = "Certificate status is required")
    private Boolean isCertificateEnabled;

    @CreatedDate
    private String createdAt;

    @LastModifiedDate
    private String updatedAt;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public LocalDate getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public double getRegistrationFee() {
        return registrationFee;
    }

    public void setRegistrationFee(double registrationFee) {
        this.registrationFee = registrationFee;
    }

    public String getOrganizerName() {
        return organizerName;
    }

    public void setOrganizerName(String organizerName) {
        this.organizerName = organizerName;
    }

    public long getOrganizerContact() {
        return organizerContact;
    }

    public void setOrganizerContact(long organizerContact) {
        this.organizerContact = organizerContact;
    }

    public String getOrganizerEmail() {
        return organizerEmail;
    }

    public void setOrganizerEmail(String organizerEmail) {
        this.organizerEmail = organizerEmail;
    }

    public int getMaxParticipants() {
        return maxParticipants;
    }

    public void setMaxParticipants(int maxParticipants) {
        this.maxParticipants = maxParticipants;
    }

    public int getTotalRegistered() {
        return totalRegistered;
    }

    public void setTotalRegistered(int totalRegistered) {
        this.totalRegistered = totalRegistered;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    /* 🔥 FIXED: Boolean getters & setters (NO primitive boolean) */
    public Boolean getIsRegistrationOpen() {
        return isRegistrationOpen;
    }

    public void setIsRegistrationOpen(Boolean isRegistrationOpen) {
        this.isRegistrationOpen = isRegistrationOpen;
    }

    public Boolean getIsCertificateEnabled() {
        return isCertificateEnabled;
    }

    public void setIsCertificateEnabled(Boolean isCertificateEnabled) {
        this.isCertificateEnabled = isCertificateEnabled;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    // ================= CONSTRUCTORS =================

    public ApEntity() {
        super();
    }

    public ApEntity(
            int id,
            String eventName,
            String city,
            String state,
            String category,
            LocalDate eventDate,
            String startTime,
            String endTime,
            double registrationFee,
            String organizerName,
            long organizerContact,
            String organizerEmail,
            int maxParticipants,
            int totalRegistered,
            String imageUrl,
            Boolean isRegistrationOpen,
            Boolean isCertificateEnabled,
            String createdAt,
            String updatedAt) {

        this.id = id;
        this.eventName = eventName;
        this.city = city;
        this.state = state;
        this.category = category;
        this.eventDate = eventDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.registrationFee = registrationFee;
        this.organizerName = organizerName;
        this.organizerContact = organizerContact;
        this.organizerEmail = organizerEmail;
        this.maxParticipants = maxParticipants;
        this.totalRegistered = totalRegistered;
        this.imageUrl = imageUrl;
        this.isRegistrationOpen = isRegistrationOpen;
        this.isCertificateEnabled = isCertificateEnabled;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

	    
	    
		
}
