export interface BreadcrumbModel {
  category: Category;
  value: string;
  link: string;
}

export enum Category {
  Subject = 'subject',
  Grade = 'grade',
  Claim = 'claim',
  Target = 'target'
}

export enum SubjectType {
  ELA = 'ELA',
  MATH = 'MATH'
}

export enum GradeType {
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  HighSchool = 'High School'
}

export enum ClaimType {
  One = '1',
  Two = '2',
  Three = '3',
  Four = '4'
}

export const BreadcrumbSortingOrders = [
  Category.Subject,
  Category.Grade,
  Category.Claim,
  Category.Target
];
