package com.app.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.QuestionPaper;
import com.app.entities.Subject;

public interface QuestionPaperRepository extends JpaRepository<QuestionPaper, Long> {
    
	public Set<QuestionPaper> findBySubjectAndExpired(Subject subject,boolean expired);
	
	public Set<QuestionPaper> findBySubjectAndActiveAndExpired(Subject subject,boolean active,boolean expired);
	
}
