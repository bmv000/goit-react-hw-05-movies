import { useFetchReviews } from '../../hooks/useFetchRewiews';

import { ReviewsList, ReviewsAutor, ReviewsContent } from './Reviews.styled';

export const Reviews = () => {
  const reviews = useFetchReviews();

  return (
    <>
      {reviews?.length === 0 && (
        <p>We don't have any reviews for this movie! </p>
      )}
      {reviews && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <ReviewsAutor>Author: {author}</ReviewsAutor>
              <ReviewsContent> {content}</ReviewsContent>
            </li>
          ))}
        </ReviewsList>
      )}
    </>
  );
};
