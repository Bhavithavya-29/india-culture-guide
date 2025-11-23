import Slideshow from "../components/Slideshow";

export default function HomePage() {
  return (
    <div>
      <Slideshow />
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to India Culture Guide</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Explore the rich heritage, traditions, food, history, languages, and festivals of India.
        </p>
      </div>
    </div>
  );
}
