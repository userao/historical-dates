import { createContext } from 'react';
import { IEvent } from '../types/data';

const EventsContext = createContext<IEvent[]>([]);

export default EventsContext;
