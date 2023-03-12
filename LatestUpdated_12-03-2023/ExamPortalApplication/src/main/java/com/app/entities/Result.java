package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
public class Result extends BaseEntity{
	
	@Column(nullable = false)
	private int totalMarks;
	@Column(nullable = false)
	private int correctAnswers;
	@Column(nullable = false)
	private int attempted;
	
	@ManyToOne()
	@JoinColumn(name="user_id")
	private User user;
	
	
	@ManyToOne()
	@JoinColumn(name="questionPaper_id")
	private QuestionPaper questionPaper;
}
