package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

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
	
	@OneToMany(mappedBy="course",cascade=CascadeType.ALL,orphanRemoval=true)
	private Set<Subject> subjects = new HashSet<Subject>();
}
