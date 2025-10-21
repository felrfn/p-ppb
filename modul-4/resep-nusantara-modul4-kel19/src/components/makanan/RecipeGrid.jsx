import { Clock, Star, Heart } from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";

export default function RecipeGrid({ recipes, onItemClick }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!recipes || recipes.length === 0) {
    return (
      <p className="text-center text-slate-600 py-12">
        Tidak ada resep yang ditemukan.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 my-8 md:my-12">
      {recipes.map((recipe) => {
        const isFav = isFavorite(recipe.uniqueId);

        return (
          <div key={recipe.uniqueId} className="group">
            <div
              onClick={() => onItemClick(recipe)}
              className="relative bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/15 transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:bg-white/20"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(recipe);
                }}
                className="absolute top-4 right-4 z-20 p-2 bg-white/50 rounded-full backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                aria-label="Toggle Favorit"
              >
                <Heart
                  className={`w-5 h-5 md:w-6 md:h-6 text-red-600 transition-all duration-200`}
                  fill={isFav ? "currentColor" : "none"}
                />
              </button>

              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-32 md:h-56 overflow-hidden">
                <img
                  src={recipe.image_url}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 p-4 md:p-8">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100/90 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                    {/* Logika untuk membedakan makanan/minuman bisa ditambahkan di sini jika perlu */}
                    Resep
                  </span>
                  <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                    <span className="text-xs md:text-sm font-semibold text-slate-700">
                      4.8
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-slate-800 mb-3 md:mb-4 text-base md:text-xl group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {recipe.name}
                </h3>

                <div className="flex items-center justify-between text-xs md:text-sm text-slate-600">
                  <div className="flex items-center space-x-1 md:space-x-2 bg-white/70 px-2 md:px-3 py-1 md:py-2 rounded-full">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="font-medium">
                      {recipe.ingredients.length} bahan
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2 bg-white/70 px-2 md:px-3 py-1 md:py-2 rounded-full">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="font-medium">
                      {recipe.steps.length} langkah
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
