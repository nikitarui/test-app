var assert = require('chai').should();

describe('People Test', function(){

    this.timeout(10000);
    this.slow(1000);

    class People{
        get age(): number {
            return this._age;
        }

        set age(value: number) {
            this._age = value;
        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        private _age:number = 0;
        private _name:string = '';

    }

    var p = new People();

    it('should be name equals Vasya', function(done){

        setTimeout(()=>{
            p.name = "Vasya";
            p.name.should.be.equal('Vasya');
            done();
        }, 2000);

    });

    it('should be age equals 24', function(){
        p.name = "Vasya";
        p.age = 23;
        p.age.should.be.equal(23);
    });


})

