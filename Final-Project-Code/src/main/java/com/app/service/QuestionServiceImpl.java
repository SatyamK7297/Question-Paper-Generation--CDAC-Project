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
	private SubjectRepository subjectRepository;
	@Autowired
	private QuestionRepository questionRepository;
	
	@Override
	public void addQuestion(Long sId, Question question) {
		Subject subject = subjectRepository.findById(sId).orElseThrow();
		subject.setQuestions(question);
		
	}

	@Override
	public List<Question> getQuestion(Long sId) {
		Subject subject = subjectRepository.findById(sId).orElseThrow();
		return questionRepository.findBySubject(subject);
	}

}
