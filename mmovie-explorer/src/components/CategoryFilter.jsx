export default function CategoryFilter({ genres, selected, onChange }) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg py-4 px-4 bg-slate-800 text-white"
    >
      <option value="">All Categories</option>
      {genres.map((g) => (
        <option key={g} value={g}>{g}</option>
      ))}
    </select>
  );
}
