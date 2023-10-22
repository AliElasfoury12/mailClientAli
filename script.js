const form = document.querySelector("form"),
statusTxt = document.querySelector(".button-area span")

form.onsubmit = (e) => {
  e.preventDefault();//preventing form from submit
  statusTxt.style.color = 'rgb(78, 78, 250) '
  statusTxt.style.display = "block"


  let xhr = new XMLHttpRequest()//creating new xml object

  xhr.open("POST", "message.php", true) // sending post request to message.php file

  xhr.onload = () => {
    //once ajax loaded
    if(xhr.readyState == 4 && xhr.status == 200){
      //means there is no any error
      let response = xhr.response //storing ajax in var
     if(response.indexOf("Email and Message field is required") != -1 || response.indexOf("Enter a vaild email adress!") != -1 || response.indexOf("Sorry, failed to send your message") != -1 ){

      statusTxt.style.color = "red"

     }else{

        form.reset()
        setTimeout(()=>{
          statusTxt.style.display = "none"
        },3000)
     }
      statusTxt.innerHTML = response
    }
  }

  let formData = new FormData(form)
  xhr.send(formData)
} 
