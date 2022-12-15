let searchBtn = document.querySelector(".bi-search");
let closeBtn = document.querySelector(".bi-x-circle");
let searchBox = document.querySelector(".searchBox");



searchBtn.onclick = function(){

    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBox.classList.add('active');
   
}


closeBtn.onclick = function(){

    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    
}
/*viendo mobile*/

const buscar = document.getElementById('buscar');
const lista = document.getElementById('lista');

const searchEstados = async searchText =>{
  const resp = await fetch ('https://challenge4.onrender.com/producto');
  const estados = await resp.json();
  
  let matches= estados.filter(estado =>{
    const regex = new RegExp(`^${searchText}`,'gi');
    return estado.name.match(regex) || estado.categoria.match(regex);
  });

  if(searchText.length ===0){
    matches =[];
    lista.innerHTML ='';
  }
  outputHtml(matches);
};
const outputHtml = matches =>{
  if(matches.length > 0){
    const html  = matches.map(match=>`
    <div class="card card-body">
     
      <a class="ver-produto" href="https://cil4.github.io/challenge4-g3/screens/detalle-producto.html?id=${match.id}">${match.name} - (${match.categoria})</a>
      
    </div>
    `
    ).join('');

    lista.innerHTML = html;
  }
}

buscar.addEventListener('input',() =>searchEstados(buscar.value));