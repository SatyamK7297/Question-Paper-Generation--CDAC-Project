package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.custom_exceptions.ResourceNotFoundException;

import com.app.pojos.Course;
import com.app.repository.CourseRepository;
@Service
@Transactional
public class CourseServiceImpl implements CourseService {
	
	
	@Autowired
	private  CourseRepository courseRepo;

	@Override
	public void addCourse(Course course) {
		courseRepo.save(course);
		
	}

	@Override
	public List<Course> getAllCourse() {
		
		return courseRepo.findAll();
	}

	@Override
	public Course getCourseById(Long courseId) {
		
	Course course = courseRepo.findById(courseId).orElseThrow(()-> new ResourceNotFoundException("invalid id"));
		return course;
		
	}

}