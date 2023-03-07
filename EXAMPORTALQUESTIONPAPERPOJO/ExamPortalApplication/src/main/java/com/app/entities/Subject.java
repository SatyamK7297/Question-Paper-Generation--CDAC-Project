package com.app.entities;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Subject extends BaseEntity {
	
	@Column(name="subject_name",length=30,nullable=false)
	private String subjectName;
	
	@ManyToOne
	@JoinColumn(name="course_id")
	@JsonIgnore
	private Course course;
	
	@OneToMany(mappedBy="subject",cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Question> questions = new ArrayList<>();

	@OneToMany(mappedBy="subject",cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private Set<QuestionPaper> questionPapers = new LinkedHashSet<>();
	
	  public void addQuestion(Question question) {
		   this.questions.add(question);
		  question.setSubject(this);
	   }
	  
	  public void addQuestionPaper(QuestionPaper questionPaper) {
		   this.questionPapers.add(questionPaper);
		  questionPaper.setSubject(this);
	   }
	  
	  public void removeQuestionPaper(QuestionPaper questionPaper) {
			this.questionPapers.remove(questionPaper);
			questionPaper.setSubject(null);
		}
	  
	 
	
	
	
	
}
