

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 rounded-2xl mt-12 bg-gradient-to-br from-gray-900 via-red-700 to-gray-600 text-white shadow-2xl">
      <h1 className="text-5xl font-extrabold mb-8 border-b-4 border-blue-300 pb-4">
        About Movie Box
      </h1>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Movie Box is a modern web application built using React, designed 
          for movie enthusiasts to search, explore, and filter movies effortlessly. 
          It leverages the{" "}
          <a
            href="https://www.omdbapi.com/"
            rel="noopener noreferrer"
            className="text-yellow-300 underline"
          >
            OMDB API
          </a>{" "}
          to fetch real-time movie data, including titles, posters, ratings, and more.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">What You Can Do</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Search for movies by title or keyword.</li>
          <li>View search results in a clean grid layout with posters and details.</li>
          <li>Click on a movie to see detailed information including cast, plot, and ratings.</li>
          <li>Filter movies based on type using the dropdown filter.</li>
          <li>Navigate pages using pagination for large sets of results.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Tech Stack Used</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <span>🔹 React JS</span>
          <span>🔹 React Router</span>
          <span>🔹 Tailwind CSS</span>
          <span>🔹 OMDB API</span>
          <span>🔹 useState / useEffect Hooks</span>
          <span>🔹 Pagination & Filters</span>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Why This App?</h2>
        <p className="text-lg leading-relaxed">
          This project was developed to provide a hands-on experience with React 
          and API integration. It demonstrates building scalable, maintainable, 
          and user-friendly applications using reusable components, React Router, 
          and clean architecture principles.
        </p>
      </section>
    </div>
  );
};

export default About;
