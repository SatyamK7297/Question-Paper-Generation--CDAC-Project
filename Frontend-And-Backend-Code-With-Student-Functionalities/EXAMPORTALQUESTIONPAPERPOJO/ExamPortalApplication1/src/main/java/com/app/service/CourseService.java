package com.app.service;

import java.util.List;

import com.app.entities.Course;

public interface CourseService {
	
	public void addCourse(Course course);
	public List<Course> getAllCourses();
}
