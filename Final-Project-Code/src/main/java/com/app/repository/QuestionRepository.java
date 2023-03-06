package com.app.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Question;
import com.app.pojos.Subject;

public interface QuestionRepository extends JpaRepository<Question, Long> {
  List<Question> findBySubject(Subject subject);
  
  @Query("Select q from Question q where q.subject.id=:subjectid order by rand()")
  List<Question> limitQuestion(Long subjectid,Pageable pageable);
  
}
