package com.app;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"com.app.entities"})
public class ExamPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamPortalApplication.class, args);
	}
	
	@Bean 
	public ModelMapper configureMapper() {
		System.out.println("in config mapper....");
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		return modelMapper;
	}

}
