const APIEndpoint = "https://api.quotable.io/random";

const getQuotes = async () => {
    const response = await fetch(APIEndpoint);
    const data = await response.json();
    return data;
}

const showQuotes = () => {
    getQuotes().then(data => {
        document.querySelector('#quote-content').innerHTML = `${data.content}`;
        document.querySelector('#quote-credit').innerHTML = `${data.author}`;
    })
}

showQuotes();


const showCredit = () => {
    setTimeout(() => {
        document.querySelector('#quote-credit').style.opacity = 1;
        console.log('showCredit')
    }, 4000)
}
showCredit();