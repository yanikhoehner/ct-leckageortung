import React, { useEffect, useState } from 'react';
import './ReviewSection.css';

function ReviewSection() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/get-reviews')  // Stelle sicher, dass der Pfad zu deinem Server-Endpunkt korrekt ist
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching Google reviews:', error));
    }, []);

    return (
        <section id="reviews" className="review-section">
          <div className="rate-us">
                <h2 className="section-title-review">Bewerten Sie mich!</h2>
                <p className="section-description-review">Ihre Rückmeldung ist mir wichtig. Bitte nehmen Sie sich einen Moment Zeit, um mich auf Google zu bewerten.</p>
                <a href="https://g.page/r/CeQzJ_OeS2udEBM/review" target="_blank" rel="noopener noreferrer" className="button">
                    Bewertung abgeben
                </a>
            </div>
            {/* <div className="reviews-display">
                <h2 className="section-title-review">Kundenbewertungen</h2>
                <p className="section-description-review">Lesen Sie, was unsere Kunden über mich sagen:</p>
                <div className="reviews-container">
                {reviews.map((review, index) => (
                    <div key={index} className="review">
                        <p><strong>{review.author_name}</strong> sagt:</p>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
          </div>             */}
        </section>
    );
}

export default ReviewSection;
