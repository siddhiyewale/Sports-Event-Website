package com.example.ActivePulse.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.ActivePulse.Entity.WishlistEntity;
import com.example.ActivePulse.Service.WishlistService;

@RestController
@RequestMapping("/wishlist")
@CrossOrigin(origins = "*")
public class WishlistController {

    @Autowired
    private WishlistService ws;

    @PostMapping("/add")
    public String add(
            @RequestParam int userid,
            @RequestParam int eventid) {

        ws.addToWishlist(userid, eventid);
        return "Added to wishlist";
    }

    @GetMapping("/user/{userid}")
    public List<WishlistEntity> getByUser(@PathVariable int userid) {
        return ws.getWishlistByUser(userid);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        ws.deleteById(id);
        return "Removed from wishlist";
    }
}
