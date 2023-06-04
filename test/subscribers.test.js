let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index.js")
const request = require("supertest")


//Assertion style

// Importing Dependencing
chai.should();
chai.use(chaiHttp);
const expect = chai.expect;


// Test suits for the subscribers API
 describe('subscribers API',()=>{


    //Test case for the GET /subscribers
    describe("GET /subscribers",()=>{
         it("It should get all the subscribers",(done)=>{
             // Make a request to the /subscribers endpoint
             chai.request(server)
                .get("/subscribers")
                 .end((err,response)=>{
                    // Assertions for response
                     response.should.have.status(200);
                     response.body.should.be.a('array');
                     response.body.length.should.be.eq(3);
                 done();    
                 });
         })  ;      
     });

      //Test case for the GET /subscribers/names
     describe("GET /subscribers/names",()=>{
        it("should return and array of subscribers name and subscribedChannel",(done)=>{
            // Make a request to the /subscribers/names endpoint
            chai.request(server)
               .get("/subscribers/names")
                .end((err,response)=>{
                     // Assertions for response
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.above(0);
                done();    
                });
        });     
    });

     //Test case for the GET /subscribers/:id
     describe("GET /subscribers/:id", () => {
        it("should return the subscribers details by Id", async () => {
             // Make an asynchronous request to the /subscribers/:id endpoint
           const response = await request(server).get("/subscribers/647bfc4d78582a2c30b8929f");
            // Assertions for response
           expect(response.statusCode).to.equal(200);
           expect(response.body._id).to.equal("647bfc4d78582a2c30b8929f");
         });
       });      
 })



