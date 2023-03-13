package com.app.entities;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

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
@ToString(exclude = "password")
public class User extends BaseEntity{
	@NotBlank(message = "First Name is required")
	private String firstName;
	@NotBlank(message = "Last Name is required")
	private String lastName;
	@Column(unique = true)
	@NotBlank(message = "Email is required")
	@Email(message = "Invalid Email format")
	private String email;
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid Password!")
	private String password;
	@Column(unique = true)
	private String phone;
    
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	@Enumerated(EnumType.STRING)
	@Column(length = 20,name = "user_role")
	private UserRole role;
	
	@ManyToOne
	@JoinColumn(name="course_id")
	//@JsonIgnore
	private Course course;
	
	
	@OneToMany(mappedBy="user",cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private Set<Result> results = new HashSet<>();
	
}
