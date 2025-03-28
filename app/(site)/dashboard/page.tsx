"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import * as XLSX from "xlsx"; // Import xlsx for exporting Excel files

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false); // State to detect if the user is on mobile
  const [expanded, setExpanded] = useState<number | null>(null); // Track which accordion is expanded
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

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative">
        {/* Export Button */}
        <button
          onClick={exportToExcel}
          className={`${
            isMobile
              ? "fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none"
              : "absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
          }`}
        >
          Export to Excel
        </button>

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
      </div>
    </section>
  );
};

export default Dashboard;