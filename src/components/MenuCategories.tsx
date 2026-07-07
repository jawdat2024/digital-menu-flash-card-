import { useEffect, useState } from 'react';
import { fetchActiveCategories, Category } from '../../firebaseUtils';

const MenuCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchActiveCategories();
      setCategories(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return <div>جاري تحميل المنيو...</div>;

  return (
    <div className="categories-container grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <div key={category.id} className="category-card border rounded-lg overflow-hidden shadow hover:shadow-md transition">
          <img src={category.image_url} alt={category.name} className="w-full h-32 object-cover" />
          <h3 className="p-3 text-center font-bold text-gray-800">{category.name}</h3>
          {/* يمكنك ربط foodics_id هنا لعمليات الطلب لاحقاً */}
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;
