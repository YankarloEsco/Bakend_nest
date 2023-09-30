import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class ClientService {

    private clients = [
        {
            id: 1,
            nombre: 'Cliente 1',
            direccion: 'direccion 1'
        },
        {
            id: 2,
            nombre: 'Cliente 2',
            direccion: 'direccion 2'
        }
    ]

    findAll(){
        return this.clients;
    }

    findById(id: number){

        const client = this.clients.find( c => c.id === id);

        if(!client){
            throw new NotFoundException(`Client with id ${id} does not exist`);
        }

        return client;
    }

    updateClient(clientbody, id){

        //Validaciones del Cliente

        const client = this.clients.find( c => c.id === id);

        if(!client){
            throw new NotFoundException(`Client with id ${id} does not exist`);
        }

        //Logica para actulaizar el cliente
        
        return {status: "cliente actualizado"};
    }

    deleteClient(id){

        const client = this.clients.find( c => c.id === id);

        if(!client){
            throw new NotFoundException(`Client with id ${id} does not exist`);
        }

        //Logica para eliminar el cliente
        
        return {status: "cliente Eliminado"};
    }

    createClient(clientbody){

        //Validaciones del Cliente

        const client = this.clients.find( c => c.id === clientbody.id);

        if(client){
            throw new NotFoundException(`Client with id ${clientbody.id} exist`);
        }

        //Logica para Crear el cliente
        
        return {status: "cliente creado"};
    }

}


