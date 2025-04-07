"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import * as XLSX from "xlsx"; // Import xlsx for exporting Excel files
import supabase from "@/utils/supabaseClient";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // For hamburger and close icons

const Dashboard = () => {
  const [contacts, setContacts] = useState<{
    id: number;
    full_name: string;
    email: string;
    subject: string;
    phone_number: string;
    message: string;
    created_at: string;
  }[]>([]);
  const [reviews, setReviews] = useState<{ id: number; name: string; rating: number; review: string; approved: boolean }[]>([]);
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [showReviewDetailsModal, setShowReviewDetailsModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState<{ id: number; name: string; rating: number; review: string; approved: boolean } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false); // State to detect if the user is on mobile
  const [expanded, setExpanded] = useState<number | null>(null); // Track which accordion is expanded
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [embedCode, setEmbedCode] = useState("");
  const [instagramData, setInstagramData] = useState<{ id: number; embed_code: string }[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger menu
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        // Redirect to sign-in page if no session exists
        router.push("/auth/signin");
        return;
      }

      // Fetch contacts if authenticated
      fetchContacts();
      fetchReviews();
      fetchInstagramData();
    };

    const fetchContacts = async () => {
      try {
        const { data, error } = await supabase
          .from("contacts")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          setError("Failed to fetch contacts.");
          console.error("Error fetching contacts:", error);
          return;
        }

        setContacts(data || []);
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching reviews:", error.message);
          return;
        }

        setReviews(data || []);
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    const fetchInstagramData = async () => {
      const { data, error } = await supabase
        .from("instagram_data")
        .select("*")
        .order("id", { ascending: true })
        .limit(3);

      if (error) {
        console.error("Error fetching Instagram data:", error);
      } else {
        console.log("Fetched Instagram Data:", data); // Debugging log
        setInstagramData(data || []);
      }
    };

    checkAuth();

    // Detect if the user is on a mobile device
    const isMobileDevice = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, [router]);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(contacts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    XLSX.writeFile(workbook, "contacts.xlsx");
  };

  const toggleAccordion = (id: number) => {
    setExpanded(expanded === id ? null : id); // Toggle the accordion
  };

  const updateInstagramCard = async () => {
    if (selectedCard === null || embedCode.trim() === "") {
      alert("Please select a card and provide an embed code.");
      return;
    }

    const { error } = await supabase
      .from("instagram_data")
      .update({ embed_code: embedCode })
      .eq("id", selectedCard);

    if (error) {
      console.error("Error updating Instagram card:", error);
      alert("Failed to update the Instagram card.");
    } else {
      alert("Instagram card updated successfully!");
      setShowInstagramModal(false);
      setEmbedCode("");
      setSelectedCard(null);

      // Refresh Instagram data
      const { data } = await supabase
        .from("instagram_data")
        .select("*")
        .order("id", { ascending: true })
        .limit(3);
      setInstagramData(data || []);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative">
        {/* Hamburger Menu Button */}
        <div className="absolute top-4 left-4 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-purple-600 text-white rounded-md shadow-md focus:outline-none"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Hamburger Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-3/4 max-w-sm">
              <div className="space-y-4">
                <button
                  onClick={exportToExcel}
                  className="w-full bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none"
                >
                  Export to Excel
                </button>
                <button
                  onClick={() => setShowReviewsModal(true)}
                  className="w-full bg-white text-purple-600 border border-purple-600 px-4 py-2 rounded-md shadow-md hover:bg-purple-100 focus:outline-none"
                >
                  New Reviews
                </button>
                <button
                  onClick={() => setShowInstagramModal(true)}
                  className="w-full bg-purple-600 text-white border border-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none"
                >
                  IG Cards
                </button>
              </div>
            </div>
          </div>
        )}

        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Dashboard
        </h2>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Contact Submissions
        </h3>

        {/* Conditional Layout */}
        {isMobile ? (
          <div className="w-full space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700"
              >
                {/* Accordion Header for Mobile */}
                <div
                  className="flex justify-between items-center p-4 cursor-pointer"
                  onClick={() => toggleAccordion(contact.id)}
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {contact.full_name}
                  </span>
                  <button className="text-blue-500 hover:underline">
                    {expanded === contact.id ? "Hide Details" : "View Details"}
                  </button>
                </div>

                {/* Accordion Content */}
                {expanded === contact.id && (
                  <div className="p-4 space-y-2">
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Email:
                      </span>{" "}
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-500 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Subject:
                      </span>{" "}
                      {contact.subject}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Phone Number:
                      </span>{" "}
                      <a
                        href={`tel:${contact.phone_number}`}
                        className="text-blue-500 hover:underline"
                      >
                        {contact.phone_number}
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Message:
                      </span>{" "}
                      {contact.message}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Date:
                      </span>{" "}
                      {new Date(contact.created_at).toISOString().split("T")[0]}
                    </div>
                    <div className="mt-4">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-500 hover:underline"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Table Layout for Desktop */
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Full Name
                  </th>
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Email
                  </th>
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Subject
                  </th>
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Phone Number
                  </th>
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Message
                  </th>
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Date
                  </th>
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-300">
                      {contact.full_name}
                    </td>
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-300">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-500 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </td>
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-300">
                      {contact.subject}
                    </td>
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-300">
                      {contact.phone_number}
                    </td>
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-300">
                      {contact.message}
                    </td>
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-300">
                      {new Date(contact.created_at).toISOString().split("T")[0]}
                    </td>
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-300">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-500 hover:underline"
                      >
                        Send Email
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Reviews Modal */}
        {showReviewsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Reviews
              </h2>
              <ul className="space-y-4">
                {reviews.map((review) => (
                  <li
                    key={review.id}
                    className={`p-4 border rounded-lg ${!review.approved
                      ? "border-red-500 bg-red-50 dark:bg-red-900"
                      : "border-gray-200 bg-gray-50 dark:bg-gray-700"
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 dark:text-gray-100">
                        {review.name}
                      </span>
                      {!review.approved && (
                        <span className="text-red-500 font-semibold">
                          Needs Review
                        </span>
                      )}
                      <button
                        onClick={() => {
                          setSelectedReview(review);
                          setShowReviewDetailsModal(true);
                        }}
                        className="text-blue-500 hover:underline"
                      >
                        View Details
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowReviewsModal(false)}
                className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Review Details Modal */}
        {showReviewDetailsModal && selectedReview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Review Details
              </h2>
              <p className="mb-2">
                <strong>Name:</strong> {selectedReview.name}
              </p>
              <p className="mb-2">
                <strong>Rating:</strong> {selectedReview.rating} Stars
              </p>
              <p className="mb-2">
                <strong>Review:</strong> {selectedReview.review}
              </p>
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  onClick={async () => {
                    await supabase
                      .from("reviews")
                      .update({ approved: true }) // Set approved to true
                      .eq("id", selectedReview.id);
                    setShowReviewDetailsModal(false); // Close the modal
                    setReviews((prev) =>
                      prev.map((r) =>
                        r.id === selectedReview.id ? { ...r, approved: true } : r
                      )
                    ); // Update the reviews state
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none"
                >
                  Approve
                </button>
                <button
                  onClick={async () => {
                    await supabase
                      .from("reviews")
                      .update({ approved: false }) // Set approved to false
                      .eq("id", selectedReview.id);
                    setShowReviewDetailsModal(false); // Close the modal
                    setReviews((prev) =>
                      prev.map((r) =>
                        r.id === selectedReview.id ? { ...r, approved: false } : r
                      )
                    ); // Update the reviews state
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Instagram Update Modal */}
        {showInstagramModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Update Instagram Card
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Select Card to Update:
                </label>
                <select
                  value={selectedCard || ""}
                  onChange={(e) => setSelectedCard(Number(e.target.value))}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-300"
                >
                  <option value="" disabled>
                    Select a card
                  </option>
                  {instagramData.map((card) => (
                    <option key={card.id} value={card.id}>
                      Card {card.id}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Embed Code:
                </label>
                <textarea
                  value={embedCode}
                  onChange={(e) => setEmbedCode(e.target.value)}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-300"
                  placeholder="Enter the new embed code"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={updateInstagramCard}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setShowInstagramModal(false);
                    setSelectedCard(null);
                    setEmbedCode("");
                  }}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;