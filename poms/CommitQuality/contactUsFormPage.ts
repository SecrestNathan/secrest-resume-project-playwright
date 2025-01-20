import { Page } from "@playwright/test"

export class ContactUsFormPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-contact-form"

    // Initialize Locators

    constructor(page: Page) {
        this.page = page

        // Construct Locators
    }

    // Actions - Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions - Exercise: Contact Form
}