import React from "react";
import { FaBook, FaPython, FaChartBar, FaUsers } from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Mathematics & Foundations",
    color: "indigo-600",
    icon: <FaBook className="text-indigo-600" size={28} />,
    description: "Master linear algebra, probability & statistics - the backbone of AI/ML.",
    resources: [
      { name: "Khan Academy - Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra" },
      { name: "StatQuest YouTube", url: "https://www.youtube.com/user/joshstarmer" },
      { name: "Math for ML Book", url: "https://mml-book.github.io/" },
    ],
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    color: "green-600",
    icon: <FaPython className="text-green-600" size={28} />,
    description: "Hands-on courses & projects to build real AI skills.",
    resources: [
      { name: "Andrew Ng’s Machine Learning", url: "https://www.coursera.org/learn/machine-learning" },
      { name: "DeepLearning.AI", url: "https://www.deeplearning.ai" },
      { name: "Fast.ai Courses", url: "https://www.fast.ai" },
    ],
  },
  {
    id: 3,
    title: "Python & Development",
    color: "amber-600",
    icon: <FaPython className="text-amber-600" size={28} />,
    description: "Write clean code & automate tasks with Python.",
    resources: [
      { name: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" },
      { name: "Real Python Tutorials", url: "https://realpython.com/" },
      { name: "Clean Code Book", url: "https://www.goodreads.com/book/show/3735293-clean-code" },
    ],
  },
  {
    id: 4,
    title: "Data Science & Visualization",
    color: "pink-600",
    icon: <FaChartBar className="text-pink-600" size={28} />,
    description: "Turn data into insights with tools & techniques.",
    resources: [
      { name: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
      { name: "Tableau Training", url: "https://www.tableau.com/learn/training/20212" },
      { name: "DataCamp Courses", url: "https://www.datacamp.com/" },
    ],
  },
  {
    id: 5,
    title: "Practice & Community",
    color: "purple-600",
    icon: <FaUsers className="text-purple-600" size={28} />,
    description: "Engage, practice & grow with others.",
    resources: [
      { name: "Kaggle", url: "https://www.kaggle.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "Stack Overflow", url: "https://stackoverflow.com" },
    ],
  },
];

export default function Resources() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-6 tracking-wide">Learning Resources</h2>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
        Curated beginner-friendly resources covering AI, machine learning, Python programming, math, and data science.
      </p>

      <div className="space-y-10">
        {categories.map(({ id, title, icon, color, description, resources }) => (
          <div
            key={id}
            className={`border-l-8 border-${color} pl-6 bg-white rounded-md shadow-md`}
          >
            <div className="flex items-center space-x-3 mb-4">
              {icon}
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <ul className="space-y-2">
              {resources.map(({ name, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${color} font-medium hover:underline transition`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
