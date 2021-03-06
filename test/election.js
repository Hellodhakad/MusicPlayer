var Election = artifacts.require("./Election.sol");

contract ('Election', function(accounts) {
    var electionInstance;
    
    it("Initialize with two candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });

    it("Initialize candidates with correct values", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "Contains the correct Id");
            assert.equal(candidate[1], "Narendra Modi", "Contains the correct Name");
            assert.equal(candidate[2], 0, "Contains the correct Vote Count");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, "Contains the correct Id");
            assert.equal(candidate[1], "Rahul Gandhi", "Contains the correct Name");
            assert.equal(candidate[2], 0, "Contains the correct Vote Count");
        })
    })
});
