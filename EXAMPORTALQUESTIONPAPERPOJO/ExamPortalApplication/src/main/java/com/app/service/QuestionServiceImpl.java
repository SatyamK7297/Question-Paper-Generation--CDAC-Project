package com.app.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.QuestionNotFoundException;
import com.app.entities.Question;
import com.app.entities.QuestionPaper;
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
    
	
	@Override
	public List<Question> limitedQuestion(Long subjectId) {
		
		return  questionRepository.limitQuestion(subjectId, PageRequest.of(0, 5));
	}

	@Override
	public Question getQuestion(Long question_id) {
		
		return questionRepository.findById(question_id).orElseThrow(()->new QuestionNotFoundException("Question not available for provided id"));
	}

	@Override
	public Set<Question> getQuestionOfQuestionPaper(QuestionPaper questionPaper) {
	
		return  questionRepository.findByQuestionPaper(questionPaper);
	}

	@Override
	public void deleteQuestion(Long question_id) {
		 questionRepository.deleteById(question_id);
		
	}
}
