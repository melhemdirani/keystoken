import { AllProjects } from './data';

const newDate = (dates) => dates.slice(3,6) + dates.slice(0,3) + dates.slice(6,20)
const date = (dates) => dates === 'Ongoing' ? Date.now() : dates.length === 10 ? new Date(newDate(dates)) : new Date (dates)
export const  SortedProjects = AllProjects.sort((a, b) => new Date (date(b.Column4) ) - new Date (date(a.Column4)) )



