package com.app.services;

import java.util.List;
import com.app.pojos.Question;
import com.app.pojos.Subject;

public interface QuestionService {
	
void addQuestion(Subject subject,Question question);
List<Question> getAllQuestion();

}
