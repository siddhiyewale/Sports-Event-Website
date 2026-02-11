package com.example.ActivePulse.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ActivePulse.Entity.ApEntity;
import com.example.ActivePulse.Service.ApService;

import jakarta.validation.Valid;

@RequestMapping("/ap")
@RestController
@CrossOrigin(origins = "*")

public class ApController {

	@Autowired
	private ApService as;
	
	
	@GetMapping("/getall")
    public List<ApEntity> getall() {
        return as.getalldata();
    }

    
    	
    @PostMapping("/add")
    public String add(@Valid @RequestBody ApEntity ap) {
        as.adddata(ap);
        return "Data Added Successfully!";
    }

    
    
    @DeleteMapping("/deleteby/{id}")
    public String delete(@PathVariable int id) {
        as.deletebyid(id);
        return "Data Deleted Successfully!";
    }

    
    
    @PutMapping("/update/{id}")
    public ApEntity update(@PathVariable int id, @Valid @RequestBody ApEntity ap) {
        return as.updatebyid(id, ap);
    }

    
    
    @PatchMapping("/patch/{id}")
    public ApEntity patch(@PathVariable int id, @Valid @RequestBody ApEntity ap) {
        return as.patchbyid(id, ap);
    }
    
    
    @GetMapping("/category/{type}")
    public List<ApEntity> getByCategory(@PathVariable String type) {
        return as.getByCategory(type);
    }

    @GetMapping("/upcoming")
    public List<ApEntity> getUpcomingEvents() {	
        return as.getUpcomingEvents();
    }

    @GetMapping("/get/{id}")
    public ApEntity getById(@PathVariable int id) {
        return as.getById(id);
    }

    
    @PatchMapping("/update-images")
    public String updateImages(@RequestBody List<Map<String, Object>> updates) {
        updates.forEach(u -> {
            int id = (int) u.get("id");
            String imageUrl = (String) u.get("imageUrl");
            as.updateImage(id, imageUrl);
        });
        return "Images updated";
    }


}
