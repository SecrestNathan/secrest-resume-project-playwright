import { Page, Locator } from "@playwright/test"

export class PopupPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-random-popup"

    // Initialize Locators

    constructor(page: Page) {
        this.page = page

        // Construct Locators
    }

    // Actions - Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions - Exercise: Popups
}