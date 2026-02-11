package com.example.ActivePulse.Service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ActivePulse.Controller.UserController;
import com.example.ActivePulse.Entity.ApEntity;
import com.example.ActivePulse.Entity.CartEntity;
import com.example.ActivePulse.Entity.UserEntity;
import com.example.ActivePulse.Repo.ApRepo;
import com.example.ActivePulse.Repo.CartRepo;
import com.example.ActivePulse.Repo.UserRepo;


@Service
public class CartService {


	@Autowired
	private CartRepo cr;
	
	@Autowired
	private UserRepo ur;
	
	@Autowired
	private UserController uc;
	
	@Autowired
	private ApRepo pr;

	
	public List<CartEntity> getAllItems() {
		// TODO Auto-generated method stub
		return cr.findAll();
	}

//	public void additem(CartEntity ct) {
//		
//		cr.save(ct);
//	}

	public Optional<CartEntity> getbyid(int id) {
		// TODO Auto-generated method stub
		return cr.findById(id);
	}

	public void deletebyid(int id) {
		// TODO Auto-generated method stub
		cr.deleteById(id);
	}

	public CartEntity updateitembyid(int id, CartEntity ct) {

		Optional<CartEntity> so=cr.findById(id);
		if(so.isPresent())
		{
			CartEntity se=so.get();
//			se.setQuantity(ct.getQuantity());
			se.setAddeon(ct.getAddeon());
			se.setUpdatedon(ct.getUpdatedon());
			
			
			
			
			cr.save(se);
			return se;
			
		}
		
		
		return null;
	}

	public CartEntity patchbyid(int id, CartEntity ct) {
		// TODO Auto-generated method stub
		
		Optional<CartEntity> so = cr.findById(id);
		if(so.isPresent()){
			CartEntity se = so.get();
//			if(ct.getQuantity()!=null)
//			{
//				se.setQuantity(ct.getQuantity());
//				
//			}
			if(ct.getAddeon()!=null) {
				se.setAddeon(ct.getAddeon());
			}
			if(ct.getUpdatedon()!=null) {
				se.setUpdatedon(ct.getUpdatedon());
				
		}
			
			cr.save(se);
			return se;
	}

		return null;
	}

	public List<CartEntity> getCartbyUserId(int id) {
		return cr.findByUserId(id);
	}

	

	public CartEntity additem(int userid, int eventid) {
		UserEntity user = ur.findById(userid).orElseThrow(() -> new RuntimeException("User not found"));
		ApEntity event = pr.findById(eventid).orElseThrow(() -> new RuntimeException("Event not found"));
		
		
		CartEntity existingItem = CartRepo.findByUSerAndEvent(user, event);
		
//		if(existingItem != null ) {
//			existingItem.setQuantity(existingItem.getQuantity()+quantity);
//			return cr.save(existingItem);
//		}
		
		CartEntity newCartItem = new CartEntity();
		newCartItem.setUser(user);
		newCartItem.setevent(event);
//		newCartItem.setQuantity(quantity);
		return cr.save(newCartItem);

	}

}