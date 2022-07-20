import { FilmReview } from '../../types/reviews';
import { humanizeDayDate } from '../../utils/utils';

type FilmReviewProps = {
  filmReview: FilmReview;
}

export default function Review({ filmReview }: FilmReviewProps): JSX.Element {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{filmReview.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{filmReview.user.name}</cite>
          <time className="review__date" dateTime="2016-12-20">{humanizeDayDate(filmReview.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{filmReview.rating}</div>
    </div>
  );
}
