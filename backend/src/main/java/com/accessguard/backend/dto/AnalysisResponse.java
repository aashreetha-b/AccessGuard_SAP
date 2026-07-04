package com.accessguard.backend.dto;

import java.util.List;

public class AnalysisResponse {

    private String analysisId;
    private String employeeId;
    private int riskScore;
    private String riskLevel;
    private int conflictCount;
    private List<String> conflicts;
    private String recommendation;
    private String timestamp;

    public AnalysisResponse() {
    }

    public AnalysisResponse(String analysisId,
                            String employeeId,
                            int riskScore,
                            String riskLevel,
                            int conflictCount,
                            List<String> conflicts,
                            String recommendation,
                            String timestamp) {

        this.analysisId = analysisId;
        this.employeeId = employeeId;
        this.riskScore = riskScore;
        this.riskLevel = riskLevel;
        this.conflictCount = conflictCount;
        this.conflicts = conflicts;
        this.recommendation = recommendation;
        this.timestamp = timestamp;
    }

    public String getAnalysisId() {
        return analysisId;
    }

    public void setAnalysisId(String analysisId) {
        this.analysisId = analysisId;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
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

    public int getConflictCount() {
        return conflictCount;
    }

    public void setConflictCount(int conflictCount) {
        this.conflictCount = conflictCount;
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

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}