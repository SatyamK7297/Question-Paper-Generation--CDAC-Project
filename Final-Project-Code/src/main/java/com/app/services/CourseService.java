package com.app.services;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Course;

public interface CourseService {
	
  void addCourse(Course course);
  
  List<Course> getAllCourse();
  Course getCourseById(Long courseId);
}
