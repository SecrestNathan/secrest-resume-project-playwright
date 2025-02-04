import { test, expect } from '../../fixtures/CommitQuality/base.ts'

test.describe('File Upload', () => {

  test.beforeEach(async ({ fileUploadPage }) => {
    await fileUploadPage.goto()
  })

  test('Assert File Uploads Successfully', async ({ page, fileUploadPage }) => {
    await fileUploadPage.uploadFile('fixtures/CommitQuality/fileUploadSpec.txt')
    await expect(fileUploadPage.fileUploadInput).toHaveValue('C:\\fakepath\\fileUploadSpec.txt')
    page.once('dialog', (dialog) => {
      dialog.accept()
    })
    await fileUploadPage.clickSubmit()
  })
})