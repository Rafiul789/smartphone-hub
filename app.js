const searchPhone = () => {
    const phone = document.getElementById('search-phone').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`
    fetch(url)
        .then((response) => response.json())
        .then(data => console.log(data))
}