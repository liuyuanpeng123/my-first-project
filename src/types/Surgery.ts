
export interface Surgery  {
    code: string;
    status: string;
    count: number;
    sequence: string;
    surgeryName: string;
    infection?: string;
    mainSurgeon: string;
    assistantSurgeon: string;
    anesthesiologist: string;
    circulator: string;
    duration?: string;
    totalTime?:number;
    nowTime?:number;
}

