package com.app.service;

import java.util.List;

import com.app.entities.Question;


public interface QuestionService {
	
	public void addQuestion(Long subject_id, Question question);
	public List<Question> getAllQuestionBySubject(Long subject_id);
}
