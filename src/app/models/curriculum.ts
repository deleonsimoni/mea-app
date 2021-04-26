import { ProfessionalPerformance } from './professional-performance';

export type Curriculum = {
  name: string;
  description: string;
  profileLinks: Array<any>;
  formations: Array<any>;
  professionalPerformances: Array<ProfessionalPerformance>;
};
