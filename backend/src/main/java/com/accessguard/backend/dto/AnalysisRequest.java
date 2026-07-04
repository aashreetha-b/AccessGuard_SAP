package com.accessguard.backend.dto;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public class AnalysisRequest {

    @NotBlank(message = "User ID is required")
    private String userId;

    @NotEmpty(message = "At least one role must be provided")
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