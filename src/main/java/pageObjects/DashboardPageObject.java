  package pageObjects;

  import common.AbstractPage;
  import org.openqa.selenium.WebDriver;
  import pageUI.DashboardPageUI;
  import pageUI.HomePageUI;

  public class DashboardPageObject extends AbstractPage{
      WebDriver driver;

      public DashboardPageObject(WebDriver driver) {
          this.driver = driver;
      }

      public String getUserIDOnScreen(){
          waitForElementVisible(driver, DashboardPageUI.USER_ID);
          return SplitBy(getElementText(driver, DashboardPageUI.USER_ID),1);
      }

      public void clickOnNewCustomerMenu() {
          waitForElementVisible(driver, DashboardPageUI.NEW_CUSTOMER);
          clickToElement(driver, DashboardPageUI.NEW_CUSTOMER);
      }
  }
