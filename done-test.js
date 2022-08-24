const assert = require("assert");
it("should use `done` for test?", (done) => {
    const promise = Promise.resolve(42);
    promise.then((value) => {
        assert(value === 42);
        done();
    });
})