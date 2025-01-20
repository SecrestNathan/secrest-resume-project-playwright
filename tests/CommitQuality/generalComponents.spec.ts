import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('General Components', () => {

  test.beforeEach(async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()
  })

  test('Buttons', async ({ generalComponentsPage }) => {
    await test.step('Initial State', async () => {
      await expect(generalComponentsPage.buttonsContainer).not.toContainText('clicked')
    })

    await test.step('Click Left-Click Button', async () => {
      await generalComponentsPage.clickBasicClickButton()
      await expect(generalComponentsPage.buttonsContainer).toContainText('Button clicked')
    })

    await test.step('Click Double-Click Button', async () => {
      await generalComponentsPage.clickDoubleClickButton()
      await expect(generalComponentsPage.buttonsContainer).toContainText('Button double clicked')
    })

    await test.step('Click Right-Click Button', async () => {
      await generalComponentsPage.clickRightClickButton()
      await expect(generalComponentsPage.buttonsContainer).toContainText('Button right mouse clicked')
    })
  });

  test('Radio Buttons', async ({ generalComponentsPage }) => {
    await test.step('Initial State', async () => {
      await expect(generalComponentsPage.radioButton1).not.toBeChecked()
      await expect(generalComponentsPage.radioButton2).not.toBeChecked()
      await expect(generalComponentsPage.radioButtonsContainer).not.toContainText('clicked')
    })

    await test.step('Check Option 1', async () => {
      await generalComponentsPage.checkRadioButton(generalComponentsPage.radioButton1)
      await expect(generalComponentsPage.radioButton1).toBeChecked()
      await expect(generalComponentsPage.radioButton2).not.toBeChecked()
      await expect(generalComponentsPage.radioButtonsContainer).toContainText('option1 clicked')
      await expect(generalComponentsPage.radioButtonsContainer).not.toContainText('option2 clicked')
    })

    await test.step('Check Option 2', async () => {
      await generalComponentsPage.checkRadioButton(generalComponentsPage.radioButton2)
      await expect(generalComponentsPage.radioButton1).not.toBeChecked()
      await expect(generalComponentsPage.radioButton2).toBeChecked()
      await expect(generalComponentsPage.radioButtonsContainer).not.toContainText('option1 clicked')
      await expect(generalComponentsPage.radioButtonsContainer).toContainText('option2 clicked')
    })
  });

  test('Select Dropdown', async ({ generalComponentsPage }) => {
    await test.step('Initial State', async () => {
      await expect(generalComponentsPage.selectDropdown).toHaveValue('')
      await expect(generalComponentsPage.selectDropdown).toContainText('Select an option')
    })
    
    await test.step('Select Option 1', async () => {
      await generalComponentsPage.selectDropdownOption('1')
      await expect(generalComponentsPage.selectDropdown).toHaveValue('option1')
      await expect(generalComponentsPage.selectDropdown).toContainText('Option 1')
    })

    await test.step('Select Option 2', async () => {
      await generalComponentsPage.selectDropdownOption('2')
      await expect(generalComponentsPage.selectDropdown).toHaveValue('option2')
      await expect(generalComponentsPage.selectDropdown).toContainText('Option 2')
    })

    await test.step('Select Option 3', async () => {
      await generalComponentsPage.selectDropdownOption('3')
      await expect(generalComponentsPage.selectDropdown).toHaveValue('option3')
      await expect(generalComponentsPage.selectDropdown).toContainText('Option 3')
    })
  });

  test('Checkboxes', async ({ generalComponentsPage }) => {
    
    await test.step('Initial State', async () => {
      await expect(generalComponentsPage.checkboxesContainer).not.toContainText('checked')
      await expect(generalComponentsPage.checkbox1).not.toBeChecked()
      await expect(generalComponentsPage.checkbox2).not.toBeChecked()
      await expect(generalComponentsPage.checkbox3).not.toBeChecked()
    })

    await test.step('Check and Uncheck Checkbox 1', async () => {
      await generalComponentsPage.checkCheckbox(generalComponentsPage.checkbox1);
      await expect(generalComponentsPage.checkbox1).toBeChecked()
      await expect(generalComponentsPage.checkboxContainer1).toContainText('Checkbox 1 checked')

      await generalComponentsPage.uncheckCheckbox(generalComponentsPage.checkbox1);
      await expect(generalComponentsPage.checkbox1).not.toBeChecked()
      await expect(generalComponentsPage.checkboxContainer1).not.toContainText('Checkbox 1 checked')
    })

    await test.step('Check and Uncheck Checkbox 2', async () => {
      await generalComponentsPage.checkCheckbox(generalComponentsPage.checkbox2);
      await expect(generalComponentsPage.checkbox2).toBeChecked()
      await expect(generalComponentsPage.checkboxContainer2).toContainText('Checkbox 2 checked')

      await generalComponentsPage.uncheckCheckbox(generalComponentsPage.checkbox2);
      await expect(generalComponentsPage.checkbox2).not.toBeChecked()
      await expect(generalComponentsPage.checkboxContainer2).not.toContainText('Checkbox 2 checked')
    })
    
    await test.step('Check and Uncheck Checkbox 3', async () => {
      await generalComponentsPage.checkCheckbox(generalComponentsPage.checkbox3);
      await expect(generalComponentsPage.checkbox3).toBeChecked()
      await expect(generalComponentsPage.checkboxContainer3).toContainText('Checkbox 3 checked')

      await generalComponentsPage.uncheckCheckbox(generalComponentsPage.checkbox3);
      await expect(generalComponentsPage.checkbox3).not.toBeChecked()
      await expect(generalComponentsPage.checkboxContainer3).not.toContainText('Checkbox 3 checked')
    })
  });

  test('Links', async ({ page, generalComponentsPage }) => {
    await test.step('Click YouTube Link that Stays in Current Tab', async () => {
      await generalComponentsPage.clickMyYouTubeLink()
      await expect(page).toHaveURL('https://www.youtube.com/@commitquality')
      await page.goBack()
      await page.waitForURL('https://commitquality.com/practice-general-components')
    })

    await test.step('Click YouTube Link that Opens a New Tab', async () => {
      const newTab = await generalComponentsPage.clickMyYouTubeNewTabLink()
      await expect(newTab).toHaveURL('https://www.youtube.com/@commitquality')
      await newTab.close()
      await page.waitForURL('https://commitquality.com/practice-general-components')
    })
    
    await test.step('Click Commit Quality Practice Page Link that Opens a New Tab', async () => {
      const newTab = await generalComponentsPage.clickPracticePageNewTabLink()
      await expect(newTab).toHaveURL('https://commitquality.com/practice')
      await newTab.close()
      await page.waitForURL('https://commitquality.com/practice-general-components')
    })
  });
  
})
