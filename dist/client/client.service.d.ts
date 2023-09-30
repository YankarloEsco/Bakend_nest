export declare class ClientService {
    private clients;
    findAll(): {
        id: number;
        nombre: string;
        direccion: string;
    }[];
    findById(id: number): {
        id: number;
        nombre: string;
        direccion: string;
    };
    updateClient(clientbody: any, id: any): {
        status: string;
    };
    deleteClient(id: any): {
        status: string;
    };
    createClient(clientbody: any): {
        status: string;
    };
}
