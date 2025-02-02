import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('Dynamic Text', () => {

  test.beforeEach(async ({ dynamicTextPage }) => {
    await dynamicTextPage.goto()
  })

  test('Click Button With Dynamic Text Changes', async ({ dynamicTextPage }) => {
    await test.step('Assert Text Before Clicking', async () => {
      await expect(dynamicTextPage.dynamicButton).toHaveText('Always visible')
    })
    await test.step('Assert Text After Clicking', async () => {
      await dynamicTextPage.clickDynamicButton()
      await expect(dynamicTextPage.dynamicButton).toHaveText('loading')
      await expect(dynamicTextPage.dynamicButton).toHaveText('I am visible after 5 seconds', { timeout: 6000 })
      await expect(dynamicTextPage.dynamicButton).not.toHaveText('loading')
    })
  })
})