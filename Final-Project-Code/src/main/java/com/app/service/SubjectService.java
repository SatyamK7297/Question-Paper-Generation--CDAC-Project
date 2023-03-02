package com.app.service;

import java.util.List;


import com.app.pojos.Subject;

public interface SubjectService {

	public void addSubject(Long id, Subject subject);
	public List<Subject> getSubject(Long id);
}
