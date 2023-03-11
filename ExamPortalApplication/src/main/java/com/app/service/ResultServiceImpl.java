package com.app.service;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.QuestionPaperUserResponse;
import com.app.dto.ResultResponse;
import com.app.dto.UserResponse;
import com.app.entities.Question;
import com.app.entities.QuestionPaper;
import com.app.entities.Result;
import com.app.entities.User;
import com.app.repository.QuestionPaperRepository;
import com.app.repository.ResultRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class ResultServiceImpl implements ResultService {


	@Autowired
	private ResultRepository resultRepo;

	@Autowired
	private QuestionService questionService;

	@Autowired
	private QuestionPaperRepository questionPaperRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ModelMapper mapper;

	@PostConstruct
	public void init() {
		System.out.println("in init " + mapper);
	}

	@Override
	public ResultResponse addResult(Long questionPaper_id, Long user_id, List<Question> questions) {
		int totalMarks = questions.size();
		int correctAnswers = 0;
		int attempted = 0;

		for(Question q : questions){
			Question question = questionService.getQuestion(q.getId());
			if(question.getAnswer().equalsIgnoreCase(q.getAnswerSubmitted())) {
				correctAnswers++;
				attempted++;
			}else if(q.getAnswerSubmitted() != null && !(q.getAnswerSubmitted().equals("")))  {
				attempted++;
			}
		}

		QuestionPaper qp = questionPaperRepo.findById(questionPaper_id).orElseThrow();
		User user = userRepo.findById(user_id).orElseThrow();

		Result result = new Result();
		result.setQuestionPaper(qp);
		result.setUser(user);
		result.setTotalMarks(totalMarks);
		result.setCorrectAnswers(correctAnswers);
		result.setAttempted(attempted);
		
		
		Result r = resultRepo.save(result);
		
		//entity to dto mapping
		QuestionPaperUserResponse qpur = mapper.map(qp, QuestionPaperUserResponse.class);
		UserResponse ur = mapper.map(user, UserResponse.class);
		ResultResponse resultResponse = mapper.map(r, ResultResponse.class);
		resultResponse.setQuestionPaper(qpur);
		resultResponse.setUser(ur);
		return resultResponse;
	}

	@Override
	public List<ResultResponse> getResultsForUser(Long user_id) {
        User user = userRepo.findById(user_id).orElseThrow();
		List<Result> results = resultRepo.findByUser(user);
		
		//entity to dto mapping
		List<ResultResponse> response = new ArrayList<>();
		for(Result r : results) {
			ResultResponse resultResponse = mapper.map(r, ResultResponse.class);
			QuestionPaperUserResponse qpur = mapper.map(r.getQuestionPaper(), QuestionPaperUserResponse.class);
			UserResponse ur = mapper.map(r.getUser(), UserResponse.class);
			resultResponse.setQuestionPaper(qpur);
			resultResponse.setUser(ur);
			response.add(resultResponse);
		}
		
	    return response;
		
	}

}
