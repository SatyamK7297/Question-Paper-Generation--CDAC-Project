package com.app.custom_exception;

@SuppressWarnings("serial")
public class QuestionNotFoundException extends RuntimeException{
	 public QuestionNotFoundException(String msg) {
		  super(msg);
	  }
}
