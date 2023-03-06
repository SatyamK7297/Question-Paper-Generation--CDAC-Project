package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.pojos.Question;
import com.app.pojos.Subject;
import com.app.repository.QuestionRepository;
import com.app.repository.SubjectRepository;
@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {
	@Autowired
	private QuestionRepository questionRepo;
	@Autowired
	private SubjectRepository subjectRepo;
	

	

	@Override
	public void addQuestion(Long subjectId, Question question) {
	  Subject subject = subjectRepo.findById(subjectId).orElseThrow(()-> new ResourceNotFoundException("invalid id"));
	  subject.setQuestions(question);
		
	}




	@Override
	public List<Question> getAllQuestion(Long subjectId) {
		
		Subject subject = subjectRepo.findById(subjectId).orElseThrow(()-> new ResourceNotFoundException("invalid id"));
		return questionRepo.findBySubject(subject);
	}




	@Override
	public List<Question> limitedQuestion(Long subjectId) {
		//Subject subject = subjectRepo.findById(subjectId).orElseThrow(); 
		
		return  questionRepo.limitQuestion(subjectId, PageRequest.of(0, 5));
	}

}
