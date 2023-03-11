package com.app.exception_handler;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.app.custom_exception.PaperAutoGenerationException;
import com.app.custom_exception.UserNotFoundException;
import com.app.dto.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		System.out.println("in handle MethodArgumentNotValidException " + e);
		List<FieldError> list = e.getFieldErrors();
		Map<String, String> map = list.stream() // Stream<FieldError>
				.collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
																							
		return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<?> handleUserNotFoundException(UserNotFoundException e) {
		System.out.println("in catch-all run time exc" + e);
         System.out.println(e.getMessage());
		return ResponseEntity.
				status(HttpStatus.BAD_REQUEST).
				body(new ApiResponse("Please Enter Valid Credentials",e.getMessage()));
		
	}
	
	@ExceptionHandler(PaperAutoGenerationException.class)
	public ResponseEntity<?> handlePaperAutoGenerationException(UserNotFoundException e) {
		System.out.println("in catch-all run time exc" + e);
         System.out.println(e.getMessage());
		return ResponseEntity.
				status(HttpStatus.INTERNAL_SERVER_ERROR).
				body(new ApiResponse("Insufficient questions available  to auto generate paper",e.getMessage()));
		
	}

	// catch-all : RuntimeExc
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException e) {
		System.out.println("in catch-all run time exc" + e);

		return ResponseEntity.
				status(HttpStatus.INTERNAL_SERVER_ERROR).
				body(new ApiResponse(e.getMessage()));
		
	}
	// catch-all : Exception
		@ExceptionHandler(Exception.class)
		public ResponseEntity<?> handleException(Exception e) {
			System.out.println("in catch-all exc " + e);
	//		e.printStackTrace();
			return ResponseEntity.
					status(HttpStatus.INTERNAL_SERVER_ERROR).
					body(new ApiResponse(e.getMessage()));
			
		}

}
