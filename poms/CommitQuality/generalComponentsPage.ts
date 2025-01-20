import { Page, Locator } from "@playwright/test"
import { expect } from '../../fixtures/CommitQuality/base.ts'

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
    readonly checkboxContainer1: Locator
    readonly checkboxContainer2: Locator
    readonly checkboxContainer3: Locator
    readonly checkboxesContainer: Locator

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
        this.buttonsContainer = this.page.locator('.buttons-container')

        // Exercise - Radio Buttons
        this.radioButton1 = this.page.locator('[data-testid="option1"]')
        this.radioButton2 = this.page.locator('[data-testid="option2"]')
        this.radioButtonsContainer = this.page.locator('.radio-buttons-container')

        // Exercise - Select an Option
        this.selectDropdown = this.page.locator('[data-testid="dropdown"] select')

        // Exercise - Checkboxes
        this.checkbox1 = this.page.locator('[data-testid="checkbox1"]')
        this.checkbox2 = this.page.locator('[data-testid="checkbox2"]')
        this.checkbox3 = this.page.locator('[data-testid="checkbox3"]')
        this.checkboxContainer1 = this.checkbox1.locator('..')
        this.checkboxContainer2 = this.checkbox2.locator('..')
        this.checkboxContainer3 = this.checkbox3.locator('..')
        this.checkboxesContainer = this.page.locator('.checkbox-container.container-outline')

        // Exercise - Links
        this.linkMyYouTube = this.page.locator('[data-testid="link-same-tab"]')
        this.linkMyYouTubeNewTab = this.page.locator('[data-testid="link-newtab"]')
        this.linkPracticePageNewTab = this.page.locator('[data-testid="link-newtab-practice"]')
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
    public async checkRadioButton(radioButton: Locator) {
        await radioButton.check()
    }

    // Actions - Select an Option
    public async selectDropdownOption(option: string) {
        await this.selectDropdown.selectOption({ value: `option${option}` })
    }

    // Exercise - Checkboxes
    public async checkCheckbox(checkbox: Locator) {
        await checkbox.check();
    }
    public async uncheckCheckbox(checkbox: Locator) {
        await checkbox.uncheck();
    }

    // Exercise - Links
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