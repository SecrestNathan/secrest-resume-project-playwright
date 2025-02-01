import { Page, Locator } from "@playwright/test"

export class DragAndDropPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-drag-and-drop"

    // Initialize Locators
    public readonly smallBox: Locator
    public readonly largeBox: Locator

    constructor(page: Page) {
        this.page = page

        // Construct Locators
        this.smallBox = this.page.getByTestId('small-box')
        this.largeBox = this.page.getByTestId('large-box')
    }

    // Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions
    public async dragSmallBoxToLargeBox() {
        await this.smallBox.dragTo(this.largeBox)
    }
}