package com.accessguard.backend.dto;

import java.util.List;

public class AnalysisRequest {

    private String userId;
    private List<String> roles;

    public AnalysisRequest() {
    }

    public AnalysisRequest(String userId, List<String> roles) {
        this.userId = userId;
        this.roles = roles;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}