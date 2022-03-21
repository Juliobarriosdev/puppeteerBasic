const puppeteer = require('puppeteer') 

const { click, doubleClick, type } = require('../lib/helpers')

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
    
    await doubleClick(page, '#authentication > button')
    await page.waitForTimeout(3000)

    await page.goto('https://devexpress.github.io/testcafe/example/')
    
    await type(page, '#developer-name', 'Julio', {delay: 100})

    await click(page, '#remote-testing')
    await click(page, '#tried-test-cafe')

    await type(page ,'#comments', 'Esto es un comentario', {delay: 100})
    
    await page.select('#preferred-interface', 'JavaScript API')
    await click(page, '#submit-button')
    
    await page.waitForTimeout(3000) 


    await browser.close()

  }, 350000)
})