package com.example.ActivePulse.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.ActivePulse.Entity.UserEntity;
import com.example.ActivePulse.Repo.UserRepo;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private UserRepo userRepo;

    @PutMapping("/block/{id}")
    public String blockUser(@PathVariable int id) {
        UserEntity user = userRepo.findById(id).orElseThrow();
        user.setBlocked(true);
        userRepo.save(user);
        return "User blocked";
    }

    @PutMapping("/unblock/{id}")
    public String unblockUser(@PathVariable int id) {
        UserEntity user = userRepo.findById(id).orElseThrow();
        user.setBlocked(false);
        userRepo.save(user);
        return "User unblocked";
    }
}
