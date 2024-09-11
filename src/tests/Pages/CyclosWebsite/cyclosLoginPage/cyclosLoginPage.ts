import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText, takeScreenshot } from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";

//Locators for Cyclos login Page
const PageLocators={
    usernameInputfield:"[formcontrolname='principal']",
    passwordInputField:"[type='password']",
    loginButton:"//*[text()='Submit']",
    payButton:"(//a[@class='quick-access-item'])[1]",
    userSelectionButton:"//*[@formcontrolname='subject']//button",
    userSelection:"//a[text()=' Demo one ']",
    amountField:"//*[@formcontrolname='amount']//input",
    paymentConfirmation:"//div[@class='content-title d-flex']//div",
    nextButton:"(//button)[3]",
    confirmButton:"//*[@type='button']//span[text()='Confirm']"
}
//It is a base class for all the login page
export class cyclosloginPage{
    async navigate(URL:string):Promise<any>{  
        await launchURL(URL);
    }
    async enterUsername(username:string):Promise<any>{
        await clickAndSendkeys(PageLocators.usernameInputfield,username);
    }
    async enterPassword(password:string):Promise<any>{
        await clickAndSendkeys(PageLocators.passwordInputField,password);
    }
    async ClicklaunchButton():Promise<any>{
       await toClick(PageLocators.loginButton);
    }



    
    async ClickPayUserButton():Promise<any>{
        await toClick(PageLocators.payButton);
     }

     async ClickUserSelectionButton():Promise<any>{
        await toClick(PageLocators.userSelectionButton);
     }

     async ClickUserSelection():Promise<any>{
        await toClick(PageLocators.userSelection);
     }

     async enterUserAmount():Promise<any>{
        await sendkeys(PageLocators.amountField,"100");
     }

     async nextButton():Promise<any>{
      await pageObject.page.locator(PageLocators.nextButton).click();
     }

     async paymentConfirm():Promise<any>{
        await assertText(PageLocators.paymentConfirmation," Payment confirmation ");
     }
     
     async confirmButton():Promise<any>{
        await toClick(PageLocators.confirmButton);
     }

     async validatePayment():Promise<any>{
         await takeScreenshot("Validate Payment");
     }


}

   
