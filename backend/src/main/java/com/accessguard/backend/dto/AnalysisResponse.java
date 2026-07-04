package com.accessguard.backend.dto;

import java.util.List;

public class AnalysisResponse {

    private int riskScore;
    private String riskLevel;
    private List<String> conflicts;
    private String recommendation;

    public AnalysisResponse() {
    }

    public AnalysisResponse(int riskScore,
                            String riskLevel,
                            List<String> conflicts,
                            String recommendation) {
        this.riskScore = riskScore;
        this.riskLevel = riskLevel;
        this.conflicts = conflicts;
        this.recommendation = recommendation;
    }

    public int getRiskScore() {
        return riskScore;
    }

    public void setRiskScore(int riskScore) {
        this.riskScore = riskScore;
    }

    public String getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(String riskLevel) {
        this.riskLevel = riskLevel;
    }

    public List<String> getConflicts() {
        return conflicts;
    }

    public void setConflicts(List<String> conflicts) {
        this.conflicts = conflicts;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }
}