const { test, describe, expect } = require('@playwright/test')

describe('Navigate', () => {
  test('navigates to to ivysaur', async ({ page }) => {
    await page.goto('')
    await page.click('text="ivysaur"')

    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
