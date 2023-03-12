package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class QuestionResponse {
	
	private Long id;
    private String question;
	
	private String a;
	
	private String b;
	
	private String c;
	
	private String d;
		
}
