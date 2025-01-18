import { test, expect } from '../fixtures/CommitQuality/base.ts'

test.describe('General Components', () => {

  test('Buttons', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()

    await generalComponentsPage.clickBasicClickButton()
    await expect(generalComponentsPage.buttonsContainer).toContainText('Button clicked')

    await generalComponentsPage.clickDoubleClickButton()
    await expect(generalComponentsPage.buttonsContainer).toContainText('Button double clicked')

    await generalComponentsPage.clickRightClickButton()
    await expect(generalComponentsPage.buttonsContainer).toContainText('Button right mouse clicked')
  });

  test('Radio Buttons', async ({ generalComponentsPage }) => {
    await generalComponentsPage.goto()
    
    await generalComponentsPage.clickRadioButton1()
    await expect(generalComponentsPage.radioButtonsContainer).toContainText('option1 clicked')

    await generalComponentsPage.clickRadioButton2()
    await expect(generalComponentsPage.radioButtonsContainer).toContainText('option2 clicked')
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

  // test('Checkboxes', async ({ generalComponentsPage }) => {
  //   await generalComponentsPage.goto()

  //   await generalComponentsPage.clickBasicClickButton()
  //   await expect(generalComponentsPage.buttonsContainer).toContainText('Button clicked')

  //   await generalComponentsPage.clickDoubleClickButton()
  //   await expect(generalComponentsPage.buttonsContainer).toContainText('Button double clicked')

  //   await generalComponentsPage.clickRightClickButton()
  //   await expect(generalComponentsPage.buttonsContainer).toContainText('Button right mouse clicked')
  // });

  // test('Links', async ({ generalComponentsPage }) => {
  //   await generalComponentsPage.goto()

  //   await generalComponentsPage.clickBasicClickButton()
  //   await expect(generalComponentsPage.buttonsContainer).toContainText('Button clicked')

  //   await generalComponentsPage.clickDoubleClickButton()
  //   await expect(generalComponentsPage.buttonsContainer).toContainText('Button double clicked')

  //   await generalComponentsPage.clickRightClickButton()
  //   await expect(generalComponentsPage.buttonsContainer).toContainText('Button right mouse clicked')
  // });
  
})
