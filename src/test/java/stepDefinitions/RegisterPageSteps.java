package stepDefinitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import org.openqa.selenium.WebDriver;
import pageObjects.HomePageObject;
import pageObjects.PageGeneratorManager;
import pageObjects.RegisterPageObject;

public class RegisterPageSteps {

    WebDriver driver;
    RegisterPageObject registerPageObject;
    public static String userId, pass;

    public RegisterPageSteps() {
        driver = Hooks.openAndQuitBrowser();
        registerPageObject = PageGeneratorManager.getRegisterPage(driver);
    }

    @And("^I input my email to the Email ID field and Submit$")
    public void i_input_my_email_to_the_email_id_field_and_submit() {
        registerPageObject.inputEmailToEmailField();
    }
    @When("^I back to Home page$")
    public void i_back_to_home_page() {
        registerPageObject.openUrl(driver, HomePageSteps.homePageUrl);
    }

    @Then("^I get the UserID and Password$")
    public void i_get_the_userid_and_password() {
        userId = registerPageObject.getUserID();
        pass = registerPageObject.getPassword();
    }
}
