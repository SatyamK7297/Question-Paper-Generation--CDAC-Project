package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Course;
import com.app.service.CourseService;

@RestController
@RequestMapping("/course")
@Validated
@CrossOrigin("http://localhost:3000")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	public CourseController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@GetMapping
	public List<Course> getAllCourses(){
		System.out.println("in getAllQuestionBySubject controller method");
		return courseService.getAllCourses();
	}
	
	@PostMapping
	public void addCourse(@RequestBody Course course) {
		System.out.println("in addCourse controller method");
		courseService.addCourse(course);
	}
}
