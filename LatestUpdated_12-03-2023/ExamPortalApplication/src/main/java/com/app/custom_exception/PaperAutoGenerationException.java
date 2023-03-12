package com.app.custom_exception;
@SuppressWarnings("serial")
public class PaperAutoGenerationException extends RuntimeException{
	 public PaperAutoGenerationException(String msg) {
		  super(msg);
	  }
}
