import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
export declare class MessagesService {
    messages: Message[];
    clientToUser: {};
    join(name: string, clientId: string): Promise<unknown[]>;
    getClientName(clientId: string): any;
    create(createMessageDto: CreateMessageDto): Promise<{
        name: string;
        text: string;
    }>;
    findAll(): Message[];
    findOne(id: number): string;
    remove(id: number): string;
}
