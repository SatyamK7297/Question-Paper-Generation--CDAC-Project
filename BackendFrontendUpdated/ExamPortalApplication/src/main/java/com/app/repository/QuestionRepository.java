package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Question;
import com.app.entities.Subject;

public interface QuestionRepository extends JpaRepository<Question,Long> {
	
	public List<Question> findBySubject(Subject subject);
	
	
		
}
