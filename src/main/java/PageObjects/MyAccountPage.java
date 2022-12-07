package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyAccountPage {
    WebDriver driver;
    public MyAccountPage(WebDriver driver)
    {
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//h2[contains(text(),'My Account')]")
    WebElement txyMycc;
    @FindBy(xpath = "//a[@id='btnlogout']")
    WebElement txtSingout;
    public boolean isMyAccountpageexist()
    {
        try{
            return (txyMycc.isDisplayed());
        }
        catch (Exception e)
        {return  false;}        }
    public  void setSignout()
    {
        txtSingout.click();
    }

}
