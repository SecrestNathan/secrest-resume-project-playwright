import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('Drag and Drop', () => {

  test.beforeEach(async ({ dragAndDropPage }) => {
    await dragAndDropPage.goto()
  })

  test('Drag Small Box to Large Box', async ({ dragAndDropPage }) => {
    await test.step('Assert Large Box Color Before Drag', async () => {
      await expect(dragAndDropPage.largeBox).toHaveCSS(
        'background-color',
        'rgb(255, 255, 255)')
    })
    await test.step('Perform Drag, Assert Large Box Success Msg and Color Change', async () => {
      await dragAndDropPage.dragSmallBoxToLargeBox()
      await expect(dragAndDropPage.largeBox).toHaveText('Success!')
      await expect(dragAndDropPage.largeBox).toHaveCSS(
        'background-color',
        'rgb(170, 255, 170)'
      )
    })
  })
})