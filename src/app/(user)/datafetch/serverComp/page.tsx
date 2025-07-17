const dataFetchServer = async (props: any) => {
  const searchparams = await props.searchParams;
  const UserName = searchparams.name;

  if (!UserName) {
    return (
      <div className="border h-10 w-full flex justify-center items-center border-gray-500 bg-amber-100">
        No username found
      </div>
    );
  }

  const data = await fetch(`https://api.genderize.io/?name=${UserName}`);
  const res = await data.json();

  const isMale = res.gender === "male";
  const probability = res.probability * 100;
  const count = res.count;

  let accuracy = "Low";
  if (probability >= 60) {
    accuracy = "High";
  } else if (probability >= 30) {
    accuracy = "Moderate";
  }

  const themeColor = isMale ? "blue" : "pink";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div
        className={`w-full max-w-sm rounded-xl shadow-lg bg-${themeColor}-100 border border-${themeColor}-300`}
      >
        <div className="flex flex-col items-center px-6 py-8">
          {/* Profile */}
          <div className="w-20 h-20 rounded-full bg-white shadow-md border border-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
            {res.name?.[0]?.toUpperCase()}
          </div>
          <h2 className="text-2xl font-semibold mt-4 capitalize">{res.name}</h2>
          <p className={`text-${themeColor}-800 font-medium`}>
            {res.gender?.toUpperCase()}
          </p>

          {/* Probability bar */}
          <div className="w-full mt-6">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Prediction Confidence
            </label>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`bg-${themeColor}-500 h-4 rounded-full`}
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
            className={`mt-2 px-3 py-1 rounded-full text-sm font-semibold text-white bg-${themeColor}-600`}
          >
            Accuracy: {accuracy}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dataFetchServer;
