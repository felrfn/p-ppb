import React from "react";

export default function RecipeDetailModal({ open, onClose, item }) {
  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
              aria-label="Tutup"
              title="Tutup"
            >
              ✕
            </button>
          </div>

          {item.image_url && (
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
          )}

          <div className="px-6 py-5 grid gap-6 md:grid-cols-2">
            <section>
              <h3 className="font-semibold text-lg mb-2">Bahan</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {item.ingredients?.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Langkah</h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                {item.steps?.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </section>
          </div>

          <div className="px-6 py-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
