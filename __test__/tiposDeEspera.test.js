const puppeteer = require('puppeteer') 

describe(' Tipos de espera', () => {

  it('Mostrar todos los tipos diferentes de espera', async () => {
    jest.setTimeout(10000)// 
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      // slowMo: 500
    })
    const page = await browser.newPage()
    //page.setDefaultTimeout(1000) //Coloca un timeOut por defecto
    //page.setDefaultNavigationTimeout(1000) //Establece cuando la nevegacon debe terminar
    await page.goto('https://platzi.com', { waitUntil: 'networkidle0' })
     /* Espera hasta que no haya conexiones
     pendientes (Ver mas en la documentación) */
    
    //Espera explicita

    // await page.waitForTimeout(5000)

    //Espera por un selector

    //Espera por un CSS selector

    await page.waitForSelector('#promos > main > div > header > nav > div.Logo > div > a > div > figure:nth-child(1) > img')

    //Espera por un XPath

    await page.waitForXPath('//*[@id="promos"]/main/div/header/nav/div[1]/div/a/div/figure[1]/img')

    await page.goto('https://demoqa.com/modal-dialogs', { waitUntil: 'networkidle2' })

    // await page.waitForSelector('#showSmallModal', { visible: true }) // Evalua que sol solo este en el DOM
    const button = await page.waitForXPath('//*[@id="showSmallModal"]', { visible: true })
    await button.click()

    //Espera por función

    await page.waitForFunction(() => document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal')
    
    // Ejemplo para observar el viewport
    /*  const obervaResize = page.waitForFunction('window.innerWidth < 100')
    await page.setViewport( { width: 50, height: 50 })

    await obervaResize */
    
    await page.click('#closeSmallModal')
    await page.waitForFunction(() => !document.querySelector('#example-modal-sizes-title-sm'), {
      timeout:30000
    })

    await browser.close()

  }, 350000)
})