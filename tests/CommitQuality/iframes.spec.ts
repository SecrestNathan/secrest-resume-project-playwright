import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('iFrames', () => {

  test.beforeEach(async ({ iframesPage }) => {
    await iframesPage.goto()
  })

  test('Filter Table in iFrame and Assert Filter Worked', async ({ iframesPage }) => {
    await iframesPage.filterProducts('Product 1')
    const cellCount = await iframesPage.getResultsCount(iframesPage.productTable_NameColumn_Cells)
    for (let i = 0; i < cellCount; i++) {
      await expect(iframesPage.productTable_NameColumn_Cells.nth(i)).toHaveText('Product 1')
    }
  })
})