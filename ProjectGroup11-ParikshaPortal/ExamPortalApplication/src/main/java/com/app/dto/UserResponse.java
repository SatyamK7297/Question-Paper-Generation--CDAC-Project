package com.app.dto;



import com.app.entities.Course;
import com.app.entities.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class UserResponse {
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private UserRole role;	
	private Course course;
}
