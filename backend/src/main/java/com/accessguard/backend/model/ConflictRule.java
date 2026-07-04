package com.accessguard.backend.model;

public class ConflictRule {

    private String roleA;
    private String roleB;
    private RiskLevel riskLevel;
    private String description;

    public ConflictRule() {
    }

    public ConflictRule(String roleA,
                        String roleB,
                        RiskLevel riskLevel,
                        String description) {
        this.roleA = roleA;
        this.roleB = roleB;
        this.riskLevel = riskLevel;
        this.description = description;
    }

    public String getRoleA() {
        return roleA;
    }

    public void setRoleA(String roleA) {
        this.roleA = roleA;
    }

    public String getRoleB() {
        return roleB;
    }

    public void setRoleB(String roleB) {
        this.roleB = roleB;
    }

    public RiskLevel getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(RiskLevel riskLevel) {
        this.riskLevel = riskLevel;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}