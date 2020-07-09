import { ClientService } from './client.service';
import { ClientDto, ClientQuery } from './client.schema';
export declare class ClientController {
    private clientService;
    constructor(clientService: ClientService);
    getClients(clinicId: string, clientQuery: ClientQuery): Promise<import("./client.schema").Client[]>;
    createClient(clinicId: string, client: ClientDto): Promise<import("./client.schema").Client>;
    cardExists(clinicId: string, clientCard: number): Promise<boolean>;
    getClient(clientId: string): Promise<import("./client.schema").Client>;
    updateClient(clinicId: string, clientId: string, client: ClientDto): Promise<any>;
    deleteClient(clientId: string): Promise<import("./client.schema").Client>;
}
