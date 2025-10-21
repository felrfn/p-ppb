import { useState, useMemo } from "react";
import { ResepMakanan } from "../data/makanan";
import { ResepMinuman } from "../data/minuman";
import HeroSection from "../components/home/HeroSection";
import FeaturedMakananSection from "../components/home/FeaturedMakananSection";
import FeaturedMinumanSection from "../components/home/FeaturedMinumanSection";
import RecipeDetailModal from "../components/RecipeDetailModal";

export default function HomePage() {
  const featuredMakanan = useMemo(
    () =>
      Object.entries(ResepMakanan.resep || {})
        .slice(0, 3)
        .map(([key, value]) => ({
          ...value,
          uniqueId: `makanan-${key}`,
        })),
    [],
  );

  const featuredMinuman = useMemo(
    () =>
      Object.entries(ResepMinuman.resep || {})
        .slice(0, 2)
        .map(([key, value]) => ({
          ...value,
          uniqueId: `minuman-${key}`,
        })),
    [],
  );

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
        <FeaturedMakananSection
          featuredMakanan={featuredMakanan}
          onItemClick={handleItemClick}
        />
        <FeaturedMinumanSection
          featuredMinuman={featuredMinuman}
          onItemClick={handleItemClick}
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
