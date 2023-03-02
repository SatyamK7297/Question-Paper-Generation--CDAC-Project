package com.app.service;

import java.util.List;

import com.app.pojos.Question;
import com.app.pojos.Subject;

public interface QuestionService {
	
	public void addQuestion(Long sId, Question question);
	public List<Question> getQuestion(Long sId);
}
