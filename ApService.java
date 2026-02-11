package com.example.ActivePulse.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ActivePulse.Entity.ApEntity;
import com.example.ActivePulse.Repo.ApRepo;

import jakarta.validation.Valid;

@Service
public class ApService {

	
	@Autowired ApRepo ar;

	public List<ApEntity> getalldata() {
		return ar.findAll();
	}

	public void adddata(@Valid ApEntity ap) {
		 ar.save(ap);		
	}	

	public void deletebyid(int id) {

		ar.deleteById(id);
	}
	

	public ApEntity updatebyid(int id, @Valid ApEntity ap) {

		Optional<ApEntity> op = ar.findById(id);

        if (op.isPresent()) {
            ApEntity existing = op.get();

            existing.setEventName(ap.getEventName());
            existing.setCity(ap.getCity());
            existing.setState(ap.getState());
            existing.setCategory(ap.getCategory());
            existing.setEventDate(ap.getEventDate());

            existing.setStartTime(ap.getStartTime());
            existing.setEndTime(ap.getEndTime());

            existing.setRegistrationFee(ap.getRegistrationFee());

            existing.setOrganizerName(ap.getOrganizerName());
            existing.setOrganizerContact(ap.getOrganizerContact());
            existing.setOrganizerEmail(ap.getOrganizerEmail());

            existing.setMaxParticipants(ap.getMaxParticipants());
            existing.setTotalRegistered(ap.getTotalRegistered());

            existing.setImageUrl(ap.getImageUrl()); 

            existing.setIsRegistrationOpen(ap.getIsRegistrationOpen());
            existing.setIsCertificateEnabled(ap.getIsCertificateEnabled());
            
            
            ar.save(existing);
            return existing;
        }
        return null;
	}

	public ApEntity patchbyid(int id, @Valid ApEntity ap) {

		 Optional<ApEntity> op = ar.findById(id);

	        if (op.isPresent()) {
	            ApEntity existing = op.get();

	            if (ap.getEventName() != null)
	                existing.setEventName(ap.getEventName());

	            if (ap.getCity() != null)
	                existing.setCity(ap.getCity());

	            if (ap.getEventDate() != null)
	                existing.setEventDate(ap.getEventDate());

	            if (ap.getCategory() != null)
	                existing.setCategory(ap.getCategory());

	            if (ap.getRegistrationFee() != 0)
	                existing.setRegistrationFee(ap.getRegistrationFee());

	            ar.save(existing);
	            return existing;
	        }
	        return null;
	        
	    }
	
	public List<ApEntity> getByCategory(String type) {
	    return ar.findByCategoryIgnoreCase(type); // ✅ use 'type', not 'category'
	}

	public List<ApEntity> getUpcomingEvents() {
		 return ar.findByEventDateGreaterThanEqual(LocalDate.now());
	}

	public ApEntity getById(int id) {
		return ar.findById(id)
	             .orElseThrow(() -> new RuntimeException("Event not found"));
		}


	public void updateImage(int id, String imageUrl) {
	    ApEntity event = ar.findById(id).orElseThrow();
	    event.setImageUrl(imageUrl);
	    ar.save(event);
	}

}
