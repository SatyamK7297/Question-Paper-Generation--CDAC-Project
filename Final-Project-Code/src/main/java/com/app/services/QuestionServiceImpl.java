package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Question;
import com.app.pojos.Subject;
import com.app.repository.QuestionRepository;
@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {
	@Autowired
	private QuestionRepository questionRepo;
	

	@Override
	public void addQuestion(Subject subject, Question question) {
    
       

	}

	@Override
	public List<Question> getAllQuestion() {
		
		return null;
	}

}