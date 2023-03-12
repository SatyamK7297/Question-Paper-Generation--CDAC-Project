package com.app.controller;

import java.util.List;
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

import com.app.entities.Question;

import com.app.service.ResultService;



@RestController
@RequestMapping("/course/subject/questionPaper/result")
@Validated
@CrossOrigin("http://localhost:3000")
public class ResultController {
	
	@Autowired
	private ResultService resultService;
	
	
	 public ResultController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@PostMapping("/eval-quiz/{questionPaper_id}/{user_id}")
	public ResponseEntity<?> evalQuestionPaper(@PathVariable("questionPaper_id") Long questionPaper_id,@PathVariable("user_id") Long user_id,@RequestBody List<Question> questions){
		return ResponseEntity.ok(resultService.addResult(questionPaper_id, user_id, questions));
	}
	
	@GetMapping("/{user_id}")
	public ResponseEntity<?> getResultsForUser(@PathVariable("user_id") Long user_id){
		return ResponseEntity.ok(resultService.getResultsForUser(user_id));
	}
}
