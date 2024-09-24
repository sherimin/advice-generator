const API_endpoint = "https://api.adviceslip.com/advice";


async function fetchData() {
    try {
        const response = await fetch(API_endpoint);

        if (!response.ok) console.log('Error in response: ');

        const data = await response.json();

        // console.log('Data.id: ', data.slip.id);
        // console.log('Data: ', data.slip.advice);

        document.getElementById('advice-id-span').innerText = data.slip.id;
        document.getElementById('advice-text').innerText = data.slip.advice;
    } catch (error) {
        console.log('Error in fetchData: ', error);
    }
}

document.getElementById('refresh-btn').addEventListener('click', fetchData);

fetchData();