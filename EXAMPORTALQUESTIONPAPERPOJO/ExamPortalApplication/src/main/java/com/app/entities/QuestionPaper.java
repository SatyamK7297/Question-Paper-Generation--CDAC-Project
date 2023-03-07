package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class QuestionPaper extends BaseEntity{
    
	@Column(unique = true)
	private String title;
	
	private String description;
	
	private int numberOfQuestions;
	
	private boolean active=false;
	
	@ManyToOne()
	@JoinColumn(name="subject_id")
	@JsonIgnore
	private Subject subject;
	
	//@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	@OneToMany(mappedBy="questionPaper", fetch = FetchType.EAGER)
	private Set<Question> questions = new HashSet<>();
	
	public void addQuestion(Question question) {
		this.questions.add(question);
		question.setQuestionPaper(this);
	}
	
	public void removeQuestion(Question question) {
		this.questions.remove(question);
		question.setQuestionPaper(null);
	}
	
}
