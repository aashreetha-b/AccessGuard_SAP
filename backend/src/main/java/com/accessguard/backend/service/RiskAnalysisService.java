package com.accessguard.backend.service;

import com.accessguard.backend.dto.AnalysisRequest;
import java.util.stream.Collectors;

import com.accessguard.backend.dto.AnalysisResponse;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.accessguard.backend.model.ConflictRule;
import com.accessguard.backend.util.SampleData;

@Service
public class RiskAnalysisService {

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

    	List<ConflictRule> conflicts = findConflicts(request.getRoles());
    	int riskScore = calculateRiskScore(conflicts);

        String riskLevel = determineRiskLevel(riskScore);

        String recommendation = generateRecommendation(riskScore);

        List<String> conflictDescriptions = conflicts.stream()
                .map(ConflictRule::getDescription)
                .collect(Collectors.toList());

        return new AnalysisResponse(
                riskScore,
                riskLevel,
                conflictDescriptions,
                recommendation);
    }

}