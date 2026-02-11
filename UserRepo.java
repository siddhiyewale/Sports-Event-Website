package com.example.ActivePulse.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ActivePulse.Entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Integer> {

	UserEntity findByEmailAndPassword(String email, String password);

}
