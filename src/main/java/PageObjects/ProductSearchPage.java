package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.time.Instant;

import static sun.security.util.KnownOIDs.EC;

public class ProductSearchPage {
    public WebDriver driver;
    public ProductSearchPage(WebDriver driver)
    {
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//div[contains(text(),'women')]")
    WebElement txt_women;
    @FindBy(xpath = "//span[contains(text(),'All Clothing')]")
    WebElement allClothing;
    @FindBy(xpath = "//a[@id='left-sidebar-links3-f5236o603nebmxgqrxxohnn99']")
    WebElement link_Blazers;
    @FindBy(xpath = "//a[contains(text(),'Gold Tailored Sequin Blazer Jacket')]")
    WebElement link_1stproduct;
    @FindBy(xpath = "//*[@id=\"dk_container_Colour-997028\"]/a")
    WebElement SelectDropdown;
    @FindBy(xpath = "//*[@id=\"dk_container_Colour-997028\"]/div/ul/li[1]/a")
    WebElement Gold_color;
    @FindBy(xpath = "//*[@id=\"Style997028\"]/section/div[5]/div[4]/ul/li[2]")
    WebElement button_Regular;
    @FindBy(xpath = "//*[@id=\"Size-U62-236\"]/ul/li[4]")
    WebElement button_size;
    @FindBy(xpath = "//a[contains(text(),'ADD TO BAG')]")
    WebElement click_addtobag;
    @FindBy(xpath = "//div[contains(text(),'1 Item In Bag')]")
    WebElement viewpopupmsg;
    @FindBy(xpath = "//*[@id=\"platform_modernisation_header\"]/header/div[1]/nav/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div[1]/a")
    WebElement button_viewbag;
    @FindBy(xpath = "//*[@id=\"title\"]/p")
    WebElement msgheading;

    public void ClickWomenLink()
    {
       txt_women.click();

    }
    public void ClickAllClothing(){allClothing.click();}
    public void ClickOnBlazerlink() {
        Actions act=new Actions(driver);
        act.moveToElement(link_Blazers);
        act.build().perform();
    }
    public void ClickOn1stProductFromList()
    {
        link_1stproduct.click();
    }
    public void ClickOnselectDrop()
    {
        SelectDropdown.click();
    }
    public void selectgoldcolor()
    {Gold_color.isSelected();}
    public  void clickOnRegular()
    {
        button_Regular.click();}
    public  void SelectSize()
    {
        button_size.isSelected();
    }
    public void setClick_addtobag()
    {
        click_addtobag.click();
    }
    public boolean ispopupmsgDispaly()
    {
        try{return (viewpopupmsg.isSelected());}
        catch (Exception e)
        {return false;}
    }
    public void setClick_viewbag()
    {
        button_viewbag.click();
    }
    public boolean isDisplaymsg()
    {   try{
        return(msgheading.isDisplayed());}

    catch(Exception e)
    {
        return false;
    }}


}
