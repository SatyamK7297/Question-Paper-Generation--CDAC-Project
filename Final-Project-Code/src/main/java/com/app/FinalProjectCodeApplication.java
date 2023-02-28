package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"com.app.pojos"})
public class FinalProjectCodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalProjectCodeApplication.class, args);
	}

}
