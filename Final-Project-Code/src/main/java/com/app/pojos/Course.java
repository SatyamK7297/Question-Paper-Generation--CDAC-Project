package com.app.pojos;

import java.util.ArrayList;

import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Course extends BaseEntity{

	@Column(name="Course_name", length=15,nullable=false)
	private String courseName ;
	
	@OneToMany(mappedBy="course", cascade=CascadeType.ALL,orphanRemoval=true)
	@JsonIgnore
	private List<Subject> subjects = new ArrayList<Subject>();

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public List<Subject> getSubjects() {
		
		return subjects;
	}

	public void setSubjects(Subject subject) {
		subjects.add(subject);
		subject.setCourse(this);
	}
	
	
	
		
}
