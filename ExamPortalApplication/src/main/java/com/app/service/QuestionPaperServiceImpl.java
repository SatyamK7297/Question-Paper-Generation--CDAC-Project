package com.app.service;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.custom_exception.QuestionPaperNotFoundException;
import com.app.dto.QuestionPaperUserResponse;
import com.app.entities.ExpiredQuestionPaperBackup;
import com.app.entities.Question;
import com.app.entities.QuestionPaper;
import com.app.entities.Subject;
import com.app.repository.ExpiredQuestionPaperBackupRepository;
import com.app.repository.QuestionPaperRepository;
import com.app.repository.QuestionRepository;
import com.app.repository.SubjectRepository;

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
	private ExpiredQuestionPaperBackupRepository backupRepo;
     
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
	public Set<QuestionPaperUserResponse> getQuestionPaperBySubjectForUser(Long subject_id) {
		Subject subject = subjectRepo.findById(subject_id).orElseThrow();
	    HashSet<QuestionPaper> qp  = new HashSet<>(questionPaperRepo.findBySubjectAndActiveAndExpired(subject,true,false));
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
			 ExpiredQuestionPaperBackup ex = mapper.map(q, ExpiredQuestionPaperBackup.class);
			 backupRepo.save(ex);
			q.setQuestionPaper(null);
		}
		
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
