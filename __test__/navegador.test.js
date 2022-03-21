const puppeteer = require('puppeteer') 

describe(' Mi primer test en puppeteer', () => {

  it('Debe abrir y cerrar el navegador', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 0,
      devtools: false,
      /* defaultViewport: {
        width: 2100,
        height: 1080
      } */
      // args: ['--window-size=1920,1080']
      defaultViewport: null
    })
    const page = await browser.newPage()
    await page.goto('https://github.com/')
    // await page.waitForTimeout(5000)
    await page.waitForSelector('img')
    //Recargar la pagina
    await page.reload()
    await page.waitForSelector('img')
    
    //Navegar a otro sitio
    await page.goto('https://platzi.com/')
    // await page.waitForSelector('#promos > main > div > header > nav > div.Logo > div > a > div > figure.LogoHeader-name > img')

    //Navegar hacia atras

    await page.goBack();
    await page.waitForTimeout(3000)
    await page.goForward()
    await page.waitForTimeout(3000)
    
    //Abrir otra pagina
    const page2 = await browser.newPage()
    await page2.goto('https://google.com/')

    await page.bringToFront() // Trae la Pestaña al frente
    // await page.waitForSelector()

    await page.waitForTimeout(2000)
    await browser.close()

  }, 350000)
})