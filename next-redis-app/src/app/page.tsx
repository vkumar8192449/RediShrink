"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertCircle, Link as LinkIcon, Copy, Check } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ThemeToggle from "../components/ui/ThemeToggle";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = async () => {
    if (!url) {
      setError("Please enter a URL");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/shrink`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ originalUrl: url }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      setShortenedUrl(data.shrinkUrl);
    } catch (err) {
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError("Failed to copy to clipboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 transition-colors duration-200">
      <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 relative">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <CardHeader className="text-center space-y-4 pb-2">
          <div className="w-20 h-20 mx-auto bg-red-600 dark:bg-red-500 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg">
            <div className="transform -rotate-12">
              <svg
                width="91px"
                height="91px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="#444444"
                    d="M14.824 7.518c0 0.007 0.103 0.202 0.232 0.441 0.126 0.235 0.219 0.437 0.205 0.447s-0.371 0.146-0.792 0.295c-0.424 0.152-0.765 0.282-0.759 0.288s0.487 0.056 1.067 0.109c0.699 0.066 1.067 0.113 1.093 0.139 0.023 0.023 0.182 0.282 0.358 0.57l0.315 0.53 0.056-0.133c0.030-0.070 0.126-0.302 0.215-0.51l0.156-0.381 0.841-0.089c0.46-0.050 0.871-0.089 0.914-0.089 0.040-0.003 0.073-0.013 0.073-0.030 0-0.013-0.311-0.142-0.696-0.285-0.381-0.142-0.696-0.265-0.696-0.268s0.083-0.205 0.182-0.447 0.175-0.447 0.169-0.454c-0.007-0.010-0.331 0.089-0.715 0.215l-0.702 0.229-0.745-0.295c-0.732-0.288-0.772-0.301-0.772-0.282zM19.452 10.038c-0.891 0.354-1.623 0.649-1.63 0.656s0.656 0.275 1.474 0.6l1.484 0.586 0.159-0.063c1.653-0.643 3.157-1.242 3.15-1.249-0.023-0.027-2.948-1.172-2.981-1.172-0.023 0.003-0.768 0.291-1.656 0.643zM10.899 9.694c-0.855 0.089-1.573 0.338-1.878 0.653-0.209 0.215-0.242 0.398-0.113 0.619 0.192 0.331 0.822 0.61 1.693 0.752 0.391 0.066 1.54 0.056 1.938-0.013 0.931-0.162 1.534-0.46 1.676-0.835 0.053-0.139 0.053-0.159 0-0.295-0.139-0.364-0.732-0.666-1.61-0.818-0.444-0.076-1.272-0.106-1.706-0.063zM26.819 10.724c-0.043 0.056-0.202 0.182-0.354 0.285-0.451 0.291-1.034 0.556-4.651 2.113-2.544 1.093-3.193 1.381-4.074 1.805-0.977 0.467-1.381 0.596-1.872 0.596-0.441 0-0.702-0.076-1.524-0.441-0.328-0.146-1.67-0.709-2.981-1.255-5.734-2.385-5.84-2.435-6.148-2.766l-0.129-0.142v2.256l0.146 0.139c0.139 0.136 0.613 0.421 0.782 0.47 0.046 0.013 0.358 0.142 0.696 0.288s1.984 0.835 3.66 1.534c2.773 1.156 3.405 1.421 4.349 1.835 0.5 0.222 0.778 0.278 1.249 0.262 0.345-0.013 0.447-0.033 0.749-0.136 0.195-0.066 0.533-0.209 0.752-0.318 0.719-0.361 1.59-0.745 5.058-2.239 3.263-1.408 3.687-1.603 4.041-1.848 0.364-0.258 0.348-0.195 0.348-1.451 0-0.6-0.003-1.090-0.010-1.090s-0.043 0.046-0.086 0.103zM15.397 12.195c-1.335 0.205-2.441 0.381-2.461 0.388-0.030 0.010 3.326 1.421 3.468 1.457 0.033 0.010 1.534-2.15 1.534-2.206 0-0.030 0.003-0.033-2.541 0.361zM26.838 14.428c-0.030 0.050-0.169 0.172-0.305 0.268-0.434 0.298-1.086 0.596-5.052 2.302-2.282 0.984-2.998 1.299-3.677 1.63-1.1 0.533-1.365 0.619-1.954 0.616-0.457-0.003-0.739-0.076-1.345-0.351-0.583-0.268-1.236-0.543-3.856-1.63-4.558-1.891-5.085-2.127-5.406-2.438l-0.159-0.149v2.219l0.179 0.169c0.292 0.272 0.262 0.258 5.154 2.296 1.795 0.745 3.488 1.457 3.76 1.58 0.722 0.325 0.931 0.401 1.216 0.46 0.666 0.136 1.159 0.026 2.239-0.5 0.702-0.341 1.56-0.722 3.637-1.616 3.948-1.703 4.922-2.14 5.21-2.332 0.103-0.073 0.242-0.189 0.311-0.265l0.123-0.136v-1.11c0-0.61-0.003-1.11-0.010-1.11-0.003 0-0.033 0.043-0.066 0.096zM26.802 18.061c-0.262 0.328-0.785 0.58-4.856 2.332-2.657 1.146-3.465 1.504-4.339 1.921-0.918 0.437-1.219 0.53-1.749 0.53-0.361 0-0.729-0.086-1.136-0.265-0.951-0.417-1.577-0.682-4.353-1.838-3.157-1.315-4.167-1.742-4.505-1.911-0.315-0.159-0.636-0.384-0.709-0.5l-0.070-0.106v1.13c0 1.295-0.023 1.199 0.325 1.434 0.384 0.258 0.954 0.51 4.744 2.083 2.65 1.1 3.604 1.501 4.074 1.713 0.961 0.431 1.216 0.5 1.752 0.47 0.49-0.023 0.812-0.129 1.66-0.533 0.884-0.424 1.537-0.715 4.422-1.958 4.008-1.726 4.442-1.934 4.747-2.286l0.106-0.119v-1.106c0-0.61-0.003-1.11-0.007-1.11-0.007 0-0.053 0.053-0.106 0.119z"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
            URL Shortener
            <span className="text-sm font-normal text-red-600 dark:text-red-400 block mt-1">
              Powered by Redis
            </span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 pt-4">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Input
                type="url"
                placeholder="Enter your long URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full pl-4 pr-4 py-6 text-lg border-2 focus:border-red-400 focus:ring-red-100 
                dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 
                dark:focus:border-red-400 dark:focus:ring-red-900 transition-all duration-200"
              />
            </div>

            <Button
              onClick={handleShorten}
              disabled={loading}
              className="w-full py-6 text-lg bg-red-600 hover:bg-red-700 dark:bg-red-500 
              dark:hover:bg-red-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 
              transition-colors duration-200"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                  Shortening...
                </div>
              ) : (
                "Shorten URL"
              )}
            </Button>
          </div>

          {error && (
            <Alert
              variant="destructive"
              className="animate-slideIn bg-red-50 border-red-200 
              dark:bg-red-900/20 dark:border-red-800/50 dark:text-red-300"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {shortenedUrl && (
            <div
              className="mt-6 p-6 bg-gradient-to-r from-red-50 to-white dark:from-gray-700 
            dark:to-gray-800 rounded-lg border border-red-100 dark:border-gray-600 animate-fadeIn"
            >
              <p className="font-medium mb-3 text-gray-700 dark:text-gray-300">
                Shortened URL:
              </p>
              <div className="flex gap-2">
                <Input
                  value={shortenedUrl}
                  readOnly
                  className="flex-1 bg-white dark:bg-gray-900 font-mono text-red-600 
                  dark:text-red-400 cursor-default"
                />
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="min-w-[100px] hover:bg-red-50 dark:hover:bg-gray-700 
                  transition-colors duration-200 dark:border-gray-600"
                >
                  {copied ? (
                    <span className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="dark:text-gray-300">Copied!</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Copy className="h-4 w-4" />
                      <span className="dark:text-gray-300">Copy</span>
                    </span>
                  )}
                </Button>
              </div>
            </div>
          )}

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            Enter a URL above to generate a shortened version
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default URLShortener;
