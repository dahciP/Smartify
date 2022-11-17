let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let userid = '635e83b1b64f9f0c3c21ff56';
let courseid = '6362999733b0c60aa86780df';
let videoid = '63629a0733b0c60aa86780e1'

chai.use(chaiHttp);

describe('Validate Event', () => {

    describe('Test 1 : Profile should be displayed', () => {
        it('It should display profile', async () => {
            chai
                .request('http://localhost:5000')
                .get('/profile/')
                .then((res)=> {
                    chai.expect(res).to.have.status(200);
                });
        });
    })

    describe('Test 2 : Viewing a incorrect profile', () => {
        it('It should return status code 400', async () => {
            await chai
                .request('http://localhost:5000')
                .get('/user/' + userid)
                .then((res) => {
                    chai.expect(res).to.have.status(200);
                  })
        });
    });

    describe('Test 3 : Viewing course by id', () => {
        it('It should display course', async () => {
            await chai
                .request('http://localhost:5000')
                .get('/course/' + courseid)
                .then((res) => {
                    chai.expect(res).to.have.status(200);
                })
        })
    })

    describe('Test 4 : Viewing videos by course', () => {
        it('It should display course', async () => {
            await chai
                .request('http://localhost:5000')
                .get('/video/' + videoid)
                .then((res) => {
                    chai.expect(res).to.have.status(200);
                })
        })
    })

    // describe('Test 5 : Viewing a incorrect user', () => {
    //     it('It should return status code 400', async () => {
    //         await chai
    //             .request('http://localhost:5000')
    //             .post('/login/')
    //             .set('content-type', 'application/json')
    //             .send({ username:'shantanukelodu' })
    //             .then((res) => {
    //                 chai.expect(res).to.have.status(400);
    //             })
    //     });
    // });

});