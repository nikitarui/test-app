var assert = require('chai').assert;

describe('Main Test', function(){

    this.timeout(10000);
    this.slow(2000);

    it('test 1', function(done){

        setTimeout(function(){
            console.log("test 1");
            done();
        }, 5000);

    });

    it('tets 2', function(){
        console.log("test 2");
    });

    it('tets 2', function(){
        console.log("test 2");
    });

    it('test3', function(){
        console.log("test");
    })

})

