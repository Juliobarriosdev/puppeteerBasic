module.exports = {

  //Hacer un click

  click: async function(page, selector, opt={}){
    try{ 
      await page.waitForSelector(selector)
      await page.click(selector, opt)

    }catch (e) {
      throw new Error(`Error al dar click en el selector: ${selector}`)
    }
  },

  //Hacer doble click

  doubleClick: async function(page, selector){
    try{
      await page.waitForSelector(selector)
      await page.click(selector, {clickCount: 2})

    }catch (e) {
      throw new Error(`Error al dar doble click en el selector: ${selector}`)
    }
  },

  //Extraer el texto de un elemento

  getText: async function(page, selector){
    try{
      await page.waitForSelector(selector)
      return await page.$eval(selector, (elemento) => elemento.textContent)

    }catch (e) {
      throw new Error(`Error al obtener el texto en el selector: ${selector}`)
    }
  },

  //Escribir en inputs

  type: async function(page, selector, text, opts={}){
    try{
      await page.waitForSelector(selector)
      await page.type(selector, text, opts)

    }catch (e) {
      throw new Error(`Error al escribir en el selector: ${selector}`)
    }
  },

  //Contar elementos

  getCount: async function(page, selector){
    try{
      await page.waitForSelector(selector)
      return await page.$$eval(selector,(elementos) => elementos.length)
      

    }catch (e) {
      throw new Error(`Error al escribir en el selector: ${selector}`)
    }
  }
}