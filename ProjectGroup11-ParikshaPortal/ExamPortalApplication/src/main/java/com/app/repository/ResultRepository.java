package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Result;
import com.app.entities.User;

public interface ResultRepository extends JpaRepository<Result, Long> {

	public List<Result> findByUser(User user);
	
}
