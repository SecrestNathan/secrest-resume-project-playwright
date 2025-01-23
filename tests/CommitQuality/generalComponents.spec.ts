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
      await generalComponentsPage.clickBasicClickButton(generalComponentsPage.basicClickButton)
      await expect(generalComponentsPage.buttonsContainer).toContainText('Button clicked')
    })
    await test.step('Click Double-Click Button', async () => {
      await generalComponentsPage.clickDoubleClickButton(generalComponentsPage.doubleClickButton)
      await expect(generalComponentsPage.buttonsContainer).toContainText('Button double clicked')
    })
    await test.step('Click Right-Click Button', async () => {
      await generalComponentsPage.clickRightClickButton(generalComponentsPage.rightClickButton)
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
      await expect(generalComponentsPage.radioButtonsContainer).toContainText(`option1 clicked`)
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
    for (let i = 1; i <= 3; i++) {
      await test.step(`Select Option ${i}`, async () => {
        await generalComponentsPage.selectDropdownOption(i)
        await expect(generalComponentsPage.selectDropdown).toHaveValue(`option${i}`)
        await expect(generalComponentsPage.selectDropdown).toContainText(`Option ${i}`)
      })
    }
  });

  test('Checkboxes', async ({ generalComponentsPage }) => {
    await test.step('Initial State', async () => {
      await expect(generalComponentsPage.checkboxesContainer).not.toContainText('checked')
      await expect(generalComponentsPage.checkbox(1)).not.toBeChecked()
      await expect(generalComponentsPage.checkbox(2)).not.toBeChecked()
      await expect(generalComponentsPage.checkbox(3)).not.toBeChecked()
    })
    for (let i = 1; i <= 3; i++) {
      await test.step(`Check and Uncheck Checkbox ${i}`, async () => {
        // Check
        await generalComponentsPage.checkCheckbox(generalComponentsPage.checkbox(i))
        await expect(generalComponentsPage.checkbox(i)).toBeChecked()
        await expect(generalComponentsPage.checkboxContainer(i)).toContainText(`Checkbox ${i} checked`)

        // Uncheck
        await generalComponentsPage.uncheckCheckbox(generalComponentsPage.checkbox(i))
        await expect(generalComponentsPage.checkbox(i)).not.toBeChecked()
        await expect(generalComponentsPage.checkboxContainer(i)).not.toContainText(`Checkbox ${i} checked`)
      });
    }
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
