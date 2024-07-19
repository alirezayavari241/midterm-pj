import axios, {isCancel, AxiosError} from 'axios';
const productslist = document.getElementById('productslist');
const BASE_URL = 'http://localhost:3000/products';
const search = document.querySelector('#search')
async function fetchproducts() {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();  
  renderproducts(data);
  search.value=''
}

async function fetchbrand(name) {
  if (name=='all'){
    const response = await axios.get(`${BASE_URL}`);
    renderproducts(response.data);

  }
  else{
  const response = await axios.get(`${BASE_URL}/?brand=${name}`);
  renderproducts(response.data);}
}

function fetchall(){
  fetchproducts()
}

function renderproducts(items) {
  productslist.innerHTML = '';
  items.forEach((item) => {
    const product = document.createElement('button');
    product.setAttribute('id', `${item.id}`);
    product.onclick = () => handleButtonClick(item.id);
    const productimg = document.createElement('div');
    const productimgurl = document.createElement('img');
    const productinfo = document.createElement('div');
    const producttitle = document.createElement("span");
    const productprice = document.createElement('span');
    product.classList.add('py-2', 'flex', 'flex-col','mb-4','w-44');
    productimg.setAttribute('id', 'productimage');
    productimg.classList.add('bg-gray-100', 'p-4','h-48' ,'rounded-2xl');
    productimgurl.setAttribute('src', `${item.imgUrl}`);
    productimgurl.style.mixBlendMode="multiply"
    productimgurl.setAttribute('width', '150px');
    productimgurl.setAttribute('height', '50px');
    productimgurl.classList.add('bg-transparent','rounded-2xl');
    productinfo.classList.add('flex', 'flex-col', 'ml-2', 'text-black','text-left');
    productinfo.setAttribute('id', 'productinfos');
    producttitle.innerText = `${item.name}`;
    productprice.innerText = `$${item.price}`;
    productimg.appendChild(productimgurl);
    product.appendChild(productimg);
    productinfo.appendChild(producttitle);
    productinfo.appendChild(productprice);
    product.appendChild(productinfo);
    productslist.appendChild(product);
  });
}

fetchproducts();

function handleButtonClick(buttonId) {
  fetchproductinfos(buttonId);
}

async function fetchproductinfos(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();  
  console.log(data);
}

function brandhandler(brandid) {
    fetchbrand(brandid.toLowerCase());
    highlightButton(brandid)
}


function highlightButton(brandid) {
  document.querySelectorAll('.brand-button').forEach(button => {
    button.classList.remove('text-white');
    button.classList.add('text-black');
    button.classList.remove('bg-gray-800');
    button.classList.add('bg-white');
  });
  console.log(brandid);
  document.getElementById(brandid.toLowerCase()).classList.remove('text-black');
  document.getElementById(brandid.toLowerCase()).classList.add('text-white');
  document.getElementById(brandid.toLowerCase()).classList.remove('bg-white');
  document.getElementById(brandid.toLowerCase()).classList.add('bg-gray-800');
}

window.brandhandler = brandhandler;
let timeoutId;
const showInputValue = () => {
  resultsDiv.innerHTML = ''
  if(search.value.trim().length >0){
    resultsDiv.innerHTML = ''
  findSimilarObjects(search.value.trim())}

};

search.addEventListener('input', () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(showInputValue, 500);
});

search.addEventListener('focus', () => {

});

search.addEventListener('blur', () => {

  clearTimeout(timeoutId);
});

async function findSimilarObjects(query) {
  
    const response = await axios.get('http://localhost:3000/products');
    const books = response.data;
    const searchKey = 'name';
    const searchValue = query.toLowerCase();
    const similarBooks = books.filter(book => 
      book[searchKey].toLowerCase().includes(searchValue)
    );
  displayResults(similarBooks)
  console.log(similarBooks.length);
}
const resultsDiv = document.querySelector('#searchresultlist')

const displayResults = (results) => {  
  resultsDiv.innerHTML = '';
  if(search.value.length>0){
    results.forEach(result => {
      const div = document.createElement('button');
      div.classList.add('text-left','p-2','ml-4','mt-2','bg-gray-100' )
      const divlink = document.createElement('a')
      divlink.textContent = result.name;
      div.addEventListener('click', () => {
        window.location.href = `/products/${result.id}`;
        console.log(result.id);
      });
      div.appendChild(divlink)
      resultsDiv.appendChild(div);
    })
  }
  if(search.value.trim().length===0 && search.value.length===0){
    console.log("object");
  }

  if (results.length === 0) {
    const notfound = document.createElement('p');
    notfound.innerText='Not found!'
    notfound.classList.add('text-left','p-2','ml-4','mt-2','bg-gray-100' )

    resultsDiv.appendChild(notfound)

    return;
  };
};

const sortproducts = async (query) => {
  try {
    const responses = await axios.get('http://localhost:3000/products', {
      params: {
        q: query,
        _sort: 'rate',
        _order: 'asc'
      }
    });
    // console.log(responses.data);
    sortproductslist(responses.data.reverse())

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
sortproducts()

const sortproductslist = (results) => {  
    results.forEach(result => {
      // console.log(result.name);
      console.log(result);
      
  })
};

function brandpagehandler(ids) {
  console.log(ids);
}

window.brandpagehandler = brandpagehandler;



