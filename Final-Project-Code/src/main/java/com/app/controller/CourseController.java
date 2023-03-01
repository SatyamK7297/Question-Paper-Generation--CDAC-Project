package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Course;
import com.app.service.CourseService;

@RestController
@RequestMapping("/course")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	public CourseController() {
		System.out.println("Course Controller");
	}
	
	@GetMapping
	public List<Course> getCourse(){
		System.out.println("In get course");
		return courseService.getCourse();
	}
	
	@PostMapping
	public void addCourse(@RequestBody Course course) {
		courseService.addCourse(course);
	}
}
