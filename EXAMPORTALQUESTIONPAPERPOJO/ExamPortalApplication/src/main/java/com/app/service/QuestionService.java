package com.app.service;

import java.util.List;
import java.util.Set;

import com.app.entities.Question;
import com.app.entities.QuestionPaper;


public interface QuestionService {
	
	public void addQuestion(Long subject_id, Question question);
	
	public List<Question> getAllQuestionBySubject(Long subject_id);
	
	List<Question> limitedQuestion(Long subjectId);
	
	public Question getQuestion(Long question_id);
	
	public Set<Question> getQuestionOfQuestionPaper(QuestionPaper questionPaper);
	
	public void deleteQuestion(Long question_id);

}
