/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from "enzyme";
// Enzyme currently doesn't support React@^17.*, which is what we are using in the project.
// import Adapter from 'enzyme-adapter-react-16';
// There is a workaround for the time being, used below
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// This clears URL.createObjectURL error when testing.
global.URL.createObjectURL = jest.fn();

// Configures an adapter need to perform React tests when using Enzyme.
// See README.md for Enzyme documentation.
Enzyme.configure({ adapter: new Adapter() });
