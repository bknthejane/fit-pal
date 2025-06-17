import axios from 'axios';

export const axiosInstance = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2FhYmIzNjU0NjQ4MDAxOWVhMDM5NSIsIm5hbWUiOiJ0ZXN0LWNsaWVudC1uYW1lLXN1cm5hbWUiLCJyb2xlIjoidXNlciIsInBsYW4iOm51bGwsImZlYXR1cmVzIjpbXSwiaWF0IjoxNzQxMzM1Njk3LCJleHAiOjE3NDE5NDA0OTd9._6LBDJNlVfrs5vXriycCo39xfhglqN0u4PCytlIWrYY'
    return axios.create({
        baseURL: `https://body-vault-server-b9ede5286d4c.herokuapp.com/api/`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        }
    });


}