package com.app.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Question;
import com.app.service.QuestionPaperService;
import com.app.service.QuestionService;

@RestController
@RequestMapping("/course/subject/question")
@Validated
@CrossOrigin("http://localhost:3000")
public class QuestionController {

	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private QuestionPaperService questionPaperService;
	
	
	public QuestionController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@GetMapping("/{subject_id}")
	public List<Question> getAllQuestionBySubject(@PathVariable Long subject_id){
		System.out.println("in getAllQuestionBySubject controller method");
		return questionService.getAllQuestionBySubject(subject_id);
	}
	
	@PostMapping("/{subject_id}")
	public void addQuestion(@PathVariable Long subject_id,@RequestBody Question question) {
		System.out.println("in addQuestion controller method");
		questionService.addQuestion(subject_id, question);
	}
	@GetMapping("/limit/{subjectId}")
	public List<Question> limitedQuestion(@PathVariable Long subjectId){
		return questionService.limitedQuestion(subjectId);
	}
	
	@GetMapping("/questionPaper/{questionPaper_id}")
	public ResponseEntity<?> getQuestionOfQuestionPaper(@PathVariable Long questionPaper_id){
		     
            return ResponseEntity.ok(questionService.getQuestionOfQuestionPaperForUser(questionPaperService.getQuestionPaperById(questionPaper_id)));	
	}
	
	@DeleteMapping("/{question_id}")
	public void delete(@PathVariable Long question_id) {
		questionService.deleteQuestion(question_id);
	}
}
