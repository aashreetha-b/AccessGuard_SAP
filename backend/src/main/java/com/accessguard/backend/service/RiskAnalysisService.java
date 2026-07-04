package com.accessguard.backend.service;

import com.accessguard.backend.dto.AnalysisRequest;
import java.util.stream.Collectors;

import com.accessguard.backend.dto.AnalysisResponse;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.accessguard.backend.model.ConflictRule;
import com.accessguard.backend.util.SampleData;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class RiskAnalysisService {
	private static final Logger logger =
	        LoggerFactory.getLogger(RiskAnalysisService.class);

    public List<ConflictRule> findConflicts(List<String> userRoles) {

        List<ConflictRule> detectedConflicts = new ArrayList<>();

        List<ConflictRule> allRules = SampleData.getConflictRules();

        for (ConflictRule rule : allRules) {

            if (userRoles.contains(rule.getRoleA())
                    && userRoles.contains(rule.getRoleB())) {

                detectedConflicts.add(rule);

            }

        }

        return detectedConflicts;
    }
    
    private int calculateRiskScore(List<ConflictRule> conflicts) {

        int highestScore = 0;

        for (ConflictRule conflict : conflicts) {

            switch (conflict.getRiskLevel()) {

                case HIGH:
                    highestScore = Math.max(highestScore, 90);
                    break;

                case MEDIUM:
                    highestScore = Math.max(highestScore, 60);
                    break;

                case LOW:
                    highestScore = Math.max(highestScore, 30);
                    break;
            }
        }

        return highestScore;
    }
    
    private String determineRiskLevel(int riskScore) {

        if (riskScore >= 90) {
            return "HIGH";
        }

        if (riskScore >= 60) {
            return "MEDIUM";
        }

        if (riskScore >= 30) {
            return "LOW";
        }

        return "NONE";
    }
    
    private String generateRecommendation(int riskScore) {

        if (riskScore >= 90) {
            return "Separate duties by removing one conflicting role.";
        }

        if (riskScore >= 60) {
            return "Review role assignments and consider additional approval controls.";
        }

        if (riskScore >= 30) {
            return "Monitor the user for potential segregation-of-duty risks.";
        }

        return "No action required.";
    }
    
    public AnalysisResponse analyze(AnalysisRequest request) {

        logger.info("Roles received from frontend: {}", request.getRoles());

        List<ConflictRule> conflicts = findConflicts(request.getRoles());

        logger.info("Conflicts found: {}", conflicts.size());

        // 🔥 FIX: compute riskScore properly
        int riskScore = calculateRiskScore(conflicts);

        String riskLevel = determineRiskLevel(riskScore);

        String recommendation = generateRecommendation(riskScore);

        List<String> conflictDescriptions = conflicts.stream()
                .map(ConflictRule::getDescription)
                .collect(Collectors.toList());

        logger.info(
                "Risk Analysis Complete -> Employee: {}, Score: {}, Level: {}, Conflicts: {}",
                request.getUserId(),
                riskScore,
                riskLevel,
                conflicts.size()
        );

        return new AnalysisResponse(
                "AG-000001",
                request.getUserId(),
                riskScore,
                riskLevel,
                conflictDescriptions.size(),
                conflictDescriptions,
                recommendation,
                java.time.LocalDateTime.now().toString()
        );
    }

}