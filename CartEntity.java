package com.example.ActivePulse.Entity;

import java.applet.AudioClip;
import java.time.Instant;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@EntityListeners(AuditingEntityListener.class)
public class CartEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Integer id;
	private Integer quantity =1;
	
	@CreatedDate
	private Instant addeon;
	
	@LastModifiedDate
	private Instant updatedon;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties({"password","role","cart"})
	private UserEntity user;
	
	@ManyToOne
	@JoinColumn(name = "event_id")
	private ApEntity events;

	
	public ApEntity getEvents() {
	    return events;
	}
	
	public void setEvents(ApEntity events) {
	    this.events = events;
	}
	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Instant getAddeon() {
		return addeon;
	}

	public void setAddeon(Instant addeon) {
		this.addeon = addeon;
	}

	public Instant getUpdatedon() {
		return updatedon;
	}

	public void setUpdatedon(Instant updatedon) {
		this.updatedon = updatedon;
	}

	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

	public ApEntity getevents() {
		return events;
	}

	public void setPet(ApEntity event) {
		this.events = events;
	}

	@Override
	public String toString() {
		return "CartEntity [id=" + id + ", quantity=" + quantity + ", addeon=" + addeon + ", updatedon=" + updatedon
				+ ", user=" + user + ", event=" + events + ", getId()=" + getId() + ", getQuantity()=" + getQuantity()
				+ ", getAddeon()=" + getAddeon() + ", getUpdatedon()=" + getUpdatedon() + ", getUser()=" + getUser()
				+ ", getevent()=" + getevents() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}

	private String getevent() {
		// TODO Auto-generated method stub
		return null;
	}

	public CartEntity(Integer id, Integer quantity, Instant addeon, Instant updatedon, UserEntity user, ApEntity event) {
		super();
		this.id = id;
		this.addeon = addeon;
		this.updatedon = updatedon;
		this.user = user;
		this.events = event;
	}

	public CartEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setevent(ApEntity event) {
		// TODO Auto-generated method stub
		
	}
	
	
	
	

}
