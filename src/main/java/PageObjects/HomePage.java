package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    //Go tothe homepage for clothes &more
    WebDriver driver;

    public HomePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//*[@id=\"platform_modernisation_header\"]/header/div[1]/nav/div[1]/a")
    WebElement web_tittle;
    @FindBy(xpath = "//header/div[1]/nav[1]/div[3]/div[1]/div[1]/a[1]/img[1]")
    WebElement logo_Myaccount;
    @FindBy(id = "header-big-screen-search-box")
    WebElement search_box;
    @FindBy(xpath = "//button[@type='submit']")
    WebElement search_logo;
    @FindBy(xpath = "//*[@id=\"plp-results-title-container\"]/h1/span[1]")
    WebElement txt_productname;
    @FindBy(xpath = "//div[contains(text(),'women')]")
    WebElement link_womens;

    public boolean isHomepage() {
        try {
            return (web_tittle.isDisplayed());
        } catch (Exception e) {
            return false;
        }
    }

    public void setMyAccount() {
        logo_Myaccount.click();
    }

    public void sendProductname(String productname) {
        search_box.sendKeys(productname);
    }

    public void clicksearchIcon() {
        search_logo.click();
    }

    public String Isdispalyproduct() {

        String Actual=txt_productname.getText();

        return Actual;
    }
    public void ClickOnWomenLink()
    {
        link_womens.click();
    }

    }