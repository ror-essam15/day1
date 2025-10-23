"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 text-center">
      <h1 className="text-3xl font-bold text-red-700 mb-4"> Error !</h1>
      <p className="text-gray-700 mb-6">{error.message}</p>

      <button
        onClick={() => reset()}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all"
      >
        حاول مرة أخرى
      </button>
    </div>
  );
}
