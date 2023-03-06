package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Type;

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
public class Question extends BaseEntity {

	
	@Column(name="Question",nullable=false)
	@Type(type="text")
	private String question;
	@Column(name="A",nullable=false)
	private String A;
	@Column(name="B",nullable=false)
	private String B;
	@Column(name="C",nullable=false)
	private String C;
	@Column(name="D",nullable=false)
	private String D;
	@Column(name="answer",nullable=false)
	private String answer;
	
	

	@ManyToOne
	@JoinColumn(name="Subject_ID")
	@JsonIgnore
	private Subject subject;

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getA() {
		return A;
	}

	public void setA(String a) {
		A = a;
	}

	public String getB() {
		return B;
	}

	public void setB(String b) {
		B = b;
	}

	public String getC() {
		return C;
	}

	public void setC(String c) {
		C = c;
	}

	public String getD() {
		return D;
	}

	public void setD(String d) {
		D = d;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	} 
	
//	{
//        "question": "Who invented Java Programming",
//        "answer": "James Gosling",
//      
//        "c": "Guido Van Rossum",
//        "d": "James Gosling",
//        "a": "Dennis Ritchie",
//        "b": "bjarne stroustrup"
//    }
	
	
}
