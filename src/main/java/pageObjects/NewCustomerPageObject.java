  package pageObjects;

  import common.AbstractPage;
  import org.openqa.selenium.WebDriver;
  import pageUI.DashboardPageUI;

  public class NewCustomerPageObject extends AbstractPage{
      WebDriver driver;

      public NewCustomerPageObject(WebDriver driver) {
          this.driver = driver;
      }



  }
