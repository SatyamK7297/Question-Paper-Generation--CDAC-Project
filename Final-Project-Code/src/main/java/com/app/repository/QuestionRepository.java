package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Question;
import com.app.pojos.Subject;

public interface QuestionRepository extends JpaRepository<Question,Long>{

	List<Question> findBySubject(Subject subject);
	
}
