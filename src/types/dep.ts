
export interface Dep {
    id: number;
    departmentName: string;
    boardName: string;
    isEnable: number;
    createdAt?: string;
    updatedAt?: string;
    value?: number;    // 新增可选字段
    label?: string; 
}

