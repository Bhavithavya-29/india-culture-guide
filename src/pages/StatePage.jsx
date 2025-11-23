import { useParams } from "react-router-dom";

export default function StatePage() {
  const { code } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">State: {code}</h2>
      <p className="text-gray-700">
        Here we’ll show culture, festivals, cuisine, and places for {code}.
      </p>
    </div>
  );
}
