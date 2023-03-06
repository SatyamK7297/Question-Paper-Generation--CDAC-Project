package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Course;
import com.app.repository.CourseRepository;

@Service
@Transactional
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseRepository courseRepo;
	
	@Override
	public void addCourse(Course course) {
		courseRepo.save(course);
	}

	@Override
	public List<Course> getAllCourses() {
		return courseRepo.findAll();
	}

}
