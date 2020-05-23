// REACT
import { useState, useEffect } from 'react';

// MIDDLEWARE
import yelp from '../api/yelp';

export default () => {
    const [ businesses, setBusinesses ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ greeting, setGreeting ] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setBusinesses(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong. Try again later.');
        }
    };

    // call searchAPI when component is first rendered
    useEffect(() => {
        const time = new Date().getHours();
        let defaultTerm = '';
        let greeting = '';
        if (time > 6 && time < 11) {
            defaultTerm = 'breakfast';
            greeting = "What's for breakfast?";
        } else if (time >= 11 && time < 14) {
            defaultTerm = 'lunch';
            greeting = 'How about some lunch?';
        } else if (time >= 14 && time < 22) {
            defaultTerm = 'dinner';
            greeting = 'Getting ready for dinner?';
        } else {
            defaultTerm = 'sandwich';
            greeting = 'Searching for a late night snack?';
        };
        searchAPI(defaultTerm);
        setGreeting(greeting);
    }, []);

    return [ businesses, errorMessage, greeting, searchAPI ];
};