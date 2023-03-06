package com.app.dto;



import com.app.entities.Course;

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
	private String firstName;
	private String lastName;

	private String email;

	private String phone;
    

	
	private Course course;
}
