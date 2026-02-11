package com.example.ActivePulse.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ActivePulse.Entity.ApEntity;
import com.example.ActivePulse.Entity.UserEntity;
import com.example.ActivePulse.Entity.WishlistEntity;
import com.example.ActivePulse.Repo.ApRepo;
import com.example.ActivePulse.Repo.UserRepo;
import com.example.ActivePulse.Repo.WishlistRepo;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepo wr;

    @Autowired
    private UserRepo ur;

    @Autowired
    private ApRepo ar;

    public void addToWishlist(int userId, int eventId) {

        if (wr.existsByUser_IdAndEvent_Id(userId, eventId)) {
            return;
        }

        UserEntity user = ur.findById(userId).orElse(null);
        ApEntity event = ar.findById(eventId).orElse(null);

        if (user != null && event != null) {
            WishlistEntity w = new WishlistEntity(user, event);
            wr.save(w);
        }
    }

    public List<WishlistEntity> getWishlistByUser(int userId) {
        return wr.findByUser_Id(userId);
    }

    public void deleteById(int id) {
        wr.deleteById(id);
    }
}
