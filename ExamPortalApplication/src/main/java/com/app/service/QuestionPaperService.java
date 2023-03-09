package com.app.service;

import java.util.Set;


import com.app.entities.QuestionPaper;

public interface QuestionPaperService {
   
	public QuestionPaper addQuestionPaper(Long subject_id,QuestionPaper questionPaper);
	
	public QuestionPaper updateQuestionPaper(QuestionPaper questionPaper);
	
	public Set<QuestionPaper> getQuestionPaperBySubjectForAdmin(Long subject_id);
	
	public Set<QuestionPaper> getQuestionPaperBySubjectForUser(Long subject_id);

	public QuestionPaper getQuestionPaper(Long questionPaper_id);

	public void  deleteQuestionPaper(Long questionPaper_id);
	
	public void questionPaperExpired(Long questionPaper_id);
	
	public QuestionPaper generateQuestionPaperManually(Long subject_id, QuestionPaper questionPaper);
	
	public QuestionPaper  generateQuestionPaperAuto(Long subject_id, QuestionPaper questionPaper);
	
	public boolean isActive(Long questionPaper_id);
	
	
}
