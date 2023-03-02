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
@AllArgsConstructor
@NoArgsConstructor
public class Question extends BaseEntity {
	
	@Column(nullable = false)
	@Type(type="text")
	private String question;
	
	@Column(nullable = false)
	private String A;
	
	@Column(nullable = false)
	private String B;
	
	@Column(nullable = false)
	private String C;
	
	@Column(nullable = false)
	private String D;
	
	@Column(nullable = false)
	private String answer;
	
	@ManyToOne()
	@JoinColumn(name="subject_id")
	@JsonIgnore()
	private Subject subject;
	
	
	
}
