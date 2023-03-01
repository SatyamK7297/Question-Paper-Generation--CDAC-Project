package com.app.service;

import java.util.List;

import com.app.pojos.Question;
import com.app.pojos.Subject;

public interface QuestionService {

	public void addQuestion(Subject subject,Question question);
	public List<Question> getQuestion(Subject subject);
}
