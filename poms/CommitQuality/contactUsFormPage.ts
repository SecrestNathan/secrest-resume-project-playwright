import { Locator, Page } from "@playwright/test"

export class ContactUsFormPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-contact-form"

    // Initialize Locators
    public readonly nameBox: Locator
    public readonly emailBox: Locator
    public readonly emailBoxErrorMsg: Locator
    public readonly queryTypeDropdown: Locator
    public readonly dateOfBirthPicker: Locator
    public readonly awareCheckbox: Locator
    public readonly submitButton: Locator
    public readonly errorMsg: Locator
    public readonly successMsg: Locator

    constructor(page: Page) {
        this.page = page

        // Construct Locators
        this.nameBox = this.page.getByLabel('Name:')
        this.emailBox = this.page.getByLabel('Email:')
        this.emailBoxErrorMsg = this.page.locator('.form-group .error').filter({ hasText: 'Email' })
        this.queryTypeDropdown = this.page.locator('label', { hasText: 'Query Type:'} )
        this.dateOfBirthPicker = this.page.getByLabel('Date of Birth:')
        this.awareCheckbox = this.page.locator('.form-group').filter({ hasText: 'I am aware that this is a practice website' }).getByRole('checkbox')
        this.errorMsg = this.page.locator('.error')
        this.successMsg = this.page.getByText('Thanks for contacting us, we will never respond!')
        this.submitButton = this.page.locator('role=button', { hasText: 'Submit' })
    }

    // Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions
    public async fillName(name: string) {
        await this.nameBox.fill(name, { force: true })
        await this.page.locator('.App').click()
    }
    public async fillEmail(email: string) {
        await this.emailBox.clear()
        await this.emailBox.fill(email)
        await this.page.locator('.App').click()
    }
    public async selectQueryType(option: string) {
        await this.queryTypeDropdown.selectOption(option)
        await this.page.locator('.App').click()
    }
    public async fillDateOfBirth(date: string) {
        await this.dateOfBirthPicker.fill(date)
        await this.page.locator('.App').click()
    }
    public async checkAwareCheckbox() {
        await this.awareCheckbox.check()
        await this.page.locator('.App').click()
    }
    public async clickSubmit() {
        await this.submitButton.click()
    }
}