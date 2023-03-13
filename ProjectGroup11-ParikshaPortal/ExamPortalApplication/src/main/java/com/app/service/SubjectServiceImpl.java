package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Course;
import com.app.entities.Subject;
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
	public Subject addSubject(Long course_id, Subject subject) {
		Course course = courseRepository.findById(course_id).orElseThrow();
		course.addSubject(subject);
		return subject;

	}

	@Override
	public List<Subject> getSubjectAllByCourse(Long course_id) {
		
		Course course = courseRepository.findById(course_id).orElseThrow();
		return subjectRepository.findByCourse(course);
		
	}

}
