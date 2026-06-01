
export interface IMessage {
    id: number,
    author: string,
    content: string,
    time: Date
}

export class Message implements IMessage {
    id: number;
    author: string;
    content: string;
    time: Date;
    constructor(id: number, author: string, content: string) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.time = new Date();
    }
}