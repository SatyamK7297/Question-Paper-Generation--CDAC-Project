package com.app.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResultResponse {

	private int totalMarks;
	
	private int correctAnswers;
	
	private int attempted;
		
	private UserResponse user;
	
	private QuestionPaperUserResponse questionPaper;

}
