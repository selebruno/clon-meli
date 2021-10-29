var supertest = require('supertest-as-promised')(require('../../src/app'));
var expect = require('chai').expect;



describe('Routes', function() {

  
  describe('/api/items?q=', function() {
    it('GET responde con 200 y devuelve la información del parámetro por query', function() {
      return supertest 
        .get('/api/items?q=mate') 
        .expect(200)
        .expect('Content-Type', /json/) 
        .expect(function(res) {
          expect(res.body[0]).to.haveOwnProperty('author'); 
        });
    });
})
})

it('GET devuelve un estado 404 con un mensaje de error si el producto no existe', function() {
  return supertest
    .get('/api/items?q=jfsdfsdf')
    .expect(404)
    .expect('Content-Type', /json/)
    .expect(function(res) {
      expect(res.body).to.deep.eql({
        error: "no hay resultados",
      });;
    });
});


describe('/api/items/:id', function() {
  it('GET responde con 200 y devuelve la información del parámetro por id', function() {
    return supertest 
      .get('/api/items/MLA921412076') 
      .expect(200)
      .expect('Content-Type', /json/) 
      .expect(function(res) {
        expect(res.body).to.haveOwnProperty('author'); 
      });
  });
})

it('GET devuelve un estado 404 con un mensaje de error si el producto no existe', function() {
  return supertest
    .get('/api/items/jfsdfsdf')
    .expect(404)
    .expect('Content-Type', /json/)
    .expect(function(res) {
      expect(res.body).to.deep.eql({
        error: "no existe el producto",
      });;
    });
})


