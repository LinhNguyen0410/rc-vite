import * as renderer from 'react-test-renderer';
import ReviewBar from '../ReviewBar';
import { render, fireEvent, screen } from '@testing-library/react';

// it('testing component review bar ', () => {
//     const component = renderer.create(
//         <ReviewBar review={
//          {
//           book_title : "Something short",
//           byline : "Messi",
//           publication_dt : "20-11-2002",
//           summary : "Something short and leading about the collection below—its contents, the creator, etc"
//          }
//         }></ReviewBar>,
//       );
// });
test('testing component review bar ', () => {
  render(
    <ReviewBar
      review={{
        book_title: 'Something short',
        byline: 'Messi',
        publication_dt: '20-11-2002',
        summary:
          'Something short and leading about the collection below—its contents, the creator, etc',
      }}
    ></ReviewBar>
  );
});
