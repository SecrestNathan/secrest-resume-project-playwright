import { test, expect } from '../fixtures/CommitQuality/base.ts'

test.describe('General Components', () => {

  test('Buttons', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()

    await generalComponentsPage.clickBasicClickButton()
    await expect(generalComponentsPage.buttonsResult).toContainText('Button clicked')

    await generalComponentsPage.clickDoubleClickButton()
    await expect(generalComponentsPage.buttonsResult).toContainText('Button double clicked')

    await generalComponentsPage.clickRightClickButton()
    await expect(generalComponentsPage.buttonsResult).toContainText('Button right mouse clicked')
  });

  test('Radio Buttons', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()
    
    await generalComponentsPage.clickRadioButton1()
    await expect(generalComponentsPage.radioButtonsResult).toHaveText('option1 clicked')

    await generalComponentsPage.clickRadioButton2()
    await expect(generalComponentsPage.radioButtonsResult).toHaveText('option2 clicked')
  });

  test('Select an Option', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()

    await generalComponentsPage.selectDropdownOption1()
    await expect(generalComponentsPage.selectDropdown).toHaveValue('option1')

    await generalComponentsPage.selectDropdownOption2()
    await expect(generalComponentsPage.selectDropdown).toHaveValue('option2')

    await generalComponentsPage.selectDropdownOption3()
    await expect(generalComponentsPage.selectDropdown).toHaveValue('option3')
  });

  test('Checkboxes', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()

    await generalComponentsPage.checkCheckbox1()
    await expect(generalComponentsPage.checkboxResult1).toHaveText('Checkbox 1 checked')

    await generalComponentsPage.checkCheckbox2()
    await expect(generalComponentsPage.checkboxResult2).toHaveText('Checkbox 2 checked')

    await generalComponentsPage.checkCheckbox3()
    await expect(generalComponentsPage.checkboxResult3).toHaveText('Checkbox 3 checked')

    await generalComponentsPage.uncheckCheckbox1()
    await expect(generalComponentsPage.checkboxResult1).not.toBeAttached()

    await generalComponentsPage.uncheckCheckbox2()
    await expect(generalComponentsPage.checkboxResult2).not.toBeAttached()

    await generalComponentsPage.uncheckCheckbox3()
    await expect(generalComponentsPage.checkboxResult3).not.toBeAttached()
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
