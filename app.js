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
        spinner('none')
        if (phones.length == 0) {
            const errorMessage = document.getElementById('error')

            errorMessage.innerText = 'No phones Found'

            showPhone.textContent = ''
            spinner('none')
        } else {
            const errorMessage = document.getElementById('error')
            errorMessage.innerText = ''

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




        }

        errorMessage.innerHTML = ""
        showPhone.textContent = ''


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
    <h6>Brand: ${detail.brand} </h6>
    <h6> Release Date:  ${detail.releaseDate?detail.releaseDate:"coming soon"}  </h6> <h6> Main Features: Chipset ${detail.mainFeatures.chipSet}  </h6> <h6> Memory: ${detail.mainFeatures.memory}  </h6> <h6> Display: ${detail.mainFeatures.displaySize} </h6> <h6> ID:${detail.slug} </h6> <h6>Storage:${detail.mainFeatures.storage}
    <h6>Sensors:   ${detail.mainFeatures.sensors?detail.mainFeatures.sensors:"not available"}  </h6>
    <h6>Others: ${detail.others?detail.others.WLAN:"not available"} Bluetooth: ${detail.others?detail.others.Bluetooth:        
    "not available"} GPS: ${detail.others?detail.others.GPS:"not available"}  NFC: ${detail.others?detail.others.NFC:"not available"} Radio:${detail.others?detail.others.Radio:"not available"}  </h6>
    </div>
      
    </div>`


    details.appendChild(detailDiv)


}