package com.example.ActivePulse.Entity;

public class RegistrationRequest {

    private String name;
    private String email;
    private String eventName;
    private String city;
    private String eventDate;
    private String startTime;   
    private String endTime; 
    private double amount;
    private String paymentId;
	public String getName() {
		return name;
	}
	
	
	
	
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public String getEventDate() {
		return eventDate;
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
	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}




	@Override
	public String toString() {
		return "RegistrationRequest [name=" + name + ", email=" + email + ", eventName=" + eventName + ", city=" + city
				+ ", eventDate=" + eventDate + ", startTime=" + startTime + ", endTime=" + endTime + ", amount="
				+ amount + ", paymentId=" + paymentId + ", getName()=" + getName() + ", getEmail()=" + getEmail()
				+ ", getEventName()=" + getEventName() + ", getCity()=" + getCity() + ", getEventDate()="
				+ getEventDate() + ", getStartTime()=" + getStartTime() + ", getEndTime()=" + getEndTime()
				+ ", getAmount()=" + getAmount() + ", getPaymentId()=" + getPaymentId() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}




	public RegistrationRequest(String name, String email, String eventName, String city, String eventDate,
			String startTime, String endTime, double amount, String paymentId) {
		super();
		this.name = name;
		this.email = email;
		this.eventName = eventName;
		this.city = city;
		this.eventDate = eventDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.amount = amount;
		this.paymentId = paymentId;
	}




	public RegistrationRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
