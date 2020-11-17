package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import org.openqa.selenium.WebDriver;
import pageObjects.NewCustomerPageObject;
import pageObjects.PageGeneratorManager;
import pageObjects.RegisterPageObject;

public class NewCustomerPageSteps {

    WebDriver driver;
    NewCustomerPageObject newCustomerPageObject;
    public static String userId, pass;

    public NewCustomerPageSteps() {
        driver = Hooks.openAndQuitBrowser();
        newCustomerPageObject = PageGeneratorManager.getNewCustomer(driver);
    }

    @Then("^I add the user information$")
    public void i_add_the_user_information(DataTable table) {
    }


    @When("^I click the Submit button$")
    public void i_click_the_submit_button(){
    }

    @Then("^I see the information of Customer displays correctly$")
    public void i_see_the_information_of_customer_displa_correctly(){
    }

    @When("^I click Continue button$")
    public void i_click_continue_button() {

    }


}
