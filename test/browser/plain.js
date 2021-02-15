import {newTestCase, defaultCase, buildFakeDOM } from './test_case.js';

describe('plain browser', function() {

  it('should return relevance key', async function() {
    await buildFakeDOM.bind(this, defaultCase)();
    var out = this.hljs.highlight("javascript","");
    out.relevance.should.equal(0);
  });

  it('should highlight block', defaultCase.runner);
});
