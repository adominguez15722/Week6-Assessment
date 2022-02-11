
import { Builder, Capabilities, By } from "selenium-webdriver"
// the above line is the same as const {} = require('')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw button displays the div with id="choices"', async () => {
    const drwBtn = await driver.findElement(By.id('draw'))
    drwBtn.click()
    const choices = await driver.findElement(By.id('choices'))
    const fills = await choices.isDisplayed()
    expect(fills).toBe(true)
})

test('Resetting page should show on page', async () => {
    const losses = await driver.findElement(By.xpath("//*[contains(text(), 'Losses:' )]"))
    
    expect(losses).toBeTruthy()
})