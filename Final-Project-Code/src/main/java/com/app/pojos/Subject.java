package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Subject extends BaseEntity{

	public Subject() {
		
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
	public void setQuestions(Question question) {
		question.setSubject(this);
		this.questions.add(question);
	}
	public Subject(String subjectName, Course course, List<Question> questions) {
		super();
		this.subjectName = subjectName;
		this.course = course;
		this.questions = questions;
	}
	@Column(name="subject_name",length=30,nullable=false)
	private String subjectName;
	@ManyToOne
	@JoinColumn(name="course_id")
	@JsonIgnore
	private Course course;
	@OneToMany(mappedBy="subject",cascade=CascadeType.ALL,orphanRemoval=true)
	@JsonIgnore
	private List<Question> questions = new ArrayList<>();
}
