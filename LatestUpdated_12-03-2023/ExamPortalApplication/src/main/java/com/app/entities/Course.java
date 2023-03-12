package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class Course extends BaseEntity {
	

	@Column(name="course_name",length = 15,nullable=false, unique=true)
	private String courseName;
	
	@OneToMany(mappedBy="course",cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Subject> subjects = new ArrayList<>();
	
	@OneToMany(mappedBy="course",cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<User> users = new ArrayList<>();
	
	
	
   public void addSubject(Subject subject) {
	   this.subjects.add(subject);
	  subject.setCourse(this);
   }

   public void addUser(User user) {
	   this.users.add(user);
	  user.setCourse(this);
   }
	
}
