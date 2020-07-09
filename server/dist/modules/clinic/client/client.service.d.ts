import { Model } from 'mongoose';
import { Client, ClientDto, ClientQuery } from './client.schema';
export declare class ClientService {
    private clientModel;
    constructor(clientModel: Model<Client>);
    createClient(clientDto: ClientDto, clinicId: string): Promise<Client>;
    getClients(clinicId: string, query: ClientQuery): Promise<Client[]>;
    getClientById(clientId: string): Promise<Client>;
    getClientByCard(clientCard: number, clinicId: string): Promise<Client>;
    updateClient(clientDto: ClientDto, clinicId: string, clientId: string): Promise<any>;
    deleteClient(clientId: string): Promise<Client>;
    getBiggestCard(clinicId: string): Promise<number>;
    private getNewCard;
}
