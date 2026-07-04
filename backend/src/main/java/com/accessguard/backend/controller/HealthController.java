package com.accessguard.backend.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/api/v1/health")
    public Map<String, Object> health() {

        Map<String, Object> response = new HashMap<>();

        response.put("status", "UP");
        response.put("service", "AccessGuard Backend");
        response.put("version", "1.0.0");
        response.put("timestamp", LocalDateTime.now());

        return response;
    }
}