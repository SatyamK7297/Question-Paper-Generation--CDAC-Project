package com.app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Course;
import com.app.services.CourseService;
import lombok.NoArgsConstructor;


@RestController
@RequestMapping("/course")
@CrossOrigin("http://localhost:3000")
public class CourseController {
	
	
    public CourseController() {
		System.out.println("in course controller");
	}

	@Autowired
	private CourseService courseService;
    
    @GetMapping
    public List<Course> getAllCourse(){
    	return courseService.getAllCourse();
    }
    
    @PostMapping
    
    public void addCourse(@RequestBody Course course) {
    	courseService.addCourse(course);
    }
	
}
