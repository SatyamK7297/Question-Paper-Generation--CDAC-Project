package com.app.service;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.PaperAutoGenerationException;
import com.app.custom_exception.QuestionPaperNotFoundException;
import com.app.dto.QuestionPaperUserResponse;
import com.app.entities.Question;
import com.app.entities.QuestionPaper;
import com.app.entities.Result;
import com.app.entities.Subject;
import com.app.entities.User;
import com.app.repository.QuestionPaperRepository;
import com.app.repository.QuestionRepository;
import com.app.repository.ResultRepository;
import com.app.repository.SubjectRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class QuestionPaperServiceImpl implements QuestionPaperService{
   
	
	@Autowired
	private QuestionPaperRepository questionPaperRepo;
	@Autowired
	private SubjectRepository subjectRepo;
	
	@Autowired
	private QuestionRepository questionRepo;
	
    @Autowired
    private UserRepository userRepo;
    
    @Autowired
    private ResultRepository resultRepo;
	
	@Autowired
	private ModelMapper mapper;

	@PostConstruct
	public void init() {
		System.out.println("in init " + mapper);
	}

	@Override
	public QuestionPaper addQuestionPaper(Long subject_id,QuestionPaper questionPaper) {
		Subject subject = subjectRepo.findById(subject_id).orElseThrow();
		subject.addQuestionPaper(questionPaper);
		return questionPaperRepo.save(questionPaper);
	}

	@Override
	public QuestionPaper updateQuestionPaper(QuestionPaper questionPaper) {
		return questionPaperRepo.save(questionPaper);
	}

	@Override
	public Set<QuestionPaper> getQuestionPaperBySubjectForAdmin(Long subject_id) {
		Subject subject = subjectRepo.findById(subject_id).orElseThrow();
	    return new HashSet<>(questionPaperRepo.findBySubjectAndExpired(subject,false));
	}
	
	@Override
	public Set<QuestionPaperUserResponse> getQuestionPaperBySubjectForUser(Long subject_id,Long user_id) {
		Subject subject = subjectRepo.findById(subject_id).orElseThrow();
		User user = userRepo.findById(user_id).orElseThrow();
	    HashSet<QuestionPaper> qp  = new HashSet<>(questionPaperRepo.findBySubjectAndActiveAndExpired(subject,true,false));
	    
	    //This is for checking if user has given that quiz already
	    //so checking from result table 
	    //fetching all result of user
	    List<Result> result = resultRepo.findByUser(user);
	    
	    //checking to remove those question papers which are are active but already given by user will not be shown to him 
	    // removing papers which are already given by user
	    for(Result r : result) {
	    	qp.remove(r.getQuestionPaper());
	    }
	    
	    
	    HashSet<QuestionPaperUserResponse>  responseQuestionPaper = new HashSet<>();
	    for(QuestionPaper q : qp) {
	    	 responseQuestionPaper.add( mapper.map(q, QuestionPaperUserResponse.class));
	    }
	    
	    return responseQuestionPaper;
	  
	    
	}

	@Override
	public QuestionPaperUserResponse getQuestionPaper(Long questionPaper_id) {
		QuestionPaper qp = questionPaperRepo.findById(questionPaper_id).orElseThrow(() -> new QuestionPaperNotFoundException("Question Paper not available for provided id"));
        return mapper.map(qp, QuestionPaperUserResponse.class);	
	 }

	@Override
	public void deleteQuestionPaper(Long questionPaper_id) {
		QuestionPaper questionPaper = questionPaperRepo.findById(questionPaper_id).orElseThrow(() -> new QuestionPaperNotFoundException("Question Paper not available for provided id"));
		Set<Question> questionSet = questionPaper.getQuestions();
		questionPaper.setQuestions(null);
		for(Question q : questionSet) {
			q.setQuestionPaper(null);
		}
		questionPaper.getSubject().removeQuestionPaper(questionPaper);
		questionPaperRepo.deleteById(questionPaper_id);
	}

	@Override
	public QuestionPaper generateQuestionPaperManually(Long subject_id,QuestionPaper questionPaper) {
		Subject subject = subjectRepo.findById(subject_id).orElseThrow();
		Set<Question> questionSet = questionPaper.getQuestions();
		for(Question q : questionSet) {
			q.setQuestionPaper(questionPaper);
			q.setSubject(subject);
			questionRepo.save(q);
		}
		
		subject.addQuestionPaper(questionPaper);
		return questionPaper;
	}

	@Override
	public QuestionPaper generateQuestionPaperAuto(Long subject_id,QuestionPaper questionPaper) {
		
	  Subject subject = subjectRepo.findById(subject_id).orElseThrow();
	  Set<Question> questionSet = new LinkedHashSet<Question> (questionRepo.limitQuestion(subject_id, PageRequest.of(0, questionPaper.getNumberOfQuestions())));
	  if(questionSet.size() < questionPaper.getNumberOfQuestions())
		  throw new PaperAutoGenerationException("Insufficent Questions available in database Auto Generation Failed");
	  for(Question q : questionSet) {
		  questionPaper.addQuestion(q);
	  }
	  subject.addQuestionPaper(questionPaper);
	  
	  return questionPaper;
	  
	}

	@Override
	public void questionPaperExpired(Long questionPaper_id) {
		QuestionPaper qp =  questionPaperRepo.findById(questionPaper_id).orElseThrow(() -> new QuestionPaperNotFoundException("Question Paper not available for provided id"));
        qp.setExpired(true);
        Set<Question> questionSet = qp.getQuestions();
        
        
		for(Question q : questionSet) {
			q.setQuestionPaper(null);
		}
		qp.setQuestions(null);
		
	}

	@Override
	public boolean isActive(Long questionPaper_id) {
		QuestionPaper qp =  questionPaperRepo.findById(questionPaper_id).orElseThrow(() -> new QuestionPaperNotFoundException("Question Paper not available for provided id"));
        qp.setActive(qp.isActive() == true ? false : true);
        return qp.isActive();
	}

	@Override
	public QuestionPaper getQuestionPaperById(Long questionPaper_id) {
		 return questionPaperRepo.findById(questionPaper_id).orElseThrow(() -> new QuestionPaperNotFoundException("Question Paper not available for provided id"));
	}
	
	


	
	
	
	
	
}
