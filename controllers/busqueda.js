const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchEstados = async searchText =>{
  const resp = await fetch ('https://challenge4.onrender.com/producto');
  const estados = await resp.json();
  
  let matches= estados.filter(estado =>{
    const regex = new RegExp(`^${searchText}`,'gi');
    return estado.name.match(regex) || estado.categoria.match(regex);
  });

  if(searchText.length ===0){
    matches =[];
    matchList.innerHTML ='';
  }
  outputHtml(matches);
};
const outputHtml = matches =>{
  if(matches.length > 0){
    const html  = matches.map(match=>`
    <div class="card card-body">
     
      <a class="ver-produto" href="/screens/detalle-producto.html?id=${match.id}">${match.name} - (${match.categoria})</a>
      
    </div>
    `
    ).join('');

    matchList.innerHTML = html;
  }
}

search.addEventListener('input',() =>searchEstados(search.value));