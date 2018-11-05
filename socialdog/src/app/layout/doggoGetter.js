const card = document.querySelector('.card');


//------------------------------
//    Fetch Functions
//------------------------------
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => generateImage(data.message))


//------------------------------
//    Helper Functions
//------------------------------

function generateImage(data) {
    const html = `
      <img src='${data}' alt>
    `;
    card.innerHTML = html;
  }

