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
import com.app.services.QuestionService;

@RestController
@RequestMapping("/course/subject/question")
public class QuestionController {
@Autowired
private QuestionService questionService;

@GetMapping("/{subjectId}")
public List<Question> getAllQuestion(@PathVariable Long subjectId){
	return questionService.getAllQuestion(subjectId);
}

@PostMapping("/{subjectId}")
public void addQuestion(@RequestBody Question question,@PathVariable Long subjectId) {

 questionService.addQuestion(subjectId, question);
}
}