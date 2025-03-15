"use client";
import React from "react";

const Dashboard = () => {
  // Placeholder data for now
  const contacts = [
    { id: 1, name: "John Doe", email: "john@example.com", message: "Hello!", date: "2025-03-14" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", message: "I need help!", date: "2025-03-13" },
  ];

  return (
    <section className="py-20 lg:py-25 xl:py-30 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 md:px-8 xl:px-0">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Dashboard
        </h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Contact Submissions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Name
                  </th>
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Email
                  </th>
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Message
                  </th>
                  <th className="border-b py-3 px-4 text-left text-gray-700 dark:text-gray-300">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr
                    key={contact.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"
                    }`}
                  >
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-200">
                      {contact.name}
                    </td>
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-200">
                      {contact.email}
                    </td>
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-200">
                      {contact.message}
                    </td>
                    <td className="border-b py-3 px-4 text-gray-800 dark:text-gray-200">
                      {contact.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;