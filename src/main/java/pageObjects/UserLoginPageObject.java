package pageObjects;

import common.AbstractPage;
import org.openqa.selenium.WebDriver;


public class UserLoginPageObject extends AbstractPage{
	
	WebDriver driver;
	
	public UserLoginPageObject(WebDriver driver) {
		this.driver = driver;
	}

}
