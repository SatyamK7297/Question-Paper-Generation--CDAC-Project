package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Question;

public interface QuestionRepository extends JpaRepository<Question,Long>{

	
}
