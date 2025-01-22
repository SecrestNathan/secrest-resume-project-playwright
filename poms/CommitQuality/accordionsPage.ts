import { Page, Locator } from "@playwright/test"

export class AccordionsPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-accordions"

    // Initialize Locators
    public readonly accordionHeader: string
    public readonly accordionContent: Locator

    constructor(page: Page) {
        this.page = page

        // Construct Locators
        this.accordionHeader = '[data-testid="accordion-"]'
        this.accordionContent = this.page.locator('')
    }

    // Actions - Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions - Exercise: Accordions
}