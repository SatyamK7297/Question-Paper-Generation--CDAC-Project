package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.QuestionPaper;
import com.app.service.QuestionPaperService;


@RestController
@RequestMapping("/course/subject/questionPaper")
@Validated
@CrossOrigin("http://localhost:3000")
public class QuestionPaperController {

	
	@Autowired
	private QuestionPaperService questionPaperService;
	
	public QuestionPaperController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@PostMapping("/{subject_id}")
	public ResponseEntity<?> addQuestionPaper(@PathVariable Long subject_id,@RequestBody QuestionPaper questionPaper){
		return ResponseEntity.ok(questionPaperService.addQuestionPaper(subject_id, questionPaper));
	}
	
	
	
	@PutMapping("/")
	public ResponseEntity<?> update(@RequestBody QuestionPaper questionPaper){
		return ResponseEntity.ok(questionPaperService.updateQuestionPaper(questionPaper));
	}
	
	
	@GetMapping("/{subject_id}")
	public ResponseEntity<?> getAllQuestionPapersBySubject(@PathVariable Long subject_id){
		return ResponseEntity.ok(questionPaperService.getQuestionPaperBySubject(subject_id));
	}
	
	
	@GetMapping("/paper/{questionPaper_id}")
	public ResponseEntity<?> getQuestionPaper(@PathVariable Long questionPaper_id){
		return ResponseEntity.ok(questionPaperService.getQuestionPaper(questionPaper_id));
	}
	
	@DeleteMapping("/{questionPaper_id}")
	public void deleteQuestionPaper(@PathVariable Long questionPaper_id){
		questionPaperService.deleteQuestionPaper(questionPaper_id);
	}
	
	@PostMapping("/auto/{subject_id}") 
	public ResponseEntity<?> questionPaperAutoGenrate(@PathVariable Long subject_id,@RequestBody QuestionPaper questionPaper){		
		return ResponseEntity.ok(questionPaperService.generateQuestionPaperAuto(subject_id, questionPaper));
	}
	
	@PostMapping("/manual/{subject_id}") 
	public ResponseEntity<?> questionPaperManualGenrate(@PathVariable Long subject_id,@RequestBody QuestionPaper questionPaper){		
		return ResponseEntity.ok(questionPaperService.generateQuestionPaperManually(subject_id, questionPaper));
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
