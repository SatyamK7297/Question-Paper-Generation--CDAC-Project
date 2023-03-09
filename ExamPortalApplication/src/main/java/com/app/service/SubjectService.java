package com.app.service;

import java.util.List;

import com.app.entities.Subject;

public interface SubjectService {

	public Subject addSubject(Long course_id, Subject subject);
	public List<Subject> getSubjectAllByCourse(Long course_id);
}
