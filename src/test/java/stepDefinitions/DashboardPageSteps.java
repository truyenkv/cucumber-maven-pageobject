package stepDefinitions;

import cucumber.api.java.en.Then;
import cucumberOptions.Hooks;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObjects.DashboardPageObject;
import pageObjects.HomePageObject;
import pageObjects.PageGeneratorManager;
import pageObjects.RegisterPageObject;

public class DashboardPageSteps {
    WebDriver driver;
    DashboardPageObject dashboardPageObject;
    public DashboardPageSteps() {
        driver = Hooks.openAndQuitBrowser();
        dashboardPageObject = PageGeneratorManager.getDashboard(driver);
    }

    @Then("^I can see my UserID on the Dashboard$")
    public void i_can_see_my_userid_on_the_dashboard()  {
        Assert.assertEquals(dashboardPageObject.getUserIDOnScreen(), RegisterPageSteps.userId);
    }
}
