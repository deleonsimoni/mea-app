import { Activity } from './activity';
import { Job } from './job';

export type ProfessionalPerformance = {
  _id?: string;
  institution: string;
  jobs: Array<Job>;
  activities: Array<Activity>;
};
