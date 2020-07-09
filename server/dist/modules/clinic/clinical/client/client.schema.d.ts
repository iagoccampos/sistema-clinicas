import * as mongoose from 'mongoose';
export declare const ClientSchema: mongoose.Schema<any>;
export declare class ClientDto {
    name: string;
    card?: number;
    rg?: string;
    cpf?: string;
    birthday?: Date;
}
export declare class ClientQuery {
    name?: string;
    card?: number;
    birthday?: string;
}
export interface Client extends mongoose.Document {
    _id: string;
    name: string;
    card: number;
    rg?: string;
    cpf?: string;
    birthday: Date;
    deleted: boolean;
    clinic: string;
}
