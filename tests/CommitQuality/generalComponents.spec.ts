import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('General Components', () => {

  test('Buttons', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()

    await expect(generalComponentsPage.buttonsContainer).not.toContainText('clicked')

    await generalComponentsPage.clickBasicClickButton()
    await expect(generalComponentsPage.buttonsContainer).toContainText('Button clicked')

    await generalComponentsPage.clickDoubleClickButton()
    await expect(generalComponentsPage.buttonsContainer).toContainText('Button double clicked')

    await generalComponentsPage.clickRightClickButton()
    await expect(generalComponentsPage.buttonsContainer).toContainText('Button right mouse clicked')
  });

  test('Radio Buttons', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()
    
    await expect(generalComponentsPage.radioButton1).not.toBeChecked()
    await expect(generalComponentsPage.radioButton2).not.toBeChecked()
    await expect(generalComponentsPage.radioButtonsContainer).not.toContainText('clicked')

    await generalComponentsPage.clickRadioButton1()
    await expect(generalComponentsPage.radioButton1).toBeChecked()
    await expect(generalComponentsPage.radioButton2).not.toBeChecked()
    await expect(generalComponentsPage.radioButtonsContainer).toContainText('option1 clicked')
    await expect(generalComponentsPage.radioButtonsContainer).not.toContainText('option2 clicked')

    await generalComponentsPage.clickRadioButton2()
    await expect(generalComponentsPage.radioButton1).not.toBeChecked()
    await expect(generalComponentsPage.radioButton2).toBeChecked()
    await expect(generalComponentsPage.radioButtonsContainer).not.toContainText('option1 clicked')
    await expect(generalComponentsPage.radioButtonsContainer).toContainText('option2 clicked')
  });

  test('Select Dropdown', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()

    await expect(generalComponentsPage.selectDropdown).toHaveValue('')
    await expect(generalComponentsPage.selectDropdown).toContainText('Select an option')

    await generalComponentsPage.selectDropdownOption1()
    await expect(generalComponentsPage.selectDropdown).toHaveValue('option1')
    await expect(generalComponentsPage.selectDropdown).toContainText('Option 1')

    await generalComponentsPage.selectDropdownOption2()
    await expect(generalComponentsPage.selectDropdown).toHaveValue('option2')
    await expect(generalComponentsPage.selectDropdown).toContainText('Option 2')

    await generalComponentsPage.selectDropdownOption3()
    await expect(generalComponentsPage.selectDropdown).toHaveValue('option3')
    await expect(generalComponentsPage.selectDropdown).toContainText('Option 3')
  });

  test('Checkboxes', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()

    await generalComponentsPage.checkCheckbox1()
    await expect(generalComponentsPage.checkboxContainer1).toContainText('Checkbox 1 checked')

    await generalComponentsPage.checkCheckbox2()
    await expect(generalComponentsPage.checkboxContainer2).toContainText('Checkbox 2 checked')

    await generalComponentsPage.checkCheckbox3()
    await expect(generalComponentsPage.checkboxContainer3).toContainText('Checkbox 3 checked')

    await generalComponentsPage.uncheckCheckbox1()
    await expect(generalComponentsPage.checkboxContainer1).not.toContainText('Checkbox 1 checked')

    await generalComponentsPage.uncheckCheckbox2()
    await expect(generalComponentsPage.checkboxContainer2).not.toContainText('Checkbox 2 checked')

    await generalComponentsPage.uncheckCheckbox3()
    await expect(generalComponentsPage.checkboxContainer3).not.toContainText('Checkbox 3 checked')
  });

  test('Links', async ({ page, generalComponentsPage }) => {
    await generalComponentsPage.goto()

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
