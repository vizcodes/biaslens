import React from 'react';
import HeroImage from '../assets/Hero.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../api';

const Hero = () => {
    const [topic, setTopic] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        if (topic) {
            try {
                const response = await api.post('/search/', { "phrase" : topic });

                if (response.status === 200) {
                    navigate(`/news/${topic}`);
                } else {
                    alert('Failed to fetch search results. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        } else {
            alert('Please enter a topic to search for news.');
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex flex-col items-center text-center">
                <div className="avatar mb-6">
                    <div className="w-48 rounded-full">
                        <img src={HeroImage} alt="Hero" />
                    </div>
                </div>
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Uncover the Bias. Discover the Truth.</h1>
                    <p className="py-6 text-sm">
                        Stay informed with our BiasLens that filters through the noise to bring you unbiased and truthful news. Your gateway to clarity in a world of misinformation.
                    </p>
                    <form className="py-4" onSubmit={handleSearch}>
                        <div className="form-control">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Search for news..."
                                    className="input input-bordered rounded-l-lg"
                                    onChange={(e) => setTopic(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="mt-5 btn btn-primary">Uncover Bias!</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );

}

export default Hero;
