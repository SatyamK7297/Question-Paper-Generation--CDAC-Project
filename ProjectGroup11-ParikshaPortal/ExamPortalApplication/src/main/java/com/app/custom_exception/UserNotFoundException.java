package com.app.custom_exception;

@SuppressWarnings("serial")
public class UserNotFoundException extends RuntimeException{
	

	public UserNotFoundException(String msg) {
		super(msg);
	}
}
