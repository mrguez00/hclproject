export class Ticket {
    public Id: number;
    public Value: string;

    constructor(inspectionItemId: number) {
        this.Id = 0;
        this.Value = "";
    }

    public LoadData(data: any) {
        this.Id = data.Id;
        this.Value = data.Value;
    }
}

