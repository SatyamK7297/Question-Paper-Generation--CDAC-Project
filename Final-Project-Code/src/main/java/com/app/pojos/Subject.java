package com.app.pojos;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

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
public class Subject extends BaseEntity {
    
	@Column(name="Subject_Name",length=30,nullable=false)
	private String subjectName;
	
	@ManyToOne
	@JoinColumn(name="Course_ID")
	private Course course;
	
	@OneToMany(mappedBy="subject", cascade=CascadeType.ALL,orphanRemoval=true)
	@JsonIgnore
    private List<Question> questions = new ArrayList<>();
	
	

	public Subject() {
		
	}

	public Subject(String subjectName, Course course, List<Question> questions) {
		super();
		this.subjectName = subjectName;
		this.course = course;
		this.questions = questions;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	
	
	
}
