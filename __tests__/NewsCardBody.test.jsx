import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsCardBodyComponent from '../src/components/NewsCardBodyComponent';

const renderedTitle = 'The Crusade to Replace Passwords'
const renderedDescription = 'This is a news description.'
const renderedDate = '17/10/2024'

describe('NewsCardBodyComponent', () => {
  
  const mockNews = {
    urlToImage: 'https://gizmodo.com/an-industry-group-wants-you-to-replace-your-passwords-with-passkeys-2000512254',
    title: 'The Crusade to Replace Passwords',
    description: 'This is a news description.',
    publishedAt: '2024-10-17T10:00:00Z',
  };


  it('renders title, description, and published date', () => {

    render(<NewsCardBodyComponent news={mockNews} isFullDetail={true} />);

    
    expect(screen.getByText(renderedTitle)).toBeInTheDocument();

    
    expect(screen.getByText(renderedDescription)).toBeInTheDocument();

    
    expect(screen.getByText(renderedDate)).toBeInTheDocument();

  });

  it('renders truncated text when isFullDetail is false', () => {

    render(<NewsCardBodyComponent news={mockNews} isFullDetail={false} />);

    
    expect(screen.getByText(renderedTitle)).toHaveClass('text-truncate');

    
    expect(screen.getByText(renderedDescription)).toHaveClass('text-truncate');

  });

  it('does not render image when urlToImage is not provided', () => {
    
    const newsWithoutImage = { ...mockNews, urlToImage: null };

    render(<NewsCardBodyComponent news={newsWithoutImage} isFullDetail={true} />);
    
    const image = screen.queryByRole('img');

    expect(image).toBeNull();

  });
});