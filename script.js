function getPrice() {
  const apiKey = "W48YPWENQ4NRE87LQ2M36567LQ2M3";
  const metalAPI = `https://api.metals.dev/v1/latest?api_key=${apiKey}&currency=USD&unit=g`;

  fetch(metalAPI)
    .then((response) => response.json())
    .then((data) => {
      displayPrice(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayPrice(data) {
  const price = document.getElementById("conversion");
  const metal = document.getElementById("metal").value;
  const amount = document.getElementById("weight");

  price.innerHTML = "";

  if (data.status != "success") {
    alert("Failed to retrieve metal");
    return;
  } else {
    const metPrice = data.metals[metal];
    const result = metPrice * amount.value;

    if (result == 0 || isNaN(amount.value)) {
      price.innerHTML = `<p class="info">Please enter a number</p>`;
      return;
    } else {
      price.innerHTML = `<br><p class="info">1g of ${metal} is equal to $${metPrice}. <br>So, ${amount.value}g of ${metal} is equal to $${result}</p>`;
    }
  }
}
