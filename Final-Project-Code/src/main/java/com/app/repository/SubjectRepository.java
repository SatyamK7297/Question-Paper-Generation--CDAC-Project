package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Course;
import com.app.pojos.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
	
	public List<Subject> findByCourse(Course course);
}
