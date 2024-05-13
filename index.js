const PRODUCTS = [
  {
    image: './assets/og-kush.png',
    name: 'OG Kush',
    price: '€15',
    tipo: 'Híbrida',
    stars: 4.5,
    thc_porcentaje: '15%-20%'
  },
  {
    image: './assets/blue-dream.png',
    name: 'Blue Dream',
    price: '€12',
    tipo: 'Sátiva',
    stars: 4.5,
    thc_porcentaje: '18%-22%'
  },
  {
    image: './assets/gsc.png',
    name: 'Girl Scout Cookies',
    price: '€18',
    tipo: 'Híbrida',
    stars: 4.5,
    thc_porcentaje: '20%-25%'
  },
  {
    image: './assets/northern-lights.png',
    name: 'Northern Lights',
    price: '€14',
    tipo: 'Índica',
    stars: 4.5,
    thc_porcentaje: '15%-20%'
  },
  {
    image: './assets/jack-herer.jpg',
    name: 'Jack Herer',
    price: '€16',
    tipo: 'Sátiva',
    stars: 4.5,
    thc_porcentaje: '18%-24%'
  },
  {
    image: './assets/white-widow.png',
    name: 'White Widow',
    price: '€13',
    tipo: 'Híbrida',
    stars: 4.5,
    thc_porcentaje: '18%-25%'
  },
  {
    image: './assets/gg-4.jpg',
    name: 'Gorilla Glue #4',
    price: '€20',
    tipo: 'Híbrida',
    stars: 4.5,
    thc_porcentaje: '25%-30%'
  },
  {
    image: './assets/purplekush.jpg',
    name: 'Purple Kush',
    price: '€17',
    tipo: 'Índica',
    stars: 3.8,
    thc_porcentaje: '20%-25%'
  }
]

const filterContainer = document.createElement('div')
filterContainer.id = 'filter'

const filterLabel = document.createElement('label')
filterLabel.setAttribute('for', 'tipo-select')
filterLabel.textContent = 'Filtrar por tipo:'

const selectTipo = document.createElement('select')
selectTipo.id = 'tipo-select'

const optionTodos = document.createElement('option')
optionTodos.value = 'all'
optionTodos.textContent = 'Todos'

const optionHibrida = document.createElement('option')
optionHibrida.value = 'Híbrida'
optionHibrida.textContent = 'Híbrida'

const optionSativa = document.createElement('option')
optionSativa.value = 'Sátiva'
optionSativa.textContent = 'Sátiva'

const optionIndica = document.createElement('option')
optionIndica.value = 'Índica'
optionIndica.textContent = 'Índica'

const filterButton = document.createElement('button')
filterButton.id = 'filter-button'
filterButton.textContent = 'Filtrar'

const filterReset = document.createElement('button')
filterReset.id = 'filter-button'
filterReset.textContent = 'Limpiar Filtros'

const selectPrecio = document.createElement('select')
selectPrecio.id = 'precio-select'

const optionTodosPrecios = document.createElement('option')
optionTodosPrecios.value = 'all'
optionTodosPrecios.textContent = 'Todos los precios'

const optionPrecioBajo = document.createElement('option')
optionPrecioBajo.value = 'bajo'
optionPrecioBajo.textContent = 'Menos de €15'

const optionPrecioMedio = document.createElement('option')
optionPrecioMedio.value = 'medio'
optionPrecioMedio.textContent = '€15 - €18'

const optionPrecioAlto = document.createElement('option')
optionPrecioAlto.value = 'alto'
optionPrecioAlto.textContent = 'Más de €18'

selectPrecio.appendChild(optionTodosPrecios)
selectPrecio.appendChild(optionPrecioBajo)
selectPrecio.appendChild(optionPrecioMedio)
selectPrecio.appendChild(optionPrecioAlto)
filterContainer.appendChild(selectPrecio)

selectTipo.appendChild(optionTodos)
selectTipo.appendChild(optionHibrida)
selectTipo.appendChild(optionSativa)
selectTipo.appendChild(optionIndica)
filterContainer.appendChild(filterLabel)
filterContainer.appendChild(selectTipo)
filterContainer.appendChild(filterButton)
filterContainer.appendChild(filterReset)
products.appendChild(filterContainer)

const printProducts = (products) => {
  const productSection = document.querySelector('#products')

  const productsContainer = document.createElement('div')
  productsContainer.id = 'product-cards'
  productSection.innerHTML = ''
  productSection.appendChild(filterContainer)
  productSection.appendChild(productsContainer)

  for (const product of products) {
    const divProductContainer = document.createElement('div')
    const divProduct = document.createElement('div')
    const imgProduct = document.createElement('img')
    const typeProduct = document.createElement('p')
    const nameProduct = document.createElement('h2')
    const ratingsProduct = document.createElement('p')
    const divRatingsContainer = document.createElement('div')
    const priceProduct = document.createElement('p')
    const buttonProduct = document.createElement('button')

    imgProduct.src = product.image
    imgProduct.alt = product.name
    typeProduct.textContent = `Tipo: ${product.tipo}`
    nameProduct.textContent = product.name
    priceProduct.textContent = `Precio: ${product.price}`
    buttonProduct.textContent = 'Comprar'

    ratingsProduct.appendChild(divRatingsContainer)
    divProduct.appendChild(imgProduct)
    divProduct.appendChild(typeProduct)
    divProduct.appendChild(nameProduct)
    divProduct.appendChild(priceProduct)
    divProduct.appendChild(ratingsProduct)
    divProduct.appendChild(buttonProduct)
    productsContainer.appendChild(divProduct)
  }
}

filterReset.addEventListener('click', () => {
  clearFilters()
})

function clearFilters() {
  selectTipo.value = 'all'

  printProducts(PRODUCTS)
}

filterButton.addEventListener('click', () => {
  const selectedType = selectTipo.value
  const selectedPrice = selectPrecio.value
  let filteredProducts = PRODUCTS

  if (selectedType !== 'all') {
    filteredProducts = filteredProducts.filter(
      (product) => product.tipo === selectedType
    )
  }

  if (selectedPrice !== 'all') {
    if (selectedPrice === 'bajo') {
      filteredProducts = filteredProducts.filter(
        (product) => parseInt(product.price.replace('€', '')) < 15
      )
    } else if (selectedPrice === 'medio') {
      filteredProducts = filteredProducts.filter(
        (product) =>
          parseInt(product.price.replace('€', '')) >= 15 &&
          parseInt(product.price.replace('€', '')) <= 18
      )
    } else if (selectedPrice === 'alto') {
      filteredProducts = filteredProducts.filter(
        (product) => parseInt(product.price.replace('€', '')) > 18
      )
    }
  }

  printProducts(filteredProducts)
})
printProducts(PRODUCTS)
