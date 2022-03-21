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

    // page = await browser.newPage()
    const context = await browser.createIncognitoBrowserContext() //Modo incognito
    page = await context.newPage()
    await page.goto('https://platzi.com', { waitUntil: 'networkidle0' }) 

  }, 300000)
  // afterEach Despues de cada una
  afterAll(async () => { // Despues de todas

    await browser.close()

  }, 300000)

  test('Emulando dispositivos de forma manual', async () => {
    
    await page.emulate({
      name:'Mi dispositivo',
      viewport: {
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        isLandscape: false
      },
      userAgent: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+'
    })

    await page.waitForTimeout(3000)

  }, 350000)

  test('Emulando sitio de escritorio', async () => {

    await page.setViewport({
      width: 1280,
      height: 800,
    })

    await page.waitForTimeout(3000)

  }, 350000)

  test('Emulando sitio en una tablet', async () => {

    const tablet = puppeteer.devices['iPad Pro']
    await page.emulate(tablet)

    await page.waitForTimeout(3000)

  }, 350000)

  test('Emulando sitio en una tablet en modo landscape', async () => {

    const tablet = puppeteer.devices['iPad landscape']
    await page.emulate(tablet)

    await page.waitForTimeout(3000)

  }, 350000)
 
  test('Emulando sitio en una telefono', async () => {

    const telefono = puppeteer.devices['iPhone X']
    await page.emulate(telefono)

    await page.waitForTimeout(3000)

  }, 350000)
})