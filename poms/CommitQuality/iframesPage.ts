import { Page, Locator, FrameLocator } from "@playwright/test"

export class IframesPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-iframe"

    // Initialize Locators
    private readonly iframeLocator: FrameLocator
    private readonly filterInput: Locator
    private readonly filterButton: Locator
    public readonly productTable_NameColumn_Cells: Locator

    constructor(page: Page) {
        this.page = page

        // Locators
        this.iframeLocator = this.page.frameLocator('iframe')
        this.filterInput = this.iframeLocator.getByRole('textbox')
        this.filterButton = this.iframeLocator.locator('role=button', { hasText: 'Filter' })
        this.productTable_NameColumn_Cells = this.iframeLocator.locator('table.product-list-table tbody tr td:nth-child(2)')
    }

    // Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions
    public async filterProducts(text: string) {
        await this.filterInput.fill(text)
        await this.filterButton.click()
    }

    // Getters
    public async getResultsCount(rowColumnLocator: Locator) {
        return await rowColumnLocator.count()
    }
}