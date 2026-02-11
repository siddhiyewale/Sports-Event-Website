package com.example.ActivePulse.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ActivePulse.Entity.WishlistEntity;

public interface WishlistRepo extends JpaRepository<WishlistEntity, Integer> {

    List<WishlistEntity> findByUser_Id(int userId);

    boolean existsByUser_IdAndEvent_Id(int userId, int eventId);
}
