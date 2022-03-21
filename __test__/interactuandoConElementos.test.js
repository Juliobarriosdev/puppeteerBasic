const puppeteer = require('puppeteer') 

describe(' Interactuando con elementos', () => {

  it('Debe abrir y cerrar el navegador', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null
    })
    const page = await browser.newPage()
    await page.goto('http://demo.guru99.com/test/simple_context_menu.html')

    page.on('dialog', async(dialog)=> { // Acepta las alertas que aparezcan en pantalla

      await dialog.accept()

    }) //#slider
    
    //Click derecho

    await page.click('#authentication > span', { buttom: 'right',delay: 500 })
    await page.waitForTimeout(3000)
    
    //Doble Click
    
    await page.click('#authentication > button', { clickCount: 2, delay: 500 })
    await page.waitForTimeout(3000)

    await page.goto('https://devexpress.github.io/testcafe/example/')
    
    await page.type('#developer-name', 'Julio', {delay: 100})

    await page.click('#remote-testing')
    await page.click('#tried-test-cafe')

    await page.type('#comments', 'Esto es un comentario')
    
    await page.select('#preferred-interface', 'JavaScript API')
    await page.click('#submit-button')
    
    await page.waitForTimeout(3000) 


    await browser.close()

  }, 350000)
})