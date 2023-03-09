package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Subject;
import com.app.service.SubjectService;

@RestController
@RequestMapping("/course/subject")
@Validated
@CrossOrigin("http://localhost:3000")
public class SubjectController {

	@Autowired 
	private SubjectService subjectService;
	
	public SubjectController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@GetMapping("/{course_id}")
	public ResponseEntity<?> getSubjectAllByCourse(@PathVariable Long course_id){
		System.out.println("in getSubjectAllByCourse controller method");
		return ResponseEntity.ok(subjectService.getSubjectAllByCourse(course_id));
	}
	
	@PostMapping("/{course_id}")
	public ResponseEntity<?> addSubject(@PathVariable Long course_id,@RequestBody Subject subject) {
		System.out.println("in addSubject controller method");
		return ResponseEntity.ok(subjectService.addSubject(course_id, subject));
	}
	
	
	
	
	
}
