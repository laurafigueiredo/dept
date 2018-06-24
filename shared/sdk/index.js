import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
});

const adaptRecentPhotos = (arr) => {
    const normalized = arr.reduce((result, currentObj, index) => {
        const aux = result;

        aux.recentPhotos[index] = {
            image: currentObj.images.standard_resolution,
            caption: currentObj.caption.text,
        };

        return aux;
    }, { recentPhotos: [] });

    return normalized;
};

const sdk = {
    instagram: {
        recentPhotos: () => apiClient.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=8073799937.1677ed0.63b9074ecc514b5d81a8361270ef6b52&count=6')
            .then(response => adaptRecentPhotos(response.data.data)),
    },
};

export default sdk;
