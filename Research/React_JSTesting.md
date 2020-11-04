# Research React and JS testing (4 hrs)

## Adam Clifton Section:

Links:

- [Jest Documentation](https://jestjs.io/)  
- [Jest Using Matchers](https://jestjs.io/docs/en/using-matchers)
- [Jest With Async](https://jestjs.io/docs/en/asynchronous)  
- [Jest Setup and Teardown](https://jestjs.io/docs/en/setup-teardown)
- [Jest Mock Functions](https://jestjs.io/docs/en/mock-functions)

### Jest

`yarn add --dev jest` to install Jest with Yarn.

Basic implementation, we have a file called `sum.js`:

```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

We make a test for it called `sum.test.js`:

```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Add scripts to top-level `package.json` file:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

Then run `yarn test`.  
The output result is:

```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

#### Jest Matchers

Common matchers:

- Test for equality
  - `expect(something).toBe(someEquality)`
    - uses keywords `expect` and `.toBe` to check for an expectation object.
  - `expect(something).toEqual(exactEquality)`
    - uses keyword `.toEqual` to check for exact equality. toEqual recursively checks every field.
  - `expect(something).not.toBe(equality)`
    - uses keyword `.not` to test fort the opposite of the matcher.

#### Jest Truthiness

Truthiness distinguishes between `undefined`, `null`, and `false`, yet doesn't treat them  
differently during testing.  Jest allows explicit use with keywords:

- `toBeNull` matches only `null`
- `toBeUndefined` matches only `undefined`
- `toBeDefined` is the opposite of `toBeUndefined`
- `toBeTruthy` matches anything that an if statement treats as `true`
- `toBeFalsy` matches anything that an if statement treats as `false`

Use the matcher that most closely corresponds to what you want your code to do.

Additions matchers for Strings, Numbers, Arrays and Iterables, and Exceptions  
can be found here:
[Jest Using Matchers](https://jestjs.io/docs/en/using-matchers)

#### Jest Testing Async Code

When testing async, we want to make sure we fetch some data from the backend, and then  
call back the data once the backend does whatever it needs to do to fetch some data.  
This is handled in Jest testing using an argument called `done`.  Jest will wait until  
the `done` callback is called before finishing the testing.  

For example, we have a fetchData(callback) func to get something from the backend, and a  
callBack(data) func that retrieved the data response from the backend.  This would be done as:

```
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
```

In the above, if the done isn't called, the test fails, which means the callBack either never occurs  
or the callBack data fetched wasn't as expected.  

Jest works using Promises as well using `.resolves` / `.rejects` keywords.  Alternatively, you can use  
`async` / `await` calls to handle async testing.  
[More async here](https://jestjs.io/docs/en/asynchronous)  

#### Jest Setup and Teardown

Similar to JUnit (and probably all testing), you may need some setup before testing and teardown of  
the setup upon completion. Jest using keyword `beforeEach` and `afterEach` to handle that:

```
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

One-time testing uses keywords `beforeAll` and `afterAll`.  
Scoping can be done using the keyword `describe` to group tests together.  
[More setup and teardown here](https://jestjs.io/docs/en/setup-teardown)  
[Mock functions for tests here](https://jestjs.io/docs/en/mock-functions)
