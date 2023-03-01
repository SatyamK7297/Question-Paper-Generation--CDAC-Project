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
import com.app.service.SubjectService;

@RestController
@RequestMapping("/course/subject")
public class SubjectController {

	@Autowired
	private SubjectService subjectService;
	
	public SubjectController() {
		System.out.println("in def ctor "+getClass());
	}
	
	@GetMapping("/{courseId}")
	public List<Subject> getSubject(@PathVariable Long courseId){
		return subjectService.getSubject(courseId);
	}
	
	@PostMapping("/{courseId}")
	public void addSubject(@PathVariable Long courseId, @RequestBody Subject subject) {
		subjectService.addSubject(courseId, subject);
	}
}
