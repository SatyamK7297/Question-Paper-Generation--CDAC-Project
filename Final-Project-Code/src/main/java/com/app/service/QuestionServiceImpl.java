package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Question;
import com.app.pojos.Subject;
import com.app.repository.QuestionRepository;
import com.app.repository.SubjectRepository;
@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private SubjectRepository subjectRepo;
	
	@Autowired
	private QuestionRepository questionRepo;
	
	@Override
	public void addQuestion(Long subjectId, Question question) {
		Subject subject = subjectRepo.findById(subjectId).orElseThrow();
		subject.setQuestions(question);
		
	}

	@Override
	public List<Question> getQuestion(Long subjectId) {
		Subject subject = subjectRepo.findById(subjectId).orElseThrow();
		return questionRepo.findBySubject(subject);
	}

}
