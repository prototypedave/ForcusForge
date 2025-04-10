import { MicroTaskList } from "./micro-task-list"

export interface TaskList {
    id:number;
    name:string;
    micro: MicroTaskList[];
}
