package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Course;
import com.app.pojos.Subject;
import com.app.repository.CourseRepository;
import com.app.repository.SubjectRepository;

@Service
@Transactional
public class SubjectServiceImpl implements SubjectService {
	
	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private SubjectRepository subjectRepository;
	
	@Override
	public void addSubject(Long id, Subject subject) {
		Course course = courseRepository.findById(id).orElseThrow();
		course.setSubjects(subject);

	}

	@Override
	public List<Subject> getSubject(Long id) {
		
		Course course = courseRepository.findById(id).orElseThrow();
		return subjectRepository.findByCourse(course);
		
	}

}
