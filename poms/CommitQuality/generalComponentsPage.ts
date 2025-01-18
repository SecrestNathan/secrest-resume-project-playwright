import { Page, Locator } from "@playwright/test"

export class GeneralComponentsPage {
    private readonly page: Page
    public readonly url = "https://commitquality.com/practice-general-components"

    // Exercise - Buttons
    readonly basicClickButton: Locator
    readonly doubleClickButton: Locator
    readonly rightClickButton: Locator
    readonly buttonsContainer: Locator

    // Exercise - Radio Buttons
    readonly radioButton1: Locator
    readonly radioButton2: Locator
    readonly radioButtonsContainer: Locator

    // Exercise - Select an Option
    readonly selectDropdown: Locator

    // Exercise - Checkboxes
    readonly checkbox1: Locator
    readonly checkbox2: Locator
    readonly checkbox3: Locator

    // Exercise - Links
    readonly linkMyYouTube: Locator
    readonly linkMyYouTubeNewTab: Locator
    readonly linkPracticePageNewTab: Locator

    constructor(page: Page) {
        this.page = page

        // Exercise - Buttons
        this.basicClickButton = this.page.locator('[data-testid="basic-click"]')
        this.doubleClickButton = this.page.locator('[data-testid="double-click"]')
        this.rightClickButton = this.page.locator('[data-testid="right-click"]')
        this.buttonsContainer = this.page.locator('.button-container')

        // Exercise - Radio Buttons
        this.radioButton1 = this.page.locator('[data-testid="option1"]')
        this.radioButton2 = this.page.locator('[data-testid="option2"]')
        this.radioButtonsContainer = this.page.locator('.radio-buttons-container')

        // Exercise - Select an Option
        this.selectDropdown = this.page.locator('[data-testid="dropdown"] select')

        // Exercise - Checkboxes


        // Exercise - Links
    }

    // Navigate - All
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions - Buttons
    public async clickBasicClickButton() {
        await this.basicClickButton.click()
    }
    public async clickDoubleClickButton() {
        await this.doubleClickButton.dblclick()
    }
    public async clickRightClickButton() {
        await this.rightClickButton.click({ button: 'right' })
    }

    // Actions - Radio Buttons
    public async clickRadioButton1() {
        await this.radioButton1.click()
    }
    public async clickRadioButton2() {
        await this.radioButton2.click()
    }

    // Actions - Select an Option
    public async selectDropdownOption1() {
        await this.selectDropdown.selectOption({value: 'option1'})
    }
    public async selectDropdownOption2() {
        await this.selectDropdown.selectOption({value: 'option2'})
    }
    public async selectDropdownOption3() {
        await this.selectDropdown.selectOption({value: 'option3'})
    }

    // Exercise - Checkboxes


    // Exercise - Links


}