package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequestDto;

import com.app.entities.User;

import com.app.service.UserService;

@RestController
@RequestMapping("/user")
@Validated
@CrossOrigin("http://localhost:3000")
public class UserController {
    
	@Autowired
	private UserService userService;
	
	public UserController() {
		System.out.println("in ctor of " + getClass());
	}
	
	
	@PostMapping("/signup/{course_id}")
	public User saveUserDetails(@PathVariable long course_id,@RequestBody @Valid User transientUser) {
		System.out.println("in save user method of userController");//
		return userService.registerUser(course_id,transientUser);

	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> validateUser(@RequestBody @Valid LoginRequestDto dto) {
		System.out.println("in user signin " + dto);
		return ResponseEntity.ok(userService.authenticateUser(dto));

	}
}
