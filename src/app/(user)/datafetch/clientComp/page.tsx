"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type GenderizeResponse = {
  name: string;
  gender: "male" | "female" | null;
  probability: number;
  count: number;
};

const DataFetchServer = () => {
  const [res, setRes] = useState<GenderizeResponse | null>(null);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const fetchData = async () => {
      if (!userName) return;
      try {
        const response = await fetch(
          `https://api.genderize.io/?name=${userName}`
        );
        const json: GenderizeResponse = await response.json();
        setRes(json);
      } catch (error) {
        console.error("Failed to fetch gender data:", error);
      }
    };

    fetchData();
  }, [userName]);

  if (!userName) {
    return (
      <div className="border h-10 w-full flex justify-center items-center border-gray-500 bg-amber-100">
        No username found
      </div>
    );
  }

  if (!res) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }

  const isMale = res.gender === "male";
  const probability = res.probability * 100;
  const count = res.count;

  let accuracy = "Low";
  if (probability >= 60) {
    accuracy = "High";
  } else if (probability >= 30) {
    accuracy = "Moderate";
  }

  const cardColor = isMale
    ? "bg-blue-100 border-blue-400"
    : "bg-pink-100 border-pink-400";
  const textColor = isMale ? "text-blue-500" : "text-pink-500";
  const barColor = isMale ? "bg-blue-500" : "bg-pink-500";
  const badgeColor = isMale ? "bg-blue-600" : "bg-pink-600";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className={`w-full max-w-sm rounded-xl shadow-lg ${cardColor}`}>
        <div className="flex flex-col items-center px-6 py-8">
          {/* Profile */}
          <div className="w-20 h-20 rounded-full bg-white shadow-md border border-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
            {res.name[0].toUpperCase()}
          </div>
          <h2 className="text-2xl font-semibold mt-4 capitalize">{res.name}</h2>
          <p className={`${textColor} font-medium`}>
            {res.gender?.toUpperCase() ?? "UNKNOWN"}
          </p>

          {/* Probability bar */}
          <div className="w-full mt-6">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Prediction Confidence
            </label>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`${barColor} h-4 rounded-full`}
                style={{ width: `${probability}%` }}
              ></div>
            </div>
            <div className="text-sm text-right mt-1 text-gray-600">
              {probability.toFixed(1)}%
            </div>
          </div>

          {/* Count */}
          <div className="mt-4 text-sm text-gray-700">
            Count of predictions: <span className="font-medium">{count}</span>
          </div>

          {/* Accuracy */}
          <div
            className={`mt-2 px-3 py-1 rounded-full text-sm font-semibold text-white ${badgeColor}`}
          >
            Accuracy: {accuracy}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFetchServer;
