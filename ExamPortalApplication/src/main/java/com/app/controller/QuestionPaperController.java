package com.app.controller;

import java.util.List;
import java.util.Map;

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

import com.app.entities.Question;
import com.app.entities.QuestionPaper;
import com.app.service.QuestionPaperService;
import com.app.service.QuestionService;


@RestController
@RequestMapping("/course/subject/questionPaper")
@Validated
@CrossOrigin("http://localhost:3000")
public class QuestionPaperController {

	@Autowired
	private QuestionService questionService;
	
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
	
	
	@GetMapping("/admin/{subject_id}")
	public ResponseEntity<?> getAllQuestionPapersBySubjectForAdmin(@PathVariable Long subject_id){
		return ResponseEntity.ok(questionPaperService.getQuestionPaperBySubjectForAdmin(subject_id));
	}
	
	@GetMapping("/user/{subject_id}")
	public ResponseEntity<?> getAllQuestionPapersBySubjectForUser(@PathVariable Long subject_id){
		return ResponseEntity.ok(questionPaperService.getQuestionPaperBySubjectForUser(subject_id));
	}
	
	
	@GetMapping("/paper/{questionPaper_id}")
	public ResponseEntity<?> getQuestionPaper(@PathVariable Long questionPaper_id){
		return ResponseEntity.ok(questionPaperService.getQuestionPaper(questionPaper_id));
	}
	
//	@DeleteMapping("/{questionPaper_id}")
//	public void deleteQuestionPaper(@PathVariable Long questionPaper_id){
//		questionPaperService.deleteQuestionPaper(questionPaper_id);
//	}
	
	@PostMapping("/admin/auto/{subject_id}") 
	public ResponseEntity<?> questionPaperAutoGenrate(@PathVariable Long subject_id,@RequestBody QuestionPaper questionPaper){		
		return ResponseEntity.ok(questionPaperService.generateQuestionPaperAuto(subject_id, questionPaper));
	}
	
	@PostMapping("/admin/manual/{subject_id}") 
	public ResponseEntity<?> questionPaperManualGenrate(@PathVariable Long subject_id,@RequestBody QuestionPaper questionPaper){		
		return ResponseEntity.ok(questionPaperService.generateQuestionPaperManually(subject_id, questionPaper));
	}
	
	@DeleteMapping("/admin/{questionPaper_id}")
	public void paperExpiry(@PathVariable Long questionPaper_id){
		questionPaperService.questionPaperExpired(questionPaper_id);
	}
	
	@PutMapping("/admin/{questionPaper_id}")
	public ResponseEntity<?> isActive(@PathVariable Long questionPaper_id){
		return ResponseEntity.ok(questionPaperService.isActive(questionPaper_id));
	}
	
	@PostMapping("/eval-quiz/{questionPaper_id}/{user_id}")
	public ResponseEntity<?> evalQuestionPaper(@PathVariable("questionPaper_id") Long questionPaper_id,@PathVariable("user_id") Long user_id,@RequestBody List<Question> questions){
		
		Integer totalMarks = questions.size();
		Integer correctAnswers = 0;
		Integer attempted = 0;
		
		for(Question q : questions){
			Question question = questionService.getQuestion(q.getId());
			if(question.getAnswer().equalsIgnoreCase(q.getAnswerSubmitted())) {
				correctAnswers++;
				attempted++;
			}else if(q.getAnswerSubmitted() != null && !(q.getAnswerSubmitted().equals("")))  {
				attempted++;
			}
		}
		
		Map<String, Object> result = Map.of("totalMarks",totalMarks,"correctAnswer",correctAnswers,"attempted",attempted);
		
		return ResponseEntity.ok(result);
	}
		
}
