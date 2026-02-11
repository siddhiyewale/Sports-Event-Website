package com.example.ActivePulse.Entity;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

@Entity
@EntityListeners(AuditingEntityListener.class)
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Invalid email format. Email must contain @")
    private String email;

    @NotBlank(message = "Contact is mandatory")
    @Pattern(regexp = "^[0-9]{10}$",message = "Contact must be a 10-digit number")
    private String contact;

    @NotBlank(message = "Password is mandatory")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$",
    		message = "Password must be at least 8 characters long, contain 1 uppercase letter and 1 special character")
    private String password;


    @NotBlank(message = "Gender is mandatory")
    private String gender;

    @NotBlank(message = "Date of Birth is mandatory")
    private String dob;

    @NotBlank(message = "City is mandatory")
    private String city;

    
    private String role;  
    
    private boolean isBlocked = false;

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

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	 public boolean isBlocked() {
	        return isBlocked;
	 }

	 public void setBlocked(boolean blocked) {
	        isBlocked = blocked;
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

	

	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", name=" + name + ", email=" + email + ", contact=" + contact + ", password="
				+ password + ", gender=" + gender + ", dob=" + dob + ", city=" + city + ", role=" + role
				+ ", isBlocked=" + isBlocked + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + ", getId()="
				+ getId() + ", getName()=" + getName() + ", getEmail()=" + getEmail() + ", getContact()=" + getContact()
				+ ", getPassword()=" + getPassword() + ", getGender()=" + getGender() + ", getDob()=" + getDob()
				+ ", getCity()=" + getCity() + ", getRole()=" + getRole() + ", isBlocked()=" + isBlocked()
				+ ", getCreatedAt()=" + getCreatedAt() + ", getUpdatedAt()=" + getUpdatedAt() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	

	public UserEntity(int id, @NotBlank(message = "Name is mandatory") String name,
			@NotBlank(message = "Email is mandatory") @Email(message = "Invalid email format. Email must contain @") String email,
			@NotBlank(message = "Contact is mandatory") @Pattern(regexp = "^[0-9]{10}$", message = "Contact must be a 10-digit number") String contact,
			@NotBlank(message = "Password is mandatory") @Pattern(regexp = "^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$", message = "Password must be at least 8 characters long, contain 1 uppercase letter and 1 special character") String password,
			@NotBlank(message = "Gender is mandatory") String gender,
			@NotBlank(message = "Date of Birth is mandatory") String dob,
			@NotBlank(message = "City is mandatory") String city, String role, boolean isBlocked, String createdAt,
			String updatedAt) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.contact = contact;
		this.password = password;
		this.gender = gender;
		this.dob = dob;
		this.city = city;
		this.role = role;
		this.isBlocked = isBlocked;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public UserEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


}