import { useEffect, useMemo, useState } from "react";
import { ResepMinuman } from "../data/minuman";
import RecipeGrid from "../components/makanan/RecipeGrid";
import RecipeDetailModal from "../components/RecipeDetailModal";
import SearchBar from "../components/common/SearchBar";
import Pagination from "../components/common/Pagination";

export default function MinumanPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 3;

  const allMinuman = useMemo(
    () =>
      Object.entries(ResepMinuman.resep || {}).map(([key, value]) => ({
        ...value,
        uniqueId: `minuman-${key}`,
      })),
    [],
  );

  useEffect(() => {
    const lower = searchQuery.trim().toLowerCase();
    const filtered = lower
      ? allMinuman.filter((recipe) => {
          const nameMatch = recipe.name.toLowerCase().includes(lower);
          const ingredientsMatch = recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(lower),
          );
          return nameMatch || ingredientsMatch;
        })
      : allMinuman;

    setFilteredRecipes(filtered);
    setCurrentPage(1);
  }, [searchQuery, allMinuman]);

  useEffect(() => {
    const totalPages = Math.max(
      1,
      Math.ceil(filteredRecipes.length / pageSize),
    );
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredRecipes, currentPage]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const start = (currentPage - 1) * pageSize;
  const pageData = filteredRecipes.slice(start, start + pageSize);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Cari minuman..."
        />

        <RecipeGrid recipes={pageData} onItemClick={handleItemClick} />

        <Pagination
          currentPage={currentPage}
          totalCount={filteredRecipes.length}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
        />
      </main>

      <RecipeDetailModal
        open={open}
        item={selectedItem}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
