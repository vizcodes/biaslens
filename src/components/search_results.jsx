import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function SearchResults({ topic }) {
    const [activeButton, setActiveButton] = React.useState('center');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const getBorderColor = () => {
        switch (activeButton) {
            case 'left':
                return 'border-blue-500';
            case 'center':
                return 'border-white';
            case 'right':
                return 'border-red-500';
            default:
                return 'border-gray-300';
        }
    };

    return (
        <div className="search-results mx-2 my-5 text-left ">
            <h2 className="text-gray-500">Search Results for: {topic}</h2>

            <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="summary py-2 w-full md:w-2/3 flex-grow-0 ">
                    <h1 className="text-2xl md:text-3xl font-bold capitalize">Amazon rainforest declining!</h1>
                    <div className="join my-3 flex flex-wrap">
                        <button
                            className={`btn btn-sm join-item ${activeButton === 'left' ? 'bg-blue-800' : 'bg-gray-400'}`}
                            onClick={() => handleButtonClick('left')}
                        >
                            Left
                        </button>
                        <button
                            className={`btn btn-sm join-item ${activeButton === 'center' ? 'bg-white-200' : 'bg-gray-400'}`}
                            onClick={() => handleButtonClick('center')}
                        >
                            Center
                        </button>
                        <button
                            className={`btn btn-sm join-item ${activeButton === 'right' ? 'bg-red-800' : 'bg-gray-400'}`}
                            onClick={() => handleButtonClick('right')}
                        >
                            Right
                        </button>
                    </div>

                    <p className="text-xs py-4 text-gray-300">The Amazon rainforest is declining at an alarming rate, with deforestation and climate change threatening its biodiversity and the livelihoods of indigenous communities.</p>
                    
                    <div className="flex flex-wrap gap-2">
                        <div className={`card bg-base-100 shadow-sm w-full md:w-80 border-2 ${getBorderColor()}`}>
                            <div className="card-body">
                                <h2 className="card-title">What happened?</h2>
                                <p className="text-xs">The Amazon rainforest is facing severe deforestation due to illegal logging, agricultural expansion, and climate change.</p>
                            </div>
                        </div>

                        <div className={`card bg-base-100 shadow-sm w-full md:w-80 border-2 ${getBorderColor()}`}>
                            <div className="card-body">
                                <h2 className="card-title">Who was involved?</h2>
                                <p className="text-xs">Various stakeholders are involved, including local governments, indigenous communities, environmental activists, and illegal loggers.</p>
                            </div>
                        </div>

                        <div className={`card bg-base-100 shadow-sm w-full md:w-80 border-2 ${getBorderColor()}`}>
                            <div className="card-body">
                                <h2 className="card-title">When and where did this happen?</h2>
                                <p className="text-xs">The deforestation crisis has been ongoing for decades, with significant activity in the Amazon basin, primarily in Brazil.</p>
                            </div>
                        </div>

                        <div className={`card bg-base-100 shadow-sm w-full md:w-80 border-2 ${getBorderColor()}`}>
                            <div className="card-body">
                                <h2 className="card-title">Why is this important?</h2>
                                <p className="text-xs">The Amazon rainforest plays a critical role in regulating the Earth's climate and is home to millions of species.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-section py-2 w-full md:w-1/3 flex-shrink-0">
                    <div
                        className="grid grid-cols-2 grid-rows-2 gap-1 h-full"
                    >
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-700 border border-gray-400 rounded-lg"
                                style={{
                                    aspectRatio: '1 / 1',
                                }}
                            >
                                Placeholder {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;