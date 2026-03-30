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
        links: { github: "https://github.com/ConDavison1/Sales-Analytic-Dashboard", demo: "https://sales-analytic-dashboard.web.app/login" }
    },
    {
        title: "Banking System",
        description: "Developed a console-based banking system in MIPS Assembly that allows users to create accounds, deposit, withdraw, and check balances.",
        tech: ["MIPS Assembly"],
        links: { github: "https://github.com/josshuabalita/BankingSystem-in-MIPS"}
    },
    {
        title: "Traffic Navigation System",
        description: "Created a traffic navigation system using Dijkstra's algorithm to find the shortest path between two points on a map.",
        tech: ["Python", "Dijkstra's Algorithm"],
        links: { github: "https://github.com/loganbuye/traffic-navigation-system"}
    }

]