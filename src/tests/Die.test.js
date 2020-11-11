/**
 * Simple test done using React Testing Library to show how we can use it. 
 */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Die from '../components/Dice/Die';

describe('Testing that Die.js displays information correctly', () => {
    const mockDie = {
      EIGHT: {
        sides: 8,
        chance: 1 / 8,
      }
    };

test('renders Die component', ()=> {
    render (<Die />);
  })

test('renders initial text box given mock info', () => {

    const { getByText } = render(
    <Die 
      title='Test' 
      numSides={mockDie.EIGHT.sides}>
    </Die>
    )


    expect(getByText("This die has 8 sides and is an Test die.")).toBeTruthy();
  })

  test('Renders an update after rolling dice', async () => {
    const { getByText } = render(
      <Die 
        title = 'Roll Test'
        numSides={mockDie.EIGHT.sides}>
      </Die>
    )

    expect(getByText("This die has 8 sides and is an Roll Test die.")).toBeTruthy();
    fireEvent.click(getByText("Roll Dice"));
    waitFor(() => expect(getByText("This die has 8 sides and is an Roll Test die.")).toBeFalsy());
  })

})
