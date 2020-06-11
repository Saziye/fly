import axios from 'axios';

async function getAirports() {
    return await axios.get('https://www.kurutravel.com/airports');
}

export {
    getAirports
}
