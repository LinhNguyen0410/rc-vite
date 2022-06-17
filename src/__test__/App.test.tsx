// import * as React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from 'react-dom/client';
// import App from '../App';
// import { Provider } from 'react-redux';
// import { store } from '../redux/store';

const isEven = (number: number) => {
  return number % 2 === 0;
};

const plusString = (a: string, b: string) => {
  return a + b;
};
describe('is Even', function () {
  // it('should display pass in number', function () {
  //   let container = document.createElement('div');
  //   document.body.appendChild(container);
  //   act(() => {
  //     ReactDOM.createRoot(container).render(
  //       <Provider store={store}>
  //         <App num={30} />
  //       </Provider>
  //     );
  //   });
  //   const header = container.querySelector('h1');
  //   expect(header?.textContent).toBe('Hello world React! Num: 30');
  // });
  it.each([
    [2, true],
    [1, false],
  ])('even(%i)', (input, output) => {
    const result = isEven(input);
    expect(result).toBe(output);
  });
});

describe('plus string', () => {
  it('plus string', function () {
    expect(plusString('nhat', 'khanh')).toBe(2);
  });
  it('plus string', function () {
    expect(plusString('nhat', 'khanh')).toBe('nhatkhanh');
  });
});
