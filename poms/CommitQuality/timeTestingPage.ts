import { Page, Locator, Clock } from "@playwright/test"

export class TimeTestingPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-clock"

    // Initialize Locators
    public readonly timerEndedMessage: Locator

    constructor(page: Page) {
        this.page = page

        // Construct Locators
        this.timerEndedMessage = this.page.getByText('YOU WON')
    }

    // Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions
    public async clock() {
        return this.page.clock; // Expose Playwright's built-in clock()
    }
}