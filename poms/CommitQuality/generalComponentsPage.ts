import { Page, Locator } from "@playwright/test"

export class GeneralComponentsPage {

    private readonly page: Page
    public readonly url = "https://commitquality.com/practice-general-components"

    readonly basicClickButton: Locator
    readonly doubleClickButton: Locator
    readonly rightClickButton: Locator
    readonly buttonsContainer: Locator

    constructor(page: Page) {
        this.page = page
        this.basicClickButton = this.page.locator('[data-testid="basic-click"]')
        this.doubleClickButton = this.page.locator('[data-testid="double-click"]')
        this.rightClickButton = this.page.locator('[data-testid="right-click"]')
        this.buttonsContainer = this.page.locator('.button-container')
    }

    // Goto
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions
    public async clickBasicClickButton() {
        await this.basicClickButton.click()
    }
    public async clickDoubleClickButton() {
        await this.doubleClickButton.dblclick()
    }
    public async clickRightClickButton() {
        await this.rightClickButton.click({ button: 'right' })
    }
}