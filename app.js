const searchPhone = () => {
    const phone = document.getElementById('search-phone').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`
    fetch(url)
        .then((response) => response.json())
        .then(data => phoneDetails(data.data))
}

const phoneDetails = (phones) => {


    for (const phone of phones) {
        const showPhone = document.getElementById('phones-container')
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col-md-4')
        phoneDiv.classList.add('mb-3')

        phoneDiv.innerHTML = `
        <div onclick="phoneDetail('${phone.slug}')"  class="card" >
        <img class="card-img-top" src="${phone.image}" >
        <div class="card-body">
          <h4 class="card-title">Brand:${phone.brand}</h4>
          <p class="card-text">Name:${phone.phone_name}  </p>
          <button type="button"  class="btn btn-primary">Details</button>
        </div>
      </div>
        `
        showPhone.appendChild(phoneDiv)
    }

}

const phoneDetail = (id) => {

    const url = `https://openapi.programming-hero.com/api/phone/${id}`

    fetch(url)
        .then((response) => response.json())
        .then(data => showPhoneDetail(data.data))
}

const showPhoneDetail = (detail) => {

    console.log(detail)
    const details = document.getElementById('more-details')
    const detailDiv = document.createElement('div');
    detailDiv.classList.add("card")
    detailDiv.innerHTML = `<div>  <img class="card-img-top" src="${detail.image}" >
    <div class="card-body">
    <p>Brand: ${detail.brand} </p>
    <p> Release Date: ${detail.releaseDate} </p> <p> Main Features: Chipset ${detail.mainFeatures.chipset}  </p> <p> Memory: ${detail.mainFeatures.memory}  </p> <p> Display: ${detail.mainFeatures.display} </p> <p> ID:${detail.slug} </p> </div>
      
    </div>`


    details.appendChild(detailDiv)


}