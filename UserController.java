package com.example.ActivePulse.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ActivePulse.Entity.UserEntity;
import com.example.ActivePulse.Repo.UserRepo;
import com.example.ActivePulse.Service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")

public class UserController {

	@Autowired
	private UserService us;


    @GetMapping("/getall")
	public List<UserEntity> getalluser() {
		return us.getalluser	();
	}

    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getById(@PathVariable int id) {
        Optional<UserEntity> user = us.getUserById(id);

        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(user.get());
    }

    @PostMapping("/add")
    public ResponseEntity<String> addUser(@Valid @RequestBody UserEntity user) {
        user.setRole("USER"); 
        us.addUser(user);
        return ResponseEntity.ok("User Added Successfully!");
    }



    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {
        boolean deleted = us.deleteUser(id);

        if (!deleted) {
            return ResponseEntity.badRequest().body("User not found!");
        }

        return ResponseEntity.ok("User Deleted Successfully!");
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<UserEntity> updateUser(
            @PathVariable int id,
            @Valid @RequestBody UserEntity userData) {

        UserEntity updated = us.updateUser(id, userData);

        if (updated == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(updated);
    }


    @PatchMapping("/patch/{id}")
    public ResponseEntity<UserEntity> patchUser(
            @PathVariable int id,
            @RequestBody UserEntity userData) {

        UserEntity patched = us.patchUser(id, userData);

        if (patched == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(patched);
    }




//    @GetMapping("/login")
//    public ResponseEntity<UserEntity> login(
//            @RequestParam String email,
//            @RequestParam String password,
//            HttpServletRequest request) {
//
//        Optional<UserEntity> userOpt = us.getUserByEmailAndPass(email, password);
//        if (userOpt.isEmpty()) {
//            return ResponseEntity.status(401).body(null); // invalid credentials
//        }
//
//        UserEntity user = userOpt.get();
//
//        // Store user in session
//        request.getSession().setAttribute("user", user);
//
//        return ResponseEntity.ok(user);
//    }


    
    @GetMapping("/login")
    public ResponseEntity<UserEntity> login(
            @RequestParam String email,
            @RequestParam String password,
            HttpServletRequest request) {

        Optional<UserEntity> userOpt = us.getUserByEmailAndPass(email, password);

        if (userOpt.isEmpty()) {
            return ResponseEntity.status(401).body(null);
        }

        UserEntity user = userOpt.get();

        if (Boolean.TRUE.equals(user.isBlocked())) {
            return ResponseEntity.status(403).body(null);
        }

        request.getSession().setAttribute("user", user);

        return ResponseEntity.ok(user);
    }


    
}



