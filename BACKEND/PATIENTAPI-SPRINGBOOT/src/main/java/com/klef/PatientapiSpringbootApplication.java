package com.klef;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PatientapiSpringbootApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        // tell Tomcat what the source is
        return application.sources(PatientapiSpringbootApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(PatientapiSpringbootApplication.class, args);
        System.out.println("Project is Running!");
    }
}
