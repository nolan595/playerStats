export const  API_BASE_URL = 
process.env.REACT_APP_API_BASE_URL || 'https://autoresultingbackend-production.up.railway.app/api'; 

// check if there is a .env file in the root directory, this file wont be available on product
// if there is a .env file, it will be used to set the API_BASE_URL i.e local host