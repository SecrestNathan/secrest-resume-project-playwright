import { Page, Locator } from "@playwright/test"

export class DynamicTextPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-dyanmic-text"

    // Initialize Locators
    public readonly dynamicButton: Locator

    constructor(page: Page) {
        this.page = page

        // Construct Locators
        this.dynamicButton = this.page.locator('.dynamic-data-container').getByRole('button')
    }

    // Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions
    public async clickDynamicButton() {
        await this.dynamicButton.click()
    }
}