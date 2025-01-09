"use client";
import { useState } from "react";
import axios from "axios";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const [inputValue, setInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const placeholders = [
    "How is my reel performing?",
    "Give me insights about static post",
    "Reels vs Static post?",
  ];

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setResponseMessage(""); 
    setError(""); 
  };

  // Handle form submission
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) {
      setError("Please enter a message.");
      return;
    }

    setLoading(true);
    setError("");
    setResponseMessage("");

    try {
      const response = await axios.get("http://127.0.0.1:5000/langflow", {
        params: { inputValue },
      });
      setResponseMessage(response.data.data); 
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-auto flex flex-col justify-center items-center px-4 space-y-8">
      <h2 className="mb-10 mt-20 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Get Insight On Social Media Data
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {responseMessage && (
        <div className="mt-6 max-w-3xl w-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-xl shadow-2xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Response:</h3>
          <p className="text-lg text-gray-700">{responseMessage}</p>
        </div>
      )}
      <footer className="mt-8 text-center text-sm text-gray-500">
        Made by Team Boche
      </footer>
    </div>
  );
}
