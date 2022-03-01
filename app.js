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
        <div class="card" >
        <img class="card-img-top" src="${phone.image}" >
        <div class="card-body">
          <h4 class="card-title">Brand:${phone.brand}</h4>
          <p class="card-text">Name:${phone.phone_name}  </p>
          <button onclick="phoneDetail('${phone.slug}')"  class="btn btn-primary">Details</button>
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

const showPhoneDetail = (phone) => {

    c
    const details = document.getElementById('more-details')
    const detailDiv = document.createElement('div');
    detailDiv.innerHTML = ` <div> <img src="${phone.image}>    <h5> ${phone.name}  </h5>  <p> Release Date: ${phone.releaseDate} </p> <p> Main Features: Chipset ${phone.mainFeatures.chipset}  </p> <p> Memory: ${phone.mainFeatures.memory}  </p> <p> Display: ${phone.mainFeatures.display} </p> <p> ID:${phone.slug} </p>    </div>`

    details.appendChild(detailDiv)


}