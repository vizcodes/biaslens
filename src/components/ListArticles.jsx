import React from 'react';
import '../App.css';

function ListArticles({ topic }) {
    const [activeButton, setActiveButton] = React.useState('All');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const articles = [
        { title: 'Breaking News: Market Trends', publisher: 'Finance Daily', badge: 'Left' },
        { title: 'Health Insights: New Discoveries', publisher: 'Health Weekly', badge: 'Center' },
        { title: 'Technology Today: AI Advances', publisher: 'Tech World', badge: 'Right' },
    ];

    const filteredArticles = activeButton === 'All' ? articles : articles.filter(article => article.badge === activeButton);

    return (
        <div className="search-results mx-2 my-5 text-left">
            <div>
                <div className="flex flex-wrap md:flex-nowrap gap-4">
                    <div className="menu-buttons w-full mb-4 order-2 md:order-none md:w-2/3">
                        <table className="table w-full border border-gray-400 rounded-xl overflow-hidden">
                            <tbody>
                                <tr>
                                    <td
                                        className={`text-center p-0 ${activeButton === 'All' ? 'border-b-4 ' : ''}`}
                                        onClick={() => handleButtonClick('All')}
                                    >
                                        <button className="btn w-full text-white rounded-none">All(13)</button>
                                    </td>
                                    <td
                                        className={`text-center p-0 ${activeButton === 'Left' ? 'border-b-4 ' : ''}`}
                                        onClick={() => handleButtonClick('Left')}
                                    >
                                        <button className="btn w-full text-white rounded-none">Left (5) </button>
                                    </td>
                                    <td
                                        className={`text-center p-0 ${activeButton === 'Center' ? 'border-b-4 ' : ''}`}
                                        onClick={() => handleButtonClick('Center')}
                                    >
                                        <button className="btn w-full text-white rounded-none ">Center (2) </button>
                                    </td>
                                    <td
                                        className={`text-center p-0 ${activeButton === 'Right' ? 'border-b-4 ' : ''}`}
                                        onClick={() => handleButtonClick('Right')}
                                    >
                                        <button className="btn w-full text-white rounded-none">Right (6)</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="list-articles flex flex-wrap gap-4 w-full">
                            <ul className="list bg-base-100 rounded-box shadow-md w-full">
                                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top Articles in this section</li>
                                {filteredArticles.map((article, index) => (
                                    <li key={index} className="list-row relative">
                                        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                                        <div>
                                            <div>{article.title}</div>
                                            <div className="text-xs uppercase font-semibold opacity-60">{article.publisher}</div>
                                        </div>
                                        <div className={`badge absolute top-2 right-2 ${article.badge === 'Left' ? 'bg-blue-500' : article.badge === 'Center' ? 'bg-black text-white' : 'bg-red-500'}`}>{article.badge}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="grid-section py-2 w-full md:w-1/3 flex-shrink-0 order-1 md:order-none">
                        <table className="table w-full border border-gray-400 rounded-xl overflow-hidden">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2" colSpan="2">News Source Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">Total News Sources</td>
                                    <td className="px-4 py-2">13</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Leaning Left</td>
                                    <td className="px-4 py-2">5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Leaning Right</td>
                                    <td className="px-4 py-2">6</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Center</td>
                                    <td className="px-4 py-2">2</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Bias Distribution</td>
                                    <td className="px-4 py-2">45% Right</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListArticles;
