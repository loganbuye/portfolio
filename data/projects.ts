export type Project = {
    title: string;
    description: string;
    tech: string[];
    links: { demo?: string; github?: string };
};

export const projects: Project[] = [
    {
        title: "Sales Analytics Dashboard (Capstone)",
        description: "Worked in a team to develop a sales analytics dashboard for using Angular for the frontend and Python Flask for the backend. Implemented data visualization features using Seaborn to help users gain insights from sales data.",
        tech: ["Angular", "Python", "Flask", "MongoDB", "Salesforce API", "Seaborn"],
        links: { github: ""}
    }
]