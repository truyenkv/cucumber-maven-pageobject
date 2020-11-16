package pageObjects;

import common.AbstractPage;
import org.openqa.selenium.WebDriver;
import pageUI.HomePageUI;


public class HomePageObject extends AbstractPage {
	
	WebDriver driver;
	
	public HomePageObject(WebDriver driver) {
		this.driver = driver;
	}

	public RegisterPageObject clickOnHereLink(){
		waitForElementVisible(driver, HomePageUI.VISIT_HERE_LINK);
		clickToElement(driver, HomePageUI.VISIT_HERE_LINK);
		return PageGeneratorManager.getRegisterPage(driver);
	}

	public void loginWithEmailAndPassword(String email, String password){
		waitForElementVisible(driver, HomePageUI.USER_ID);
		sendKeyToField(driver, HomePageUI.USER_ID, email);
		waitForElementVisible(driver, HomePageUI.PASSWORD);
		sendKeyToField(driver, HomePageUI.PASSWORD, password);
	}

	public DashboardPageObject clickOnLoginButton(){
		waitForElementClickable(driver, HomePageUI.LOGIN_BUTTON);
		clickToElement(driver, HomePageUI.LOGIN_BUTTON);
		return PageGeneratorManager.getDashboard(driver);
	}


}
