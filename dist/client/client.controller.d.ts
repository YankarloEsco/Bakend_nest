import { ClientService } from './client.service';
export declare class ClientController {
    private readonly clientSerive;
    constructor(clientSerive: ClientService);
    getClientes(): {
        id: number;
        nombre: string;
        direccion: string;
    }[];
    getClientById(id: number): {
        id: number;
        nombre: string;
        direccion: string;
    };
    updateClient(id: number, body: any): {
        status: string;
    };
    deleteById(id: number): {
        status: string;
    };
    createClient(body: any): {
        status: string;
    };
}
