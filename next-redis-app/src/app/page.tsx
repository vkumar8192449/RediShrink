"use client";
import React, { useState } from "react";

const Hero = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/shrink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl }),
      });

      const data = await response.json();
      if (data.shrinkUrl) {
        setShortUrl(data.shrinkUrl);
      } else {
        alert("Failed to shorten the URL");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-center px-4 py-8">
      <div className="max-w-3xl w-full">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl dark:text-white">
          Simplify Your Links with Redis
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Convert long URLs into short, easy-to-share links.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 w-full"
        >
          <input
            type="url"
            placeholder="Enter your original URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
            className="flex-1 px-4 py-3 text-base text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            {isLoading ? "Shortening..." : "Get Short URL"}
          </button>
        </form>
        {shortUrl && (
          <div className="mt-6 text-lg font-medium text-gray-700 dark:text-white">
            Shortened URL:{" "}
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 hover:underline dark:text-primary-400"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
