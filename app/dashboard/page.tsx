"use client";
import React from "react";

const Dashboard = () => {
  // Placeholder data for now
  const contacts = [
    { id: 1, name: "John Doe", email: "john@example.com", message: "Hello!", date: "2025-03-14" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", message: "I need help!", date: "2025-03-13" },
  ];

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-4xl px-4 md:px-8 xl:px-0">
        <h2 className="text-3xl font-bold text-center mb-6">Dashboard</h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Contact Submissions</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 text-left">Name</th>
                <th className="border-b py-2 text-left">Email</th>
                <th className="border-b py-2 text-left">Message</th>
                <th className="border-b py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="border-b py-2">{contact.name}</td>
                  <td className="border-b py-2">{contact.email}</td>
                  <td className="border-b py-2">{contact.message}</td>
                  <td className="border-b py-2">{contact.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;