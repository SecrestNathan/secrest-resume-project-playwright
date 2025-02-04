import { Page, Locator } from "@playwright/test"

export class FileUploadPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-file-upload"

    // Initialize Locators
    public readonly fileUploadInput: Locator
    public readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page

        // Construct Locators
        this.fileUploadInput = this.page.locator('.file-upload input[type="file"]')
        this.submitButton = this.page.locator('role=button', { hasText: 'Submit' })
    }

    // Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions
    public async uploadFile(filePath: string) {
        await this.fileUploadInput.setInputFiles(filePath)
    }
    public async clickSubmit() {
        await this.submitButton.click()
    }
}