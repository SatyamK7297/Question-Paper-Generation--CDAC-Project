package com.app.custom_exception;


@SuppressWarnings("serial")
public class QuestionPaperNotFoundException extends RuntimeException{
  public QuestionPaperNotFoundException(String msg) {
	  super(msg);
  }
}
