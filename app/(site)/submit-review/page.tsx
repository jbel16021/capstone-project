"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import SubmitReview from "@/components/SubmitReview";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const SubmitReviewPage = () => {
  const [loading, setLoading] = useState(true);
  interface Review {
    rating: number;
    review: string;
  }
  
  const [existingReview, setExistingReview] = useState<Review | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndFetchReview = async () => {
      try {
        // Fetch the authenticated user
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError || !user) {
          console.error("Error fetching user:", userError?.message || "No user found");
          router.push("/auth/signin");
          return;
        }

        console.log("Authenticated user:", user);

        // Fetch the user's existing review
        const { data: review, error: reviewError } = await supabase
          .from("reviews")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (reviewError) {
          console.error("Error fetching review:", reviewError.message);
        } else {
          console.log("Fetched review:", review);
          setExistingReview(review || null);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchReview();
  }, [router]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-md px-4 md:px-8 xl:px-0">
        <h1 className="text-3xl font-bold mb-6 text-center">Submit Your Review</h1>

        {existingReview ? (
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Review Submitted</h2>
            <p className="mb-2">
              <strong>Rating:</strong> {existingReview.rating} Stars
            </p>
            <p className="mb-4">
              <strong>Review:</strong> {existingReview.review}
            </p>
          </div>
        ) : (
          <SubmitReview 
            existingReview={existingReview} 
            onReviewSubmitted={(review) => setExistingReview(review)} 
          />
        )}
      </div>
    </section>
  );
};

export default SubmitReviewPage;