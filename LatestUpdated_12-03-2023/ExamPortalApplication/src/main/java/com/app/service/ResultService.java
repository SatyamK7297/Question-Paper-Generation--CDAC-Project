package com.app.service;

import java.util.List;

import com.app.dto.ResultResponse;
import com.app.entities.Question;

public interface ResultService {
    
	public ResultResponse addResult(Long questionPaper_id,Long user_id,List<Question> questions);
	
	public List<ResultResponse> getResultsForUser(Long user_id);
}
