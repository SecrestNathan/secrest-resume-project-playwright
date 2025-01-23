import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('Accordions', () => {

  test.beforeEach(async ({ accordionsPage }) => {
    await accordionsPage.goto()
  })

  test('Automate accordions on the practice page', async ({ accordionsPage }) => {
    await test.step('Initial State', async () => {
      await expect(accordionsPage.accordionContent).not.toBeVisible()
    })
    await test.step('Initial State', async () => {
      const accordionsCount = await accordionsPage.getAccordionCount()
      for (let i = 0; i < accordionsCount; i++) {
        await accordionsPage.clickAccordion(accordionsPage.accordionHeader.nth(i));
        await expect(accordionsPage.accordionContent.nth(i)).toBeVisible()
      }
    })
  });
})