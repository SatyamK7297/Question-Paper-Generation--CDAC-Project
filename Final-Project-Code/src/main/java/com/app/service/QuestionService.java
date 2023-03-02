package com.app.service;

import java.util.List;

import com.app.pojos.Question;

public interface QuestionService {

	public void addQuestion(Long subjectId,Question question);
	public List<Question> getQuestion(Long subjectId);
}
