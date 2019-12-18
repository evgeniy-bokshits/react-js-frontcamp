import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Header from './header';

afterEach(cleanup);

it('Header', () => {
  const {getByLabelText} = render(
    <Header/>
  );
  expect(queryByLabelText(/on/i)).toBeTruthy();
});