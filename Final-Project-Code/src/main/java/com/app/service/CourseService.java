package com.app.service;

import java.util.List;

import com.app.pojos.Course;

public interface CourseService {
	
	public void addCourse(Course course);
	public List<Course> getCourse();
}
