package com.accessguard.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.accessguard.backend.dto.AnalysisRequest;
import com.accessguard.backend.dto.AnalysisResponse;
import com.accessguard.backend.service.RiskAnalysisService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {
	    "http://localhost:5175",
	    "https://accessguard-sap-1.onrender.com"
	})

public class RiskAnalysisController {

    @Autowired
    private RiskAnalysisService riskAnalysisService;

    @PostMapping("/analyze")
    public AnalysisResponse analyze(@Valid @RequestBody AnalysisRequest request) {

        return riskAnalysisService.analyze(request);

    }

}