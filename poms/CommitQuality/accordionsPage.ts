import { Page } from "@playwright/test"

export class AccordionsPage {

    public url = "https://commitquality.com/practice-accordions"

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    public async goto() {
        await this.page.goto(this.url)
    }
}