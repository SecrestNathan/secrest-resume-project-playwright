import { Page, Locator } from "@playwright/test"

export class PopupPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-random-popup"

    // Locators
    public readonly randomPopup: Locator

    constructor(page: Page) {
        this.page = page

        // Construct Locators
        this.randomPopup = this.page.locator('.overlay-content').filter({ hasText: 'Random Popup' }).getByRole('button')
    }

    // Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions
    public async dismissPopupWhenItAppears() {
        await this.page.addLocatorHandler(
            this.page.getByText('Random Popup'),
            async () => {
                await this.randomPopup.click()
            }
        )
    }
}