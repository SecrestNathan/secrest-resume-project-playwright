import { Page, Locator } from "@playwright/test"

export class GeneralComponentsPage {
    private readonly page: Page

    // URLs
    public readonly url = "https://commitquality.com/practice-general-components"

    // Initialize Locators - Exercise: Buttons
    public readonly basicClickButton: Locator
    public readonly doubleClickButton: Locator
    public readonly rightClickButton: Locator
    public readonly buttonsContainer: Locator

    // Initialize Locators - Exercise: Radio Buttons
    //public readonly radioButton: (index: number) => Locator
    public readonly radioButton1: Locator
    public readonly radioButton2: Locator
    public readonly radioButtonsContainer: Locator

    // Initialize Locators - Exercise: Select an Option
    public readonly selectDropdown: Locator

    // Initialize Locators - Exercise: Checkboxes
    public readonly checkbox: (index: number) => Locator
    public readonly checkboxContainer: (index: number) => Locator
    public readonly checkboxesContainer: Locator

    // Initialize Locators - Exercise: Links
    public readonly linkMyYouTube: Locator
    public readonly linkMyYouTubeNewTab: Locator
    public readonly linkPracticePageNewTab: Locator

    constructor(page: Page) {
        this.page = page

        // Construct Locators - Exercise: Buttons
        this.basicClickButton = this.page.getByRole('button', { name: 'Click me', exact: true })
        this.doubleClickButton = this.page.getByRole('button', { name: 'Double click me', exact: true })
        this.rightClickButton = this.page.getByRole('button', { name: 'Right click me', exact: true })
        this.buttonsContainer = this.page.locator('.buttons-container')

        // Construct Locators - Exercise: Radio Buttons
        this.radioButtonsContainer = this.page.locator('.radio-buttons-container')
        // The commented line below is my desired implementation had the site author not misnamed classes here
        // this.radioButton = this.page.locator('.radio-button-container').filter({ hasText: `Radio button ${index}` }).getByRole('radio')
        this.radioButton1 = this.page.locator('.radio-button-container').getByRole('radio')
        this.radioButton2 = this.page.locator('.radio-container').getByRole('radio')
        
        // Construct Locators - Exercise: Select an Option
        this.selectDropdown = this.page.locator('.dropdown-container').getByRole('combobox')

        // Construct Locators - Exercise: Checkboxes
        this.checkboxesContainer = this.page.locator('.checkbox-container.container-outline')
        this.checkboxContainer = (index: number) => this.checkboxesContainer.locator('.checkbox-container').filter({ hasText: `Checkbox ${index}` })
        this.checkbox = (index: number) => this.checkboxesContainer.locator('.checkbox-container').filter({ hasText: `Checkbox ${index}` }).getByRole('checkbox')

        // Construct Locators - Exercise: Links
        this.linkMyYouTube = this.page.locator('[data-testid="link-same-tab"]')
        this.linkMyYouTubeNewTab = this.page.locator('[data-testid="link-newtab"]')
        this.linkPracticePageNewTab = this.page.locator('[data-testid="link-newtab-practice"]')
    }

    // Actions - Navigation
    public async goto() {
        await this.page.goto(this.url)
    }

    // Actions - Exercise: Buttons
    public async clickBasicClickButton() {
        await this.basicClickButton.click()
    }
    public async clickDoubleClickButton() {
        await this.doubleClickButton.dblclick()
    }
    public async clickRightClickButton() {
        await this.rightClickButton.click({ button: 'right' })
    }

    // Actions - Exercise: Radio Buttons
    public async checkRadioButton(radioButton: Locator) {
        await radioButton.check()
    }

    // Actions - Exercise: Select an Option
    public async selectDropdownOption(option: number) {
        await this.selectDropdown.selectOption({ value: `option${option}` })
    }

    // Actions - Exercise: Checkboxes
    public async checkCheckbox(checkbox: Locator) {
        await checkbox.check()
    }
    public async uncheckCheckbox(checkbox: Locator) {
        await checkbox.uncheck()
    }

    // Actions - Exercise: Links
    public async clickMyYouTubeLink() {
        await this.linkMyYouTube.click()
        await this.page.waitForLoadState()
    }
    public async clickMyYouTubeNewTabLink() {
        const [newTab] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.linkMyYouTubeNewTab.click()
        ])
        await newTab.waitForLoadState()
        return newTab
    }
    public async clickPracticePageNewTabLink() {
        const [newTab] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.linkPracticePageNewTab.click()
        ])
        await newTab.waitForLoadState()
        return newTab
    }

}