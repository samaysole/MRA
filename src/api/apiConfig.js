
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '82eb80739172c5c547af697ede768d23',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;