package com.accessguard.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.accessguard.backend.dto.AnalysisRequest;
import com.accessguard.backend.dto.AnalysisResponse;
import com.accessguard.backend.service.RiskAnalysisService;

@RestController
@RequestMapping("/api/v1")
public class RiskAnalysisController {

    @Autowired
    private RiskAnalysisService riskAnalysisService;

    @PostMapping("/analyze")
    public AnalysisResponse analyze(@RequestBody AnalysisRequest request) {

        return riskAnalysisService.analyze(request);

    }

}