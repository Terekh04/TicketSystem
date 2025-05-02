import React from 'react';
import './GetStarted.css' 
const apiUrl = import.meta.env.VITE_API_URL;
import { Link } from 'react-router-dom'; 

const GetStarted = () => {
    return (
        <div className='start'>
        <h1>Organize teamwork with AI</h1>
            <h2>TicketSystem is a task management platform with smart assistant, real time and transparent role structure.</h2>
            <Link to='/' className='button'>
                Get Started
            </Link>
        </div>
    );
}

export default GetStarted