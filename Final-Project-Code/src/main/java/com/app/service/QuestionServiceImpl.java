package com.app.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.app.pojos.Question;
import com.app.pojos.Subject;
@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {

	@Override
	public void addQuestion(Subject subject, Question question) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Question> getQuestion(Subject subject) {
		// TODO Auto-generated method stub
		return null;
	}

}
