package pageObjects;

import com.github.javafaker.Faker;
import common.AbstractPage;
import org.openqa.selenium.WebDriver;
import pageUI.RegisterPageUI;

public class RegisterPageObject extends AbstractPage {

	WebDriver driver;
	Faker faker = new Faker();
	String email;
	
	public RegisterPageObject(WebDriver driver) {
		this.driver = driver;
		email = faker.internet().emailAddress();
	}

	public void inputEmailToEmailField(){
		waitForElementVisible(driver, RegisterPageUI.EMAIL_FIELD);
		sendKeyToField(driver, RegisterPageUI.EMAIL_FIELD, email);
		waitForElementClickable(driver, RegisterPageUI.SUBMIT_BUTTON);
		clickToElement(driver, RegisterPageUI.SUBMIT_BUTTON);
	}

	public String getUserID(){
		waitForElementVisible(driver, RegisterPageUI.USERID);
		return getElementText(driver, RegisterPageUI.USERID);
	}

	public String getPassword(){
		waitForElementVisible(driver, RegisterPageUI.PASSWORD);
		return getElementText(driver, RegisterPageUI.PASSWORD);
	}

}
