// import * as React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from 'react-dom/client';
// import App from '../App';
// import { Provider } from 'react-redux';
// import { store } from '../redux/store';

const plus = (a: number, b: number) => {
  return a + b;
};
// describe('App', function () {
//   it('should display pass in number', function () {
//     let container = document.createElement('div');
//     document.body.appendChild(container);
//     act(() => {
//       ReactDOM.createRoot(container).render(
//         <Provider store={store}>
//           <App num={30} />
//         </Provider>
//       );
//     });
//     const header = container.querySelector('h1');
//     expect(header?.textContent).toBe('Hello world React! Num: 30');
//   });
// });

it('simple function', function () {
  expect(plus(1, 1)).toBe(2);
});
