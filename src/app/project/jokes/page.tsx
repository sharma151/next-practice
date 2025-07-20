"use client";

import { useEffect, useState } from "react";

type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

const RandomJokes = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomJoke = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setJoke(data);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md w-full text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Random Joke
        </h2>
        {joke ? (
          <>
            <p className="text-gray-700 text-lg mb-2">{joke.setup}</p>
            <p className="text-gray-900 font-semibold text-lg mb-4">
              {joke.punchline}
            </p>
            <p className="text-sm text-gray-400">Joke ID: {joke.id}</p>
          </>
        ) : (
          <p className="text-gray-500">Loading joke...</p>
        )}
        <button
          onClick={fetchRandomJoke}
          disabled={loading}
          className="mt-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Get New Joke"}
        </button>
      </div>
    </div>
  );
};

export default RandomJokes;
