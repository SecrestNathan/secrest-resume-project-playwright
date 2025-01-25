import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('Popups', () => {

  test.beforeEach(async ({ popupPage }) => {
    await popupPage.goto()
  })

  test('Popup Dismissal', async ({ popupPage }) => {
    await popupPage.dismissPopupWhenItAppears()
    // Pausing execution for 6 seconds. In a real scenario, you would have multiple tests happening, and
    // as each happens the locator handler in dismissPopup() would check after every action if the popup
    // has shown up, and then dismiss it. This manual wait is just to kill time and pretend some actions are
    // happening. In this particular scenario, where the popup consitently shows up after some seconds, it'd
    // actually be better practice to do something like waiting for the element to be visible and then dismissing
    // it. That way there is no overhead from the locator handler checking after every action if the popup has appeared.
    await new Promise((resolve) => setTimeout(resolve, 6000))
    await expect(popupPage.randomPopup).not.toBeVisible()
  })
}) 