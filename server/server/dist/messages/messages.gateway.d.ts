import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket } from 'socket.io';
export declare class MessagesGateway {
    private readonly messagesService;
    server: Server;
    constructor(messagesService: MessagesService);
    create(createMessageDto: CreateMessageDto): Promise<void>;
    findAll(): import("./entities/message.entity").Message[];
    findOne(id: number): string;
    remove(id: number): string;
    joinRoom(name: string, client: Socket): void;
    typing(isBoolean: boolean, client: Socket): Promise<void>;
}
