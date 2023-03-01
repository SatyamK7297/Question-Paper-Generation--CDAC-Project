package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Course extends BaseEntity{

	@Column(name="course_name",length=15,nullable=false)
	private String courseName;
	
	@JsonIgnore
	@OneToMany(mappedBy="course",cascade=CascadeType.ALL,orphanRemoval=true)
	private List<Subject> subjects = new ArrayList<Subject>();
	
	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public List<Subject> getSubjects() {
		System.out.println(subjects);
		return subjects;
	}

	public void setSubjects(Subject subject) {
		subject.setCourse(this);
		this.subjects.add(subject);
	}
}
