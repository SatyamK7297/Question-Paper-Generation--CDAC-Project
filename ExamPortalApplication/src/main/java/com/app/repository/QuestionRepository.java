package com.app.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Question;
import com.app.entities.QuestionPaper;
import com.app.entities.Subject;

public interface QuestionRepository extends JpaRepository<Question,Long> {
	
	public List<Question> findBySubject(Subject subject);
	
	  @Query("Select q from Question q where q.questionPaper is null and q.subject.id=:subjectid order by rand() ")
	  List<Question> limitQuestion(Long subjectid,Pageable pageable);
		
	  public Set<Question> findByQuestionPaper(QuestionPaper questionPaper);
}
