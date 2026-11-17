window.GOOGLE_MAPS_API_KEYS = {
    schoolList: 'AIzaSyCFbMa2f47QHIZTGp49YbZXzn6aVegYNsk',
    locationChecker: 'AIzaSyCmZycGfLPHm8CkXGtTMqNphRhL1cF-Nd4'
};

window.loadGoogleMapsApi = function (keyName, libraries, callback) {
    const apiKey = window.GOOGLE_MAPS_API_KEYS[keyName];
    if (!apiKey) {
        throw new Error('Set the Google Maps API key in map-config.js.');
    }

    const script = document.createElement('script');
    const parameters = new URLSearchParams({
        key: apiKey,
        libraries: libraries.join(','),
        callback,
        loading: 'async'
    });

    script.src = `https://maps.googleapis.com/maps/api/js?${parameters}`;
    script.async = true;
    script.onerror = () => {
        console.error('Unable to load Google Maps. Check the API key, billing, and network connection.');
    };
    document.head.appendChild(script);
};