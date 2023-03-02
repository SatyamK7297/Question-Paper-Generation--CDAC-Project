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
	
	@GetMapping("/{id}")
	public List<Question> getAll(@PathVariable Long id){
		return questionService.getQuestion(id);
	}
	
	@PostMapping("/{id}")
	public void addQuestion(@PathVariable Long id,@RequestBody Question question) {
		questionService.addQuestion(id, question);
	}
}
