const form = document.querySelector("#contact-form");

form.addEventListener('submit', handlesubmit)

async function handlesubmit(event){
  event.preventDefault()
  const form = new FormData(this)
 const response = await fetch(this.action,{
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json',

    }
  })
  if(response.ok){
    this.reset()
    swal.fire({
      title: "Mensaje enviado",
      text: "Te contactaremos pronto",
      color: '#00BB2D',
      icon: "success",
      buttons: true,
      
  })

  }
}
