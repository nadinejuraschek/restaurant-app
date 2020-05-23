// REACT
import { useState, useEffect } from 'react';

// MIDDLEWARE
import yelp from '../api/yelp';

export default () => {
    const [ result, setResult ] = useState(null);
    const id = navigation.getParam('id');

    const getBusiness = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getBusiness(id);
    }, []);

    return result;
};