package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Question;
import com.app.service.QuestionService;

@RestController
@RequestMapping("/course/subject/question")
public class QuestionController {

	@Autowired
	private QuestionService questionService;
	
	public QuestionController() {
		System.out.println("in def ctor "+getClass());
	}
	
	@GetMapping("/{subjectId}")
	public List<Question> getQuestion(@PathVariable Long subjectId){
		return questionService.getQuestion(subjectId);
	} 
	
	@PostMapping("/{subjectId}")
	public void addQuestion(@PathVariable Long subjectId, @RequestBody Question question) {
		questionService.addQuestion(subjectId, question);
	}
}
