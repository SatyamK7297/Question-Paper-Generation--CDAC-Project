package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.pojos.Course;
import com.app.pojos.Subject;
import com.app.repository.CourseRepository;
import com.app.repository.SubjectRepository;
@Service
@Transactional
public class SubjectServiceImpl implements SubjectService {
	
	@Autowired
	private SubjectRepository subjectRepo;
	@Autowired
	private CourseRepository courseRepo;

	@Override
	public void addSubject(Long courseId, Subject subject) {
	
	 Course course     =  courseRepo.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Invalid Category Id!!!"));;
	 course.setSubjects(subject);
		
		
		
	}

	@Override
	public List<Subject> getSubject(Long courseId) {
		System.out.println("in get subject method");
		Course course     =  courseRepo.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Invalid Category Id!!!"));
		System.out.println(course.toString());
		return subjectRepo.findByCourse(course);
	}

}