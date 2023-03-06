package com.app.services;

import java.util.List;
import com.app.pojos.Question;


public interface QuestionService {
	
void addQuestion(Long subjectId,Question question);
List<Question> getAllQuestion(Long subjectId);
List<Question> limitedQuestion(Long subjectId); 

}
