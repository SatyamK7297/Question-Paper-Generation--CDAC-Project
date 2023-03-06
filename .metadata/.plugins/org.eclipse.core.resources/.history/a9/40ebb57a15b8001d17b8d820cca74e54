package com.app.pojos;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Subject extends BaseEntity {
    
	@Column(name="Subject_Name",length=30,nullable=false)
	private String subjectName;
	
	@ManyToOne
	@JoinColumn(name="Course_ID")
	private Course course;
	
	@OneToMany(mappedBy="subject", cascade=CascadeType.ALL,orphanRemoval=true)
    private List<Question> questions = new ArrayList<>();
	
	
	
}
