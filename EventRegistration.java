package com.example.ActivePulse.Entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
public class EventRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int userId;
    private int eventId;

    private String name;
    private int age;
    private String gender;
    private String email;
    private String phone;

    private String paymentId;
    private double amount;

    private LocalDate registeredOn = LocalDate.now();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public LocalDate getRegisteredOn() {
		return registeredOn;
	}

	public void setRegisteredOn(LocalDate registeredOn) {
		this.registeredOn = registeredOn;
	}

	@Override
	public String toString() {
		return "EventRegistration [id=" + id + ", userId=" + userId + ", eventId=" + eventId + ", name=" + name
				+ ", age=" + age + ", gender=" + gender + ", email=" + email + ", phone=" + phone + ", paymentId="
				+ paymentId + ", amount=" + amount + ", registeredOn=" + registeredOn + ", getId()=" + getId()
				+ ", getUserId()=" + getUserId() + ", getEventId()=" + getEventId() + ", getName()=" + getName()
				+ ", getAge()=" + getAge() + ", getGender()=" + getGender() + ", getEmail()=" + getEmail()
				+ ", getPhone()=" + getPhone() + ", getPaymentId()=" + getPaymentId() + ", getAmount()=" + getAmount()
				+ ", getRegisteredOn()=" + getRegisteredOn() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}

	public EventRegistration(int id, int userId, int eventId, String name, int age, String gender, String email,
			String phone, String paymentId, double amount, LocalDate registeredOn) {
		super();
		this.id = id;
		this.userId = userId;
		this.eventId = eventId;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.email = email;
		this.phone = phone;
		this.paymentId = paymentId;
		this.amount = amount;
		this.registeredOn = registeredOn;
	}

	public EventRegistration() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
