import { render } from '@testing-library/react';
import Subheader from './pages/includes/home/subheader/Subheader';

test('sum', () => {
   const { getByText } = render(<Subheader />);
   expect(getByText('Next generation digital banking')).toBeInTheDocument();
});
