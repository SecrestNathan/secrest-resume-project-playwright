import { Page } from "@playwright/test"

export class ApisPage {

    public url = "https://commitquality.com/practice"

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    // Goto
    public async goto() {
        await this.page.goto(this.url)
    }

    // Locators

    // Actions
}