export class Result {
    constructor(
        public Success: boolean,
        public Value: any,
        public Message: string,
        public ExceptionMessage: string,
        public ExceptionInnerMessage: string
    ) { }
}
