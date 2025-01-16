import { test, expect } from '../fixtures/CommitQuality/base.ts'

test('get started link', async ({ generalComponentsPage }) => {

  await generalComponentsPage.goto()

  await generalComponentsPage.clickBasicClickButton()
  await expect(generalComponentsPage.buttonsContainer).toContainText('Button clicked')

  await generalComponentsPage.clickDoubleClickButton()
  await expect(generalComponentsPage.buttonsContainer).toContainText('Button double clicked')

  await generalComponentsPage.clickRightClickButton()
  await expect(generalComponentsPage.buttonsContainer).toContainText('Button right mouse clicked')
});
