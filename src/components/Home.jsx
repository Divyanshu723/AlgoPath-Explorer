import React, { useState } from 'react';
import PathImage from '../assets/path_find_image.webp';
import SortImage from '../assets/SortingImage.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="w-full h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center">
            {/* Heading */}
            <h1 className="text-6xl p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12">
                AlgoPath Explorer
            </h1>

            {/* Description */}
            <div className="text-lg text-gray-400 mb-12 text-center max-w-2xl px-4">
                <p className={`line-clamp-2 ${isExpanded ? 'line-clamp-none' : ''}`}>
                    AlgoPath Explorer provides interactive visualizations for various pathfinding and sorting algorithms.
                    Explore and understand how algorithms like A*, Dijkstra, Merge Sort, and Quick Sort work through engaging animations and dynamic visual representations.
                </p>
                <button
                    onClick={toggleExpand}
                    className="text-blue-500 mt-2 focus:outline-none"
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 w-full md:w-4/5 lg:w-2/3">
                {/* Pathfinding Visualizer Card */}
                <NavLink to="/path-visualizer" className="relative group">
                    <div
                        className="w-[350px] h-[450px] bg-cover bg-center rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                        style={{
                            backgroundImage: `url(${PathImage})`,
                            opacity: 0.8, // Adjust opacity
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl p-8 flex flex-col items-center justify-center text-center transition-opacity duration-500">
                            <h2 className="text-2xl font-bold mb-4 text-white shadow-lg">Pathfinding Visualizer</h2>
                            <p className="text-white">Visualize algorithms like A*, Dijkstra, and BFS.</p>
                        </div>
                    </div>
                </NavLink>

                {/* Sorting Visualizer Card */}
                <NavLink to="/sorting-visualizer" className="relative group">
                    <div
                        className="w-[350px] h-[450px] bg-cover bg-center rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                        style={{
                            backgroundImage: `url(${SortImage})`,
                            opacity: 0.8, // Adjust opacity
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl p-8 flex flex-col items-center justify-center text-center transition-opacity duration-500">
                            <h2 className="text-2xl font-bold mb-4 text-white shadow-lg">Sorting Visualizer</h2>
                            <p className="text-white">Learn and visualize sorting algorithms like Merge, Quick, and Bubble Sort.</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
