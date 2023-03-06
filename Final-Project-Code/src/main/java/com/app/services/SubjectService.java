package com.app.services;

import java.util.List;

import com.app.pojos.Course;
import com.app.pojos.Subject;

public interface SubjectService {
   
	void addSubject(Long courseId,Subject subject);
	List<Subject> getSubject(Long courseId);
}