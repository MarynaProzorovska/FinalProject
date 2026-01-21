import { expect } from "playwright/test";
import { test } from "../fixtures/fixtures";

test("First test", async ({filters, homePage, headerElements, quickViewBlock, productPage, searchResultsPage, cartPage, successfulMessage}) => {
 await headerElements.navigateToClothesPage();


  //   await headerElements.searchByText("Mountain fox notebook")
//   await homePage.locators.getBaseCardLocator("Mountain fox notebook").click()
//   // await homePage.quickViewOfTheProduct("Mug The best is yet to come")
//   // await quickViewBlock.addToCart("2")
//   await expect(productPage.locators.productTitle).toHaveText("Mountain fox notebook")
//   await productPage.addToCart("Doted", "1")
// await successfulMessage.proceedToCheckoutClick()
// const product = cartPage.locators.getBaseCartItemLocator("Mountain fox notebook")
// await expect(product).toBeVisible()



// await cartPage.increaseProductCount("Mountain fox notebook", 2)
// await expect(cartPage.locators.subtotalCount).toHaveText(" 3 items ")
// await cartPage.decreaseProductCount("Mountain fox notebook", 1)
// await expect(cartPage.locators.subtotalCount).toHaveText(" 2 items ")
// await cartPage.deleteProduct("Mountain fox notebook")
// await expect(product).not.toBeVisible()




})





