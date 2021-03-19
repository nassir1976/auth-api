'use strict';

const supergoose = require('@code-fellows/supergoose');
const express = require('express');
const supertest = require ('supertest');
const server = require('../src/server.js');
const request = supergoose(server.server);



describe('testing server for create a food', () =>{
  it ('should create a food on POST /food', async () => {
    const response = await request.post('/api/v1/food').send({
      name: 'banana',
      calories: 23,
      type: 'FRUIT'
    });
    expect(response.status).toEqual(201);
    expect(response.body._id).toBeDefined();
    expect(response.body.name).toEqual('banana')
  });
});


describe('testing for finding a food by ID', () =>{
  it ('should return a food object if correctly used', async () => {
    const response = await request.post('/api/v1/food').send({
      name: 'pasta',
      calories: 20,
      type: 'FRUIT'
    });
    const findResponse = await request.get(`/api/v1/food/${response.body._id}`);
    expect(findResponse.status).toEqual(200);
    expect(findResponse.body._id).toEqual(response.body._id);
  })
})

// describe('testing for retrieving food database', () =>{
//   it ('should return a food array if correctly used', async () => {
//     const response = await request.get('/api/v1/food');
//     expect(response.status).toEqual(200);
//     expect(Array.isArray(response.body)).toEqual(true);
//   })
// })

describe('testing for updating a food by ID', () =>{
  it ('should update a food object if correctly used', async () => {
    const response = await request.post('/api/v1/food').send({
      name: 'orange',
      calories: 20,
      type: 'FRUIT'
    });
    const updateResponse = await request.put(`/api/v1/food/${response.body._id}`).send({
      name: 'cook',
      calories: 15,
      type: 'FRUIT'
    });
    expect(updateResponse.status).toEqual(200);
    expect(updateResponse.body._id).toEqual(response.body._id);
    const findResponse = await request.get(`/api/v1/food/${response.body._id}`);
    expect(findResponse.body.name).toEqual('cook');
  })
})

describe('testing for deleting a food by ID', () =>{
  it ('should delete a food object if correctly used', async () => {
    const response = await request.post('/api/v1/food').send({
      name: 'strwbery',
      calories: 20,
      type: 'FRUIT'
    });
    const deleteResponse = await request.delete(`/api/v1/food/${response.body._id}`);
    expect(deleteResponse.status).toEqual(200);
    expect(deleteResponse.body.name).toEqual("strwbery");
    expect(deleteResponse.body.type).toEqual("FRUIT");
  })
})

describe('testing server for create clothes', () =>{
  it ('should create a food on POST /clothes', async () => {
    const response = await request.post('/api/v1/clothes').send({
      name: 'pant',
      color: 'red',
      size: 'medium'
    });
    expect(response.status).toEqual(201);
    expect(response.body._id).toBeDefined();
    expect(response.body.name).toEqual('pant')
  });
});


describe('testing for finding a cloth by ID', () =>{
  it ('should return a clothing object if correctly used', async () => {
    const response = await request.post('/api/v1/clothes').send({
      name: 'raincote',
      color: 'black',
      size: 'medium'
    });
    const findResponse = await request.get(`/api/v1/clothes/${response.body._id}`);
    expect(findResponse.status).toEqual(200);
    expect(findResponse.body._id).toEqual(response.body._id);
  })
})

describe('testing for retrieving clothes database', () =>{
  it ('should return a clothes array if correctly used', async () => {
    const response = await request.get('/api/v1/clothes');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  })
})

describe('testing for updating a cloth by ID', () =>{
  it ('should update a cloth object if correctly used', async () => {
    const response = await request.post('/api/v1/clothes').send({
      name: 'jense',
      color: 'black',
      size: 'medium'
    });
    const updateResponse = await request.put(`/api/v1/clothes/${response.body._id}`).send({
      name: 'ta',
      color: 'black',
      size: 'medium'
    });
    expect(updateResponse.status).toEqual(200);
    expect(updateResponse.body._id).toEqual(response.body._id);
    const findResponse = await request.get(`/api/v1/clothes/${response.body._id}`);
    expect(findResponse.body.name).toEqual('ta');
  })
})

describe('testing for deleting a food by ID', () =>{
  it ('should delete a food object if correctly used', async () => {
    const response = await request.post('/api/v1/clothes').send({
      name: 'pant',
      color: 'red',
      size: 'medium'
    });
    const deleteResponse = await request.delete(`/api/v1/clothes/${response.body._id}`);
    expect(deleteResponse.status).toEqual(200);
    expect(deleteResponse.body.name).toEqual("pant");
    expect(deleteResponse.body.size).toEqual("medium");
  })
})