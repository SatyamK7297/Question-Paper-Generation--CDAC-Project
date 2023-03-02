package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Course;
import com.app.pojos.Subject;
import com.app.services.SubjectService;

@RestController
@RequestMapping("/course/subject")
public class SubjectController {
    @Autowired
	private SubjectService subjectService;
	
	@PostMapping("/{courseId}")
	public void addSubject(@RequestBody Subject subject,@PathVariable Long courseId) {
		
		subjectService.addSubject(courseId,subject);
		
	}
	
	@GetMapping("/{courseId}")
	public List<Subject> getAllSubject(@PathVariable Long courseId){
		
		System.out.println(courseId);
		return subjectService.getSubject(courseId);
	}
		
}
