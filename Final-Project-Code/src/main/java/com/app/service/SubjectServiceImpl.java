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
	private CourseRepository courseRepo;
	@Autowired
	private SubjectRepository subjectRepo;
	
	@Override
	public void addSubject(Long courseId, Subject subject) {
		Course course = courseRepo.findById(courseId).orElseThrow();
		course.setSubjects(subject);

	}

	@Override
	public List<Subject> getSubject(Long courseId) {
		Course course = courseRepo.findById(courseId).orElseThrow(()->new RuntimeException("Course Not Found!!"));
		return subjectRepo.findByCourse(course);
	}

}
