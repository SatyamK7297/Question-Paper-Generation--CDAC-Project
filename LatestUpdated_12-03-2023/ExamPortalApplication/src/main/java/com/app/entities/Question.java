package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

import org.hibernate.annotations.Type;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Question extends BaseEntity {
	
	@Column(nullable = false)
	@Type(type="text")
	private String question;
	
	@Column(nullable = false)
	private String a;
	
	@Column(nullable = false)
	private String b;
	
	@Column(nullable = false)
	private String c;
	
	@Column(nullable = false)
	private String d;
	
	@Column(nullable = false)
	private String answer;
	
	@Transient
	private String answerSubmitted;
	
	@ManyToOne()
	@JoinColumn(name="subject_id")
	@JsonIgnore
	private Subject subject;
	
	@JsonIgnore
	@ManyToOne
	private QuestionPaper questionPaper;
	
	
	
}
