import { Level } from './level';

export interface Course {
    id: string,
    title: string,
    describtion: string,
    price: number,
    level: Level,
    isAdded: boolean
} 