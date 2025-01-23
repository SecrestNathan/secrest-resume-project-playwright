import { Page, Locator } from "@playwright/test"

export class AccordionsPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-accordions"

    // Initialize Locators
    public readonly accordionHeader: Locator
    public readonly accordionContent: Locator

    constructor(page: Page) {
        this.page = page

        // Construct Locators
        this.accordionHeader = this.page.locator('role=button', {hasText: `Accordion`})
        this.accordionContent = this.accordionHeader.locator('+ div')
    }

    // Actions - Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions - Exercise: Accordions
    public async clickAccordion(accordion: Locator) {
        accordion.click()
    }

    // Getters - Exercise: Accordions
    public async getAccordionCount() {
        return await this.accordionHeader.count()
    }
}