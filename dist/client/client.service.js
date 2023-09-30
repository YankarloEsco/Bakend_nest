"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
let ClientService = class ClientService {
    constructor() {
        this.clients = [
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
        ];
    }
    findAll() {
        return this.clients;
    }
    findById(id) {
        const client = this.clients.find(c => c.id === id);
        if (!client) {
            throw new exceptions_1.NotFoundException(`Client with id ${id} does not exist`);
        }
        return client;
    }
    updateClient(clientbody, id) {
        const client = this.clients.find(c => c.id === id);
        if (!client) {
            throw new exceptions_1.NotFoundException(`Client with id ${id} does not exist`);
        }
        return { status: "cliente actualizado" };
    }
    deleteClient(id) {
        const client = this.clients.find(c => c.id === id);
        if (!client) {
            throw new exceptions_1.NotFoundException(`Client with id ${id} does not exist`);
        }
        return { status: "cliente Eliminado" };
    }
    createClient(clientbody) {
        const client = this.clients.find(c => c.id === clientbody.id);
        if (client) {
            throw new exceptions_1.NotFoundException(`Client with id ${clientbody.id} exist`);
        }
        return { status: "cliente creado" };
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)()
], ClientService);
//# sourceMappingURL=client.service.js.map