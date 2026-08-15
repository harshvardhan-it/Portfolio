import { PERSONAL_INFO, PROJECTS, TECH_CATEGORIES } from './portfolioData';

export interface CommandResponse {
  type: 'text' | 'list' | 'error' | 'success' | 'table';
  content: string | string[];
}

export const executeTerminalCommand = (input: string): CommandResponse => {
  const cleanInput = input.trim().toLowerCase();

  switch (cleanInput) {
    case 'help':
      return {
        type: 'list',
        content: [
          'Available Commands:',
          '  whoami     - Quick candidate overview',
          '  skills     - View engineering tech stack matrix',
          '  projects   - List top featured product case studies',
          '  metrics    - Show quantifiable engineering impact',
          '  contact    - Display direct contact information',
          '  resume     - Get interactive resume link',
          '  clear      - Clear terminal screen',
          '  sudo hire  - Run executive recruiter decision override'
        ]
      };

    case 'whoami':
      return {
        type: 'text',
        content: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}\n${PERSONAL_INFO.shortBio}\nLocation: ${PERSONAL_INFO.location}`
      };

    case 'skills':
      const skillsList = TECH_CATEGORIES.map(cat => 
        `[${cat.title}]\n  ` + cat.skills.map(s => `${s.name} (${s.level})`).join(', ')
      );
      return {
        type: 'list',
        content: ['Technical Stack Matrix:', ...skillsList]
      };

    case 'projects':
      const projectList = PROJECTS.map((p, idx) => 
        `${idx + 1}. ${p.title}\n   Category: ${p.category} | Impact: ${p.impactMetrics[0]}`
      );
      return {
        type: 'list',
        content: ['Featured Engineering Case Studies:', ...projectList]
      };

    case 'metrics':
      const metricsList = PERSONAL_INFO.metrics.map(m => `  • ${m.label}: ${m.value}`);
      return {
        type: 'list',
        content: ['Quantifiable Impact Metrics:', ...metricsList]
      };

    case 'contact':
      return {
        type: 'list',
        content: [
          `Email: ${PERSONAL_INFO.email}`,
          `GitHub: ${PERSONAL_INFO.github}`,
          `LinkedIn: ${PERSONAL_INFO.linkedin}`,
          `Status: ${PERSONAL_INFO.status}`
        ]
      };

    case 'resume':
      return {
        type: 'success',
        content: 'Interactive Resume available below in section #resume or type Ctrl/Cmd+K.'
      };

    case 'sudo hire':
    case 'hire':
      return {
        type: 'success',
        content: 'ACCESS GRANTED: Candidate status set to [TOP CANDIDATE]. Direct recruiter interview pipeline initiated!'
      };

    default:
      return {
        type: 'error',
        content: `Command not recognized: "${input}". Type "help" for a list of available commands.`
      };
  }
};
