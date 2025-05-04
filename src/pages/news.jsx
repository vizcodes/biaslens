import { useState } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'
import Searchoutput from '../components/search_results.jsx'
import Footer from '../components/footer.jsx'
import ListArticles from '../components/ListArticles.jsx'
import React from 'react'

function SearchResults() {
    const { topic } = useParams();
     
    return (
        <div>
            <Navbar />
            <Searchoutput topic={topic} />
            <ListArticles/>
            <Footer />
        </div>
    );
}

export default SearchResults;