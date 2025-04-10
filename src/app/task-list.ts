import { MicroTaskList } from "./micro-task-list"

export interface TaskList {
    id:number;
    title:string;
    micro: MicroTaskList[];
}
