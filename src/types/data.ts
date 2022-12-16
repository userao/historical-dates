export interface IEvent {
  id: number;
  year: number;
  description: string;
  category: string;
};
export interface IActiveYears  {
  from: number | null;
  to: number | null;
};
export interface ICategoryState {
  activeCategory: string | null;
  activeYears: IActiveYears | null;
  activeEvents: IEvent[] | null;
  prevYears: IActiveYears | null;
};