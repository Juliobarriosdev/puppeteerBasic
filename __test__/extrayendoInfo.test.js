const puppeteer = require('puppeteer') 

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

  }, 10000)
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
    
    await page.waitForSelector('#promos > main > div > header > nav > div.Actionsv2 > a')

    const nameButton = await page.$eval('#promos > main > div > header > nav > div.Actionsv2 > a', (button) => button.textContent)

    console.log('nameButton', nameButton)
    
    const [button] = await page.$x('//*[@id="promos"]/main/div/header/nav/div[4]/div/a')
    const propiedad = await button.getProperty('textContent')
    const text = await propiedad.jsonValue()
    
    console.log('text', text)

    //Segunda forma

    const text2 = await page.evaluate((name) => name.textContent, button) //Pasamos el elento que queremos"button"
    
    console.log('text2', text2)
    
    // Tercer forma
    
    const button3 = await page.waitForXPath('//*[@id="promos"]/main/div/header/nav/div[4]/div/a')
    const text3 = await page.evaluate((name) => name.textContent, button3) //Pasamos el elento que queremos"button"
    console.log('text3', text3)



  }, 350000)

  it('Contar los elementos de una pagina', async () => {
    

    const images = await page.$$eval('img', (imagenes) => imagenes.length)

    console.log('images', images)


  }, 350000)
  
})