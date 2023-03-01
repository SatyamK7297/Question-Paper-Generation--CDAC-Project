package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.pojos.Subject;
import com.app.service.SubjectService;

@RestController
@RequestMapping("/course/subject")
public class SubjectController {

	@Autowired 
	private SubjectService subjectService;
	
	@GetMapping("/{id}")
	public List<Subject> getSubject(@PathVariable Long id){
		System.out.println("in get subject");
		return subjectService.getSubject(id);
	}
	
	@PostMapping("/{id}")
	public void addSubject(@PathVariable Long id,@RequestBody Subject subject) {
		subjectService.addSubject(id, subject);
	}
}
