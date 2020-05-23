// NPM PACKAGES
import axios from 'axios';

// KEYS
import config from '../../config';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${config.YELP_API_KEY}`
    }
});