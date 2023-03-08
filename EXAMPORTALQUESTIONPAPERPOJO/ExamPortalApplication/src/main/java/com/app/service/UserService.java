package com.app.service;



import com.app.dto.LoginRequestDto;
import com.app.dto.UserResponse;
import com.app.entities.User;

public interface UserService {
   
	public User registerUser(Long course_id,User user);
	public UserResponse authenticateUser(LoginRequestDto dto);
//	public List<User> getAllUsers();
	

}
