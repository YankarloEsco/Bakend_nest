import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor (private readonly clientSerive: ClientService){}

    @Get()
    getClientes(){
        return this.clientSerive.findAll();
    }

    @Get(':id')
    getClientById(@Param('id', ParseIntPipe) id: number){
    
        console.log(`el id a buscar es ${id}`);

        return this.clientSerive.findById(id);

    }

    @Put(':id')
    updateClient(@Param('id', ParseIntPipe) id: number, @Body() body){
    
        console.log(`el id a actulizar es ${id}`);
        console.log(body);

        return this.clientSerive.updateClient(body, id);

    }

    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) id: number){
    
        console.log(`el id a eliminar es ${id}`);

        return this.clientSerive.deleteClient(id);

    }

    @Post()
    createClient(@Body() body){
    
        console.log(body);

        return this.clientSerive.createClient(body );

    }

}
