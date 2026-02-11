package com.example.ActivePulse.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ActivePulse.Entity.UserEntity;
import com.example.ActivePulse.Repo.UserRepo;

import jakarta.validation.Valid;
@Service
public class UserService {

	@Autowired
	private UserRepo ur;
	
	 
	 @Autowired
		private EmailService emailService;

	 public List<UserEntity> getalluser() {
	        return ur.findAll();
	    }


	    public void addUser(@Valid UserEntity user) {
	        ur.save(user);
	        
	        String subject = "Welcome to Active Pulse 🏃‍♀️🔥";

	        String message =
	            "Hi " + user.getName() + ",\n\n" +
	            "Welcome to Active Pulse! 🎉\n\n" +
	            "You have successfully registered on our platform.\n" +
	            "Discover exciting marathons, treks, and sports events across India.\n\n" +
	            "Get ready to push your limits and stay active 💪\n\n" +
	            "Regards,\n" +
	            "Team Active Pulse";

	        emailService.sendEmail(user.getEmail(), subject, message);


	    }


	    public boolean deleteUser(int id) {
	        if (ur.existsById(id)) {
	            ur.deleteById(id);
	            return true;
	        }
	        return false;
	    }

	    public Optional<UserEntity> getUserById(int id) {
	        return ur.findById(id);
	    }

	    public UserEntity updateUser(int id, @Valid UserEntity newData) {

	        Optional<UserEntity> op = ur.findById(id);

	        if (op.isPresent()) {
	            UserEntity existing = op.get();

	            existing.setName(newData.getName());
	            existing.setEmail(newData.getEmail());
	            existing.setPassword(newData.getPassword());
	            existing.setContact(newData.getContact());
	            existing.setRole(newData.getRole());

	            ur.save(existing);
	            return existing;
	        }

	        return null;
	    }


	    public UserEntity patchUser(int id, UserEntity newData) {

	        Optional<UserEntity> op = ur.findById(id);

	        if (op.isPresent()) {
	            UserEntity existing = op.get();

	            if (newData.getName() != null) {
	                existing.setName(newData.getName());
	            }
	            if (newData.getEmail() != null) {
	                existing.setEmail(newData.getEmail());
	            }
	            if (newData.getPassword() != null) {
	                existing.setPassword(newData.getPassword());
	            }
	            if (newData.getContact() != null) {
	                existing.setContact(newData.getContact());
	            }
	            if (newData.getRole() != null) {
	                existing.setRole(newData.getRole());
	            }

	            ur.save(existing);
	            return existing;
	        }

	        return null;
	    }


	    public Optional<UserEntity> getUserByEmailAndPass(String email, String password) {

	        UserEntity user = ur.findByEmailAndPassword(email, password);

	        if (user == null) {
	            return Optional.empty();
	        }

	        return Optional.of(user);
	    }
	
}
