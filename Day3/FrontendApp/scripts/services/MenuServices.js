'use strict';

hrApp.value('EmployeeActionsService', [
    {
        label: "List employees",
        url: "#/employeeList"
    },
    {
        label: "Add employee",
        url: "#/employeeAdd"
    }
]);

hrApp.value('JobActionsService', [
    {
        label: "List jobs",
        url: "#/jobList"
    },
    {
        label: "Add job",
        url: "#/jobAdd"
    }
]);

hrApp.value('DepartmentActionsService', [
    {
        label: "List departments",
        url: "#/departmentList"
    },
    {
        label: "Add department",
        url: "#/departmentAdd"
    }
]);

hrApp.value('LocationActionsService', [
    {
        label: "List locations",
        url: "#/locationList"
    },
    {
        label: "Add location",
        url: "#/locationAdd"
    }
]);