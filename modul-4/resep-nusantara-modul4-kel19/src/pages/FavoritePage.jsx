import { useMemo, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import RecipeGrid from "../components/makanan/RecipeGrid";
import RecipeDetailModal from "../components/RecipeDetailModal";

export default function FavoritePage() {
  const { favorites } = useFavorites();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const favoriteList = useMemo(() => Object.values(favorites), [favorites]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8">
          Resep Favorit Anda
        </h1>

        {favoriteList.length > 0 ? (
          <RecipeGrid recipes={favoriteList} onItemClick={handleItemClick} />
        ) : (
          <p className="text-center text-slate-600">
            Anda belum memiliki resep favorit.
          </p>
        )}
      </main>

      <RecipeDetailModal
        open={open}
        item={selectedItem}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
