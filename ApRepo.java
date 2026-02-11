package com.example.ActivePulse.Repo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ActivePulse.Entity.ApEntity;

@Repository
public interface ApRepo extends JpaRepository<ApEntity, Integer>{

    List<ApEntity> findByEventDateGreaterThanEqual(LocalDate date);

	
	List<ApEntity> findByCategoryIgnoreCase(String type);
	
}
