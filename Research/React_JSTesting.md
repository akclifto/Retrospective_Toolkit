# Research React and JS testing (4 hrs)

## Adam Clifton Section

### Contents

- [Jest Overview](#Jest)
- [Jest Matchers](#Jest-Matchers)
- [Jest Truthiness](#Jest-Truthiness)
- [Jest Testing with Async](#Jest-Testing-Async-Code)
- [Jest Setup and Teardown](#Jest-Setup-and-Teardown)
- [Jest Mock Functions](#Mock-Functions)
- [Jest Platform](#Jest-Platform)
- [Jest Plugins](#Jest-Plugins)
- [React Jest Testing](#Jest-Testing-with-React)
- [React DOM Testing](#React-DOM-Testing)

### Links

- [Jest Documentation](https://jestjs.io/)  
- [Jest Using Matchers](https://jestjs.io/docs/en/using-matchers)
- [Jest With Async](https://jestjs.io/docs/en/asynchronous)  
- [Jest Setup and Teardown](https://jestjs.io/docs/en/setup-teardown)
- [Jest Mock Functions](https://jestjs.io/docs/en/mock-functions)
- [Jest Mock Functions](https://jestjs.io/docs/en/mock-functions)
- [Jest Platform Modules](https://jestjs.io/docs/en/jest-platform)
- [Jest React Testing](https://jestjs.io/docs/en/tutorial-react)

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

Jest Matchers test for equality.  Common matchers:

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

#### Mock Functions

Mock functions are used to simulate links between code without actual implementation of a  
function, capture calls to/from functions, and capture instances of constructors to allow  
test-time configuration return values.

This is similar to mock functions used in JUnit for Java.  

For example, we have a function that loops through some data and returns items:

```
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
```

To test the above example, mock functions are used to inspect the mock function's state to make sure the  
callback() is invoked correctly:

```
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42);
```

What's new in the above is the `jest.fn()` call.  This does what you think it would: it creates a mock function directly in testing.  The remaining parameters make use of [Jest Matchers](#Jest-Matchers) discussed above. To mock an object method, you can use the `jest.spyOn` calls; to mock a whole module, you can use the `jest.mock` call.

the `.mock` property holds data about how the function is called and where it is returned.  It also tracks the value of `this` for each call:

```
const myMock = jest.fn();

const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock.instances);
// > [ <a>, <b> ]
```

The `.mock` property is used to assert functions get called, instantiated and return values:

```
// The function was called exactly once
expect(someMockFunction.mock.calls.length).toBe(1);

// The first arg of the first call to the function was 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

// The second arg of the first call to the function was 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

// The return value of the first call to the function was 'return value'
expect(someMockFunction.mock.results[0].value).toBe('return value');

// This function was instantiated exactly twice
expect(someMockFunction.mock.instances.length).toBe(2);

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
expect(someMockFunction.mock.instances[0].name).toEqual('test');
```

There are many varieties of mock functions that can be used, including mocking modules, names, implementations, and custom matchers.

[Mock functions for tests here](https://jestjs.io/docs/en/mock-functions)

#### Jest Platform

I'm not going to cover this individually, but it is possible to cherry-pick modules and tools from Jest that you want and implement them only.

[Jest Platform here](https://jestjs.io/docs/en/jest-platform)

#### Jest Plugins

Jest has plugins that help with ease of use for the following:

- [vscode-jest](https://github.com/jest-community/vscode-jest)
- [jest-extended](https://github.com/jest-community/jest-extended)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [awesome-jest](https://github.com/jest-community/awesome-jest)

### Jest Testing with React

Create-react-app ships with Jest, we it should be installed in our toolkit already. We will just need to install the renderer for snapshots:

`yarn add --dev react-test-renderer` to install with yarn.

From here, we would need to create a snapshot test for Components.  The example test is for link components.  
Here is the sample code for a Link components that handles hyperlinks:

```
// Link.react.js
import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}
```

From here, we would need to create a test renderer to interact with the component and capture the output in a snapshot file:

```
// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link.react';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
```

Running `yarn test` or `jest` will produce the following output file:

```
// __tests__/__snapshots__/Link.react.test.js.snap
exports[`Link changes the class when hovered 1`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}>
  Facebook
</a>
`;

exports[`Link changes the class when hovered 2`] = `
<a
  className="hovered"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}>
  Facebook
</a>
`;

exports[`Link changes the class when hovered 3`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}>
  Facebook
</a>
`;
```

So, each `yarn test` will produce a new snapshot output file.  These output files will be used to compare to eachother when something fails.  Each snapshot should be committed to our Github along with code changes.  

If a snapshot fails, we will need to inspect where is from an intended or unintended change.  If it is intended, we should invoke Jest with `jest -u` to overwrite the existing snapshot.

[Samples of snapshot example above are here](https://github.com/facebook/jest/tree/master/examples/snapshot)

[More React testing with Jest here](https://jestjs.io/docs/en/tutorial-react)

#### React DOM Testing

To make assertions in DOM testing and to manipulate components, there's three tools we may use:

- [react-testing-library](https://github.com/testing-library/react-testing-library)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [React's TestUtils](https://reactjs.org/docs/test-utils.html)

These are covered in the documentation and we can choose which we like best to use.  
