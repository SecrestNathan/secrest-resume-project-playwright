import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('Contact Us', () => {

  test.beforeEach(async ({ contactUsFormPage }) => {
    await contactUsFormPage.goto()
  })

  test('Contact Form', async ({ contactUsFormPage }) => {
    await test.step('Unsuccessfully Submit', async () => {
      await contactUsFormPage.clickSubmit()
      await expect(contactUsFormPage.errorMsg).toHaveCount(5)
      await expect(contactUsFormPage.successMsg).not.toBeVisible()
    })
    await test.step('Fill Name', async () => {
      await contactUsFormPage.fillName(process.env.COMMITQUALITY_CONTACTUSFORM_NAME)
      await expect(contactUsFormPage.nameBox).toHaveValue(process.env.COMMITQUALITY_CONTACTUSFORM_NAME)
    })
    await test.step('Fill Invalid Email & Valid Email', async () => {
      await contactUsFormPage.fillEmail(process.env.COMMITQUALITY_CONTACTUSFORM_EMAIL_INCORRECT)
      await expect(contactUsFormPage.emailBoxErrorMsg).toContainText('Email is invalid')

      await contactUsFormPage.fillEmail(process.env.COMMITQUALITY_CONTACTUSFORM_EMAIL)
      await expect(contactUsFormPage.emailBox).toHaveValue(process.env.COMMITQUALITY_CONTACTUSFORM_EMAIL)
    })
    await test.step('Select Dropdown Options', async () => {
      await contactUsFormPage.selectQueryType('General')
      await expect(contactUsFormPage.queryTypeDropdown).toHaveValue('General')
      await contactUsFormPage.selectQueryType('Technical')
      await expect(contactUsFormPage.queryTypeDropdown).toHaveValue('Technical')
      await contactUsFormPage.selectQueryType('Billing')
      await expect(contactUsFormPage.queryTypeDropdown).toHaveValue('Billing')
    })
    await test.step('Fill Date of Birth', async () => {
      await contactUsFormPage.fillDateOfBirth(process.env.COMMITQUALITY_CONTACTUSFORM_DOB)
      await expect(contactUsFormPage.dateOfBirthPicker).toHaveValue(process.env.COMMITQUALITY_CONTACTUSFORM_DOB)
    })
    await test.step('Check Awareness Checkbox', async () => {
      await contactUsFormPage.checkAwareCheckbox()
      await expect(contactUsFormPage.awareCheckbox).toBeChecked()
    })
    await test.step('Successfully Submit', async () => {
      await contactUsFormPage.clickSubmit()
    })
  })
})