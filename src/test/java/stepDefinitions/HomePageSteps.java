package stepDefinitions;

import common.GlobalConstant;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import org.openqa.selenium.WebDriver;
import pageObjects.HomePageObject;
import pageObjects.PageGeneratorManager;

public class HomePageSteps {

    HomePageObject homePage;
    WebDriver driver;
    public static String homePageUrl;
    public HomePageSteps() {
        driver = Hooks.openAndQuitBrowser();
        homePage = PageGeneratorManager.getHomePage(driver);
    }

    @Given("^I open the Home page$")
    public void i_open_the_home_page() {
        homePage.openPage(GlobalConstant.URL);
        homePageUrl = homePage.getPageUrl(driver);
    }

    @When("^I click on Visit here link$")
    public void i_click_on_visit_here_link() {
        homePage.clickOnHereLink();
    }

    @And("^I enter the UserID and Password to the login form$")
    public void i_enter_the_userid_and_password_to_the_login_form() {
        homePage.loginWithEmailAndPassword(RegisterPageSteps.userId, RegisterPageSteps.pass);
    }
    @And("^I click on Login button$")
    public void i_click_on_login_button() {
        homePage.clickOnLoginButton();
    }

    @And("^I enter the UserId \"([^\"]*)\" and Password is \"([^\"]*)\" to the login form$")
    public void i_enter_the_userid_something_and_password_is_something_to_the_login_form(String UserID, String Password){
        homePage.loginWithEmailAndPassword(UserID, Password);
        homePage.clickOnLoginButton();
    }


}
