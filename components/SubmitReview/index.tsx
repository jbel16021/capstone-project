"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface Review {
  user_id: string;
  name: string;
  review: string;
  rating: number;
}

interface SubmitReviewProps {
  existingReview: Review | null;
  onReviewSubmitted: (review: Review) => void;
}

const SubmitReview: React.FC<SubmitReviewProps> = ({ existingReview, onReviewSubmitted }) => {
  const [review, setReview] = useState(existingReview?.review || "");
  const [rating, setRating] = useState(existingReview?.rating || 5);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError || !user) {
        setError("You must be logged in to submit a review.");
        return;
      }

      // Ensure the redirectTo parameter is set for Google OAuth
      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/submit-review`, // Redirect to the submit review page
        },
      });

      if (authError) {
        setError("Failed to authenticate. Please try again.");
        return;
      }

      const { error: reviewError, data: review } = await supabase
        .from("reviews")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (reviewError) {
        console.log("No existing review found.");
      } else {
        console.log("Fetched review:", review);
      }

      const { error } = await supabase.from("reviews").insert([
        {
          user_id: user.id,
          name: user.user_metadata.full_name || "Anonymous",
          review,
          rating,
        },
      ]);

      if (error) {
        setError("Failed to submit review. Please try again.");
      } else {
        setSuccess(true);
        onReviewSubmitted({
          user_id: user.id,
          name: user.user_metadata.full_name || "Anonymous",
          review,
          rating,
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">Review submitted successfully!</p>}
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here..."
        className="w-full p-2 border rounded mb-4"
        required
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Star{num > 1 && "s"}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-700"
      >
        Submit Review
      </button>
    </form>
  );
};

export default SubmitReview;