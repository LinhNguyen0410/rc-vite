import { Router } from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import { act } from 'react-test-renderer';
import { createMemoryHistory } from 'history';

import Product from '../components/Product';

describe('Product Test', () => {
  const history = createMemoryHistory();
  describe('handleReview', () => {
    it('should navigate to bookreview page', () => {
      const ProductComponent = renderer.create(
        <Router navigator={history} location={history.location}>
          <Product
            author="John Grisham"
            bookImage="https://storage.googleapis.com/du-prd/books/images/9780385549325.jpg"
            price={10}
            title="SPARRING PARTNERS"
          />
        </Router>,
      );
      const productInstance = ProductComponent.root;
      const reviewButton = productInstance.findByType('button');
      reviewButton.props.onClick('SPARRING PARTNERS');
    });
  });
});
