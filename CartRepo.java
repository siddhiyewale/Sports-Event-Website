package com.example.ActivePulse.Repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ActivePulse.Entity.ApEntity;
import com.example.ActivePulse.Entity.CartEntity;
import com.example.ActivePulse.Entity.UserEntity;

public interface CartRepo extends JpaRepository<CartEntity, Integer>{

	List<CartEntity> findByUserId(int userid);

	static CartEntity findByUSerAndEvent(UserEntity user, ApEntity event) {
		return null;
	}


}
