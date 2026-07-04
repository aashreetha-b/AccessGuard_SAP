package com.accessguard.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI accessGuardOpenAPI() {

        return new OpenAPI()

                .info(new Info()

                        .title("AccessGuard API")

                        .description("AI-Assisted SAP Segregation of Duties Risk Analyzer")

                        .version("1.0.0")

                        .contact(new Contact()

                                .name("Aashreetha")

                                .email("your-email@example.com")));
    }

}