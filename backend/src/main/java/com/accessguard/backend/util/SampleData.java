package com.accessguard.backend.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.accessguard.backend.model.ConflictRule;
import com.accessguard.backend.model.Employee;
import com.accessguard.backend.model.RiskLevel;
import com.accessguard.backend.model.Role;

public class SampleData {

    public static List<Role> getRoles() {

        List<Role> roles = new ArrayList<>();

        roles.add(new Role("CREATE_VENDOR", "Create Vendor"));
        roles.add(new Role("APPROVE_PAYMENT", "Approve Payment"));
        roles.add(new Role("CREATE_USER", "Create User"));
        roles.add(new Role("ASSIGN_ADMIN", "Assign Admin"));
        roles.add(new Role("SUBMIT_EXPENSE", "Submit Expense"));
        roles.add(new Role("APPROVE_EXPENSE", "Approve Expense"));
        roles.add(new Role("CREATE_PO", "Create Purchase Order"));
        roles.add(new Role("APPROVE_PO", "Approve Purchase Order"));

        return roles;
    }

    public static List<Employee> getEmployees() {

        List<Employee> employees = new ArrayList<>();

        employees.add(new Employee(
                "EMP001",
                "John Miller",
                "Finance",
                Arrays.asList("CREATE_VENDOR", "APPROVE_PAYMENT")));

        employees.add(new Employee(
                "EMP002",
                "Sarah Johnson",
                "HR",
                Arrays.asList("CREATE_USER")));

        employees.add(new Employee(
                "EMP003",
                "David Lee",
                "Procurement",
                Arrays.asList("CREATE_PO")));

        employees.add(new Employee(
                "EMP004",
                "Priya Sharma",
                "IT",
                Arrays.asList("ASSIGN_ADMIN")));

        return employees;
    }

    public static List<ConflictRule> getConflictRules() {

        List<ConflictRule> rules = new ArrayList<>();

        rules.add(new ConflictRule(
                "Create Vendor",
                "Approve Payment",
                RiskLevel.HIGH,
                "Create Vendor + Approve Payment"));

        rules.add(new ConflictRule(
                "Create User",
                "Assign Admin",
                RiskLevel.HIGH,
                "Create User + Assign Admin"));

        rules.add(new ConflictRule(
                "Submit Expense",
                "Approve Expense",
                RiskLevel.MEDIUM,
                "Submit Expense + Approve Expense"));

        rules.add(new ConflictRule(
                "Create Purchase Order",
                "Approve Purchase Order",
                RiskLevel.HIGH,
                "Create Purchase Order + Approve Purchase Order"));

        return rules;
    }

}