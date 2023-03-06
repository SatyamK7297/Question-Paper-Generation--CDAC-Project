package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Question;
import com.app.entities.Subject;
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
	public void addQuestion(Long subject_id, Question question) {
		Subject subject = subjectRepository.findById(subject_id).orElseThrow();
		subject.addQuestion(question);
		
	}

	@Override
	public List<Question> getAllQuestionBySubject(Long subject_id) {
		Subject subject = subjectRepository.findById(subject_id).orElseThrow();
		return questionRepository.findBySubject(subject);
	}

}
