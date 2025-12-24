export const checkEligibility = (student, company) => {
    const reasons = [];
    let eligible = true;

    // Check CGPA
    if (parseFloat(student.cgpa) < company.eligibility.minCGPA) {
        eligible = false;
        reasons.push(`Minimum CGPA required: ${company.eligibility.minCGPA}`);
    }

    // Check Backlogs
    if (parseInt(student.backlogs) > company.eligibility.maxBacklogs) {
        eligible = false;
        reasons.push(`Max backlogs allowed: ${company.eligibility.maxBacklogs}`);
    }

    // Check Department
    const deptAllowed = company.eligibility.departments.includes("All") ||
        company.eligibility.departments.includes(student.department);

    if (!deptAllowed) {
        eligible = false;
        reasons.push(`Eligible departments: ${company.eligibility.departments.join(", ")}`);
    }

    return { eligible, reasons };
};
