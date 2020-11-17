package pageObjects;

import org.openqa.selenium.WebDriver;

public class PageGeneratorManager {
	
	public static HomePageObject getHomePage(WebDriver driver) {
		return new HomePageObject(driver);
	}
	public static UserLoginPageObject getLoginPage(WebDriver driver) {
		return new UserLoginPageObject(driver);
	}
	public static RegisterPageObject getRegisterPage(WebDriver driver) {
		return new RegisterPageObject(driver);
	}
	public static DashboardPageObject getDashboard(WebDriver driver) {
		return new DashboardPageObject(driver);
	}

	public static NewCustomerPageObject getNewCustomer(WebDriver driver){
		return new NewCustomerPageObject(driver);
	}
	

	
}
