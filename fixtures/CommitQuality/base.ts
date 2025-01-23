import { test as base } from "@playwright/test"
import { GeneralComponentsPage } from "../../poms/CommitQuality/generalComponentsPage.ts"
import { AccordionsPage } from "../../poms/CommitQuality/accordionsPage.ts"
import { PopupPage } from "../../poms/CommitQuality/popupsPage.ts"
import { IframesPage } from "../../poms/CommitQuality/iframesPage.ts"
import { ApisPage } from "../../poms/CommitQuality/apisPage.ts"
import { DynamicTextPage } from "../../poms/CommitQuality/dynamicTextPage.ts"
import { FileUploadPage } from "../../poms/CommitQuality/fileUploadPage.ts"
import { DragAndDropPage } from "../../poms/CommitQuality/dragAndDropPage.ts"
import { ContactUsFormPage } from "../../poms/CommitQuality/contactUsFormPage.ts"
import { MockDataLayerPage } from "../../poms/CommitQuality/mockDataLayerPage.ts"
import { TimeTestingPage } from "../../poms/CommitQuality/timeTestingPage.ts"

type myFixtures = {
    generalComponentsPage: GeneralComponentsPage
    accordionsPage: AccordionsPage
    popupPage: PopupPage
    iframesPage: IframesPage
    apisPage: ApisPage
    dynamicTextPage: DynamicTextPage
    fileUploadPage: FileUploadPage
    dragAndDropPage: DragAndDropPage
    contactUsFormPage: ContactUsFormPage
    mockDataLayerPage: MockDataLayerPage
    timeTestingPage: TimeTestingPage
}

export const test = base.extend<myFixtures>({
    generalComponentsPage: async ({ page }, use) => {
        await use(new GeneralComponentsPage(page))
    },
    accordionsPage: async ({ page }, use) => {
        await use(new AccordionsPage(page))
    },
    popupPage: async ({ page }, use) => {
        await use(new PopupPage(page))
    },
    iframesPage: async ({ page }, use) => {
        await use(new IframesPage(page))
    },
    apisPage: async ({ page }, use) => {
        await use(new ApisPage(page))
    },
    dynamicTextPage: async ({ page }, use) => {
        await use(new DynamicTextPage(page))
    },
    fileUploadPage: async ({ page }, use) => {
        await use(new FileUploadPage(page))
    },
    dragAndDropPage: async ({ page }, use) => {
        await use(new DragAndDropPage(page))
    },
    contactUsFormPage: async ({ page }, use) => {
        await use(new ContactUsFormPage(page))
    },
    mockDataLayerPage: async ({ page }, use) => {
        await use(new MockDataLayerPage(page))
    },
    timeTestingPage: async ({ page }, use) => {
        await use(new TimeTestingPage(page))
    }
})

export { expect } from '@playwright/test'