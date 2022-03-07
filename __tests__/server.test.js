'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const {db} = require('../src/models/index')
let id;
beforeAll( async () =>{
    await db.sync();
})
afterAll( async () =>{
    await db.drop();
})
describe('testing 404',()=>{
    it ('testing /person',async()=>{
        const response = await request.get('/wrongPath')
        expect(response.status).toEqual(404);
    })
    
    it ('testing bad method',async()=>{
         id =1;
        const response = await request.post('/')
        expect(response.status).toEqual(404);
    })
})