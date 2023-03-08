package com.app.service;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.QuestionPaperNotFoundException;
import com.app.entities.Question;
import com.app.entities.QuestionPaper;
import com.app.entities.Subject;
import com.app.repository.QuestionPaperRepository;
import com.app.repository.QuestionRepository;
import com.app.repository.SubjectRepository;

@Service
@Transactional
public class QuestionPaperServiceImpl implements QuestionPaperService{
   
	
	@Autowired
	private QuestionPaperRepository questionPaperRepo;
	@Autowired
	private SubjectRepository subjectRepo;
	
	@Autowired
	private QuestionRepository questionRepo;
	
     
	@Autowired
	private ModelMapper mapper;

	@PostConstruct
	public void init() {
		System.out.println("in init " + mapper);
	}

	@Override
	public QuestionPaper addQuestionPaper(Long subject_id,QuestionPaper questionPaper) {
		Subject subject = subjectRepo.findById(subject_id).orElseThrow();
		subject.addQuestionPaper(questionPaper);
		return questionPaperRepo.save(questionPaper);
	}

	@Override
	public QuestionPaper updateQuestionPaper(QuestionPaper questionPaper) {
		return questionPaperRepo.save(questionPaper);
	}

	@Override
	public Set<QuestionPaper> getQuestionPaperBySubject(Long subject_id) {
		Subject subject = subjectRepo.findById(subject_id).orElseThrow();
	    return new HashSet<>(questionPaperRepo.findBySubject(subject));
	}

	@Override
	public QuestionPaper getQuestionPaper(Long questionPaper_id) {
		return questionPaperRepo.findById(questionPaper_id).orElseThrow(() -> new QuestionPaperNotFoundException("Question Paper not available for provided id"));
	}

	@Override
	public void deleteQuestionPaper(Long questionPaper_id) {
		QuestionPaper questionPaper = questionPaperRepo.findById(questionPaper_id).orElseThrow(() -> new QuestionPaperNotFoundException("Question Paper not available for provided id"));
		Set<Question> questionSet = questionPaper.getQuestions();
		questionPaper.setQuestions(null);
		for(Question q : questionSet) {
			q.setQuestionPaper(null);
		}
		questionPaper.getSubject().removeQuestionPaper(questionPaper);
		questionPaperRepo.deleteById(questionPaper_id);
	}

	@Override
	public QuestionPaper generateQuestionPaperManually(Long subject_id,QuestionPaper questionPaper) {
		Subject subject = subjectRepo.findById(subject_id).orElseThrow();
		Set<Question> questionSet = questionPaper.getQuestions();
		for(Question q : questionSet) {
			q.setQuestionPaper(questionPaper);
			q.setSubject(subject);
			questionRepo.save(q);
		}
		
		subject.addQuestionPaper(questionPaper);
		return questionPaper;
	}

	@Override
	public QuestionPaper  generateQuestionPaperAuto(Long subject_id,QuestionPaper questionPaper) {
		
	  Subject subject = subjectRepo.findById(subject_id).orElseThrow();
	  Set<Question> questionSet = new LinkedHashSet<Question> (questionRepo.limitQuestion(subject_id, PageRequest.of(0, questionPaper.getNumberOfQuestions())));
	  for(Question q : questionSet) {
		  questionPaper.addQuestion(q);
	  }
	  subject.addQuestionPaper(questionPaper);
	  
	  return questionPaper;
	  
	}
	
	
	
	
	
}
