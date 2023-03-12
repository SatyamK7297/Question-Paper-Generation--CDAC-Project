package com.app.service;


import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.UserNotFoundException;
import com.app.dto.LoginRequestDto;
import com.app.dto.UserResponse;
import com.app.entities.Course;
import com.app.entities.User;
import com.app.entities.UserRole;
import com.app.repository.CourseRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {


	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private UserRepository userRepo;
     
	@Autowired
	private ModelMapper mapper;

	@PostConstruct
	public void init() {
		System.out.println("in init " + mapper);
	}

	
	@Override
	public User registerUser(Long course_id,User user) {
		user.setRole(UserRole.valueOf("ROLE_STUDENT"));
		Course course = courseRepository.findById(course_id).orElseThrow();
         course.addUser(user);
		return user;
		
	}
	
	@Override
	public UserResponse authenticateUser(LoginRequestDto dto)  {
		User user = userRepo.findByEmailAndPassword(dto.getEmail(),dto.getPassword())
				.orElseThrow(()-> new UserNotFoundException("Wrong Credentials!!!"));
		return mapper.map(user, UserResponse.class);
	}


	@Override
	public User getUserByid(Long user_id) {
		
	    return userRepo.findById(user_id).orElseThrow(()-> new UserNotFoundException("User not found for provided id"));	
		
	}
}
