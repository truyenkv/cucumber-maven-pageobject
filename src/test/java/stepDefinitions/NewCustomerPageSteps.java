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

import java.util.List;
import java.util.Map;

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
        List<Map<String, String>> customer = table.asMaps(String.class, String.class);
        newCustomerPageObject.addCustomerInforToTheForm(customer.get(0).get("CustomerName"),customer.get(0).get("DateofBirth"),customer.get(0).get("Address"),customer.get(0).get("City"),customer.get(0).get("State"),customer.get(0).get("PIN"),customer.get(0).get("MobileNumber"),customer.get(0).get("Email"),customer.get(0).get("Password"));
    }

    @When("^I click the Submit button$")
    public void i_click_the_submit_button(){
        newCustomerPageObject.clickOnSubmitButton();
    }

    @Then("^I see the information of Customer displays correctly$")
    public void i_see_the_information_of_customer_displa_correctly(DataTable data){
        List<Map<String, String>> customer = data.asMaps(String.class, String.class);
        newCustomerPageObject.checkUserInforIsCreateCorrectly(customer.get(0).get("CustomerName"),customer.get(0).get("DateofBirth"),customer.get(0).get("Address"),customer.get(0).get("City"),customer.get(0).get("State"),customer.get(0).get("PIN"),customer.get(0).get("MobileNumber"),customer.get(0).get("Email"));
    }

    @When("^I click Continue button$")
    public void i_click_continue_button() {

    }


}
