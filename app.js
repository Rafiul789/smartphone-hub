// loading spinner
const spinner = displaySpinner => {
    document.getElementById('spinner').style.display = displaySpinner
}

// getting phone searchbar
const searchPhone = () => {

        const phone = document.getElementById('search-phone').value
            // spinner
        spinner('block')
            // loading phone data
        const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`
        fetch(url)
            .then((response) => response.json())
            .then(data => phoneDetails(data.data.slice(0, 20)))

    }
    // showing phone information
const phoneDetails = (phones) => {
        const showPhone = document.getElementById('phones-container')
        showPhone.textContent = ''

        for (const phone of phones) {

            const phoneDiv = document.createElement('div')
            phoneDiv.classList.add('col-md-4')
            phoneDiv.classList.add('mb-3')

            phoneDiv.innerHTML = `
        <div   class="card" >
        <img class="card-img-top" src="${phone.image}" >
        <div class="card-body">
          <h4 class="card-title">Brand:${phone.brand}</h4>
          <p class="card-text">Name:${phone.phone_name}  </p>
          <button onclick="phoneDetail('${phone.slug}')"   type="button"  class="btn btn-primary">Details</button>
        </div>
      </div>
        `
            showPhone.appendChild(phoneDiv)

        }
        spinner('none')
    }
    // getting the specification of phone
const phoneDetail = (id) => {

        const url = `https://openapi.programming-hero.com/api/phone/${id}`

        fetch(url)
            .then((response) => response.json())
            .then(data => showPhoneDetail(data.data))
    }
    // showing the specification
const showPhoneDetail = (detail) => {

    console.log(detail)
    const details = document.getElementById('more-details')
    details.textContent = ''
    const detailDiv = document.createElement('div');
    detailDiv.classList.add("card")
    detailDiv.innerHTML = `<div>  <img class="card-img-top" src="${detail.image}" >
    <div class="card-body">
    <p>Brand: ${detail.brand} </p>
    <p> Release Date: ${detail.releaseDate} </p> <p> Main Features: Chipset ${detail.mainFeatures.chipSet}  </p> <p> Memory: ${detail.mainFeatures.memory}  </p> <p> Display: ${detail.mainFeatures.displaySize} </p> <p> ID:${detail.slug} </p> <p>Storage:${detail.mainFeatures.storage}</div>
      
    </div>`


    details.appendChild(detailDiv)


}