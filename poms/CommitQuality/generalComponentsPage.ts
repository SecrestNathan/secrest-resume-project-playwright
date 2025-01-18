import { Page, Locator } from "@playwright/test"

export class GeneralComponentsPage {
    private readonly page: Page
    public readonly url = "https://commitquality.com/practice-general-components"

    // Exercise - Buttons
    readonly basicClickButton: Locator
    readonly doubleClickButton: Locator
    readonly rightClickButton: Locator
    readonly buttonsResult: Locator

    // Exercise - Radio Buttons
    readonly radioButton1: Locator
    readonly radioButton2: Locator
    readonly radioButtonsResult: Locator

    // Exercise - Select an Option
    readonly selectDropdown: Locator

    // Exercise - Checkboxes
    readonly checkbox1: Locator
    readonly checkbox2: Locator
    readonly checkbox3: Locator
    readonly checkbox1Result: Locator
    readonly checkbox2Result: Locator
    readonly checkbox3Result: Locator

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
        this.buttonsResult = this.page.locator('.button-container')

        // Exercise - Radio Buttons
        this.radioButton1 = this.page.locator('[data-testid="option1"]')
        this.radioButton2 = this.page.locator('[data-testid="option2"]')
        this.radioButtonsResult = this.page.locator('.radio-buttons-container > .component-container > p')

        // Exercise - Select an Option
        this.selectDropdown = this.page.locator('[data-testid="dropdown"] select')

        // Exercise - Checkboxes
        this.checkbox1 = this.page.locator('[data-testid="checkbox1"]')
        this.checkbox2 = this.page.locator('[data-testid="checkbox2"]')
        this.checkbox3 = this.page.locator('[data-testid="checkbox3"]')
        this.checkbox1Result = this.checkbox1.locator('.. >> p')
        this.checkbox2Result = this.checkbox2.locator('.. >> p')
        this.checkbox3Result = this.checkbox3.locator('.. >> p')

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
    public async checkCheckbox1() {
        await this.checkbox1.check()
    }
    public async uncheckCheckbox1() {
        await this.checkbox1.uncheck()
    }
    public async checkCheckbox2() {
        await this.checkbox2.check()
    }
    public async uncheckCheckbox2() {
        await this.checkbox2.uncheck()
    }
    public async checkCheckbox3() {
        await this.checkbox3.check()
    }
    public async uncheckCheckbox3() {
        await this.checkbox3.uncheck()
    }


    // Exercise - Links


}