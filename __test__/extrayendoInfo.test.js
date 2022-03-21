const puppeteer = require('puppeteer') 

const { getText, getCount } = require('../lib/helpers')

describe('Extrayendo informacion', () => {

  let browser 
  let page
  // beforeEach Antes de cada una 
  beforeAll(async () => { // Antes de todas
      browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: null,
    })

    page = await browser.newPage()
    await page.goto('https://platzi.com', { waitUntil: 'networkidle0' }) 

  }, 100000)
  // afterEach Despues de cada una
  afterAll(async () => { // Despues de todas

    await browser.close()

  })

  it('Extraer el titulo de la pagina y url', async () => {
    
    const titulo = await page.title()
    const url = await page.url()

    console.log('Titulo', titulo)
    console.log('Url', url)

  }, 350000)

  it('Extraer la informacion de un elemento', async () => {
    
    await page.waitForSelector('#home-public > div > div.BaseLayout > header > nav > div.Logo > div > a > div > figure.LogoHeader-name.is-live > img')

    const nameButton = await getText(page, '#home-public > div > div.BaseLayout > header > nav > div.Logo > div > a > div > figure.LogoHeader-name.is-live > img')

    console.log('nameButton', nameButton); 

  }, 350000)

  it('Contar los elementos de una pagina', async () => {
    
    // const images = await getCount(page,'img')
    const images = await getCount(page ,'img')

    console.log('images', images)


  }, 350000)
  
})