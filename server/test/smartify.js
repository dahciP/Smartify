let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let userid = '636ba27e36fa9e9069f5888b';

chai.use(chaiHttp);

describe('Validate Event', () => {

    describe('Test 1 : BnBs is getting displayed', () => {
        it('It should display BnBs', async () => {
            chai
                .request('http://localhost:5000')
                .get('/profile/')
                .then((res)=> {
                    chai.expect(res).to.have.status(200);
                    // res.should.have.status(200)
                });
        });
    })

    describe('Test 2 : Viewing a incorrect BnB', () => {
        it('It should return status code 400', async () => {
            await chai
                .request('http://localhost:5000')
                .get('/user/' + userid)
                .then((res) => {
                    chai.expect(res).to.have.status(200);
                  })
        });
    });

    describe('Test 3 : Viewing course', () => {
        it('It should return status code 200', async () => {
            await chai
                .request('http://localhost:5000')
                .get('/course/')
                .then((res) => {
                    chai.expect(res).to.have.status(200);
                })
        })
    })

});