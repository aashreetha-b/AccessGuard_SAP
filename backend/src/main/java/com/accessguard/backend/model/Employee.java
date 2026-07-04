package com.accessguard.backend.model;

import java.util.List;

public class Employee {

    private String userId;
    private String name;
    private String department;
    private List<String> roles;

    public Employee() {
    }

    public Employee(String userId, String name, String department, List<String> roles) {
        this.userId = userId;
        this.name = name;
        this.department = department;
        this.roles = roles;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}