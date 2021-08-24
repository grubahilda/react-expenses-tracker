import { PriorityEnum } from '../component/SavingGoals';

export type SavingGoalModel = {
    id: number,
    name: string,
    amount: number,
    priority: PriorityEnum
}