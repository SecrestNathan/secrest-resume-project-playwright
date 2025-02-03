import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('Timer Test', () => {

  test.beforeEach(async ({ timeTestingPage }) => {
    await timeTestingPage.goto()
  })

  test('Check Whether Clock Countdown Triggers Winner Message', async ({ timeTestingPage }) => {
    const clock = await timeTestingPage.clock()
    await clock.install()
    await expect(timeTestingPage.timerEndedMessage).not.toBeVisible()
    await clock.fastForward('05:00')
    await expect(timeTestingPage.timerEndedMessage).toBeVisible()
    await expect(timeTestingPage.timerEndedMessage).toContainText('YOU WON')
  })
})