import { DeptModel } from "./dept.model";

export class Res {
    message: string | undefined;
    success: boolean | undefined;
    payload!: DeptModel[];
}