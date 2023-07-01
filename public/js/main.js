const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const cityname = document.getElementById("cityname");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();

  const cityVal = city_name.value;

  if (cityVal == "") {
    cityname.innerText = `Please Enter The City Name First And Then Check !! `;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9a1f874ad5477835efda8d38ed19c3bc`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      cityname.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      //   temp_status.innerText = arrData[0].weather[0].main;

      const tempStatus = arrData[0].weather[0].main;
      //condition to check temperatureres.status

      if (tempStatus == "Clear") {
        temp_status.innerHTML =
          "<box-icon name='sun' type='solid' size='80px' flip='vertical' animation='spin' color='#1ac1d8' ></box-icon>";
      } else if (tempStatus == "Clouds") {
        temp_status.innerHTML =
          "<box-icon name='cloud' type='solid' size='80px' animation='tada' color='#1ed6d5' ></box-icon>";
      } else if (tempStatus == "Rain") {
        temp_status.innerHTML =
          "<box-icon name='cloud-light-rain' size='80px'  animation='tada' color='#1ed6d5' ></box-icon>";
      } else if (tempStatus == "Drizzle") {
        temp_status.innerHTML =
          "<box-icon name='cloud-drizzle' size='80px' animation='fade-down' color='#1ac1d8' ></box-icon>";
      } else if (tempStatus == "thunderstorm") {
        temp_status.innerHTML = '<i class="fa-solid fa-cloud-bolt" style="color:#1ed6d5; font-size:80px;"></i>';
      }else if(tempStatus == 'Haze'){
        
      } 
      else if (tempStatus == "Smoke") {
        temp_status.innerHTML =
          '<i class="fa fa-smog" style="color:#1ed6d5; font-size:80px;"></i>';
      } else {
        temp_status.innerHTML =
          "<box-icon name='sun' type='solid' size='80px' flip='vertical' animation='spin' color='#1ac1d8' ></box-icon>";
      }
      datahide.classList.remove("data_hide");

      //   console.log(data);
    } catch {
      cityname.innerText = `Please Enter The City Name Properly`;
      datahide.classList.add("data_hide");
    }
  }
};

submitbtn.addEventListener("click", getInfo);
