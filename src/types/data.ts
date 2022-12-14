export interface IEvent {
  id: number;
  year: number;
  description: string;
  category: string;
};
export interface IActiveYearsType  {
  from: number | null;
  to: number | null;
};