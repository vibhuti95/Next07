package Next2022.steps;

import PageObjects.*;
import Utils.commonFunctions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;

//*[@id="platform_modernisation_header"]/header/div[1]/nav/div[4]/div[2]/div[2]/div/div[2]/div
public class stepToapplication extends commonFunctions {
     HomePage hp;
    LoginPage lp;
    MyAccountPage mAC;
    ProductSearchPage psg;
    ForgotPasswordPage ps;

    @Then("^:you are on next home page$")
    public void you_are_on_next_home_page()  {
        hp = new HomePage(driver);
       boolean value= hp.isHomepage();
       if(value)
       {Assert.assertTrue(true);}
       else {Assert.assertTrue(false);}
    }
    @When("^:click on myaccount icon$")
    public void click_on_myaccount_icon()  {
        hp.setMyAccount();
    }
    @Then("^:provide valid usernameas \"(.*?)\" and password as \"(.*?)\"$")
    public void provide_valid_usernameas_and_password_as(String Email, String pwd)
        {
            lp=new LoginPage(driver);
        lp.setEmail_inputbox(Email);
        lp.setPass_inputbox(pwd);
    }

    @Then("^:click on login button$")
    public void click_on_login_button()  {
        lp.clickOnSingin();
    }

    @Then("^:you should able to see My account page$")
    public void you_should_able_to_see_My_account_page()  {
        mAC=new MyAccountPage(driver);
        boolean trgPage=mAC.isMyAccountpageexist();
        if(trgPage){
        Assert.assertTrue(true);}
        else{Assert.assertTrue(false);}
    }

    @Then("^:click on signout button$")
    public void click_on_signout_button()  {
        mAC.setSignout();
        System.out.println("test pass");
    }
    @When("^:I enter a product name as\"(.*?)\"$")
    public void i_enter_a_product_name_as(String arg1)  {
        hp.sendProductname(arg1);
    }
    @When("^:I click on search icon$")
    public void i_click_on_search_icon() {

        hp.clicksearchIcon();
    }
    @Then("^:I should able to see all \"(.*?)\" as result$")
    public void i_should_able_to_see_all_as_result(String arg1)
    {
       String actualRe= hp.Isdispalyproduct();
      String Expected="\""+arg1+"\"";
       Assert.assertEquals(Expected,actualRe);
        System.out.println("restult is"+actualRe);
    }
    @Then("^:click on Women link dispalyed on home page$")
    public void click_on_Women_link_dispalyed_on_home_page() throws InterruptedException {
        //hp.ClickOnWomenLink();
        psg=new ProductSearchPage(driver);
        Thread.sleep(5000);
        psg.ClickWomenLink();



    }
    @Then("^:click on balzer link dispalyed on home page$")
    public void click_on_balzer_link_dispalyed_on_home_page()  {
        psg.ClickOnBlazerlink();

    }
    @Then("^:click on \"(.*?)\" prodoct from the dispalyed product list$")
    public void click_on_prodoct_from_the_dispalyed_product_list(String arg1) {
       psg.ClickOn1stProductFromList();
    }

    @Then("^:click on \"(.*?)\" as a color from select color dropdown from the displayed product$")
    public void click_on_as_a_color_from_select_color_dropdown_from_the_displayed_product(String arg1)  {
        psg.ClickOnselectDrop();
        psg.selectgoldcolor();
    }

    @Then("^:select \"(.*?)\" option from the Fit and size as \"(.*?)\" from Size option on dispalyed product$")
    public void select_option_from_the_Fit_and_size_as_from_Size_option_on_dispalyed_product(String arg1, String arg2)  {
        psg.clickOnRegular();
        psg.SelectSize();
    }

    @Then("^:click on add to bag option$")
    public void click_on_add_to_bag_option(){
        psg.setClick_addtobag();
    }

    @Then("^:you should get the popup as (\\d+) item in the bag$")
    public void you_should_get_the_popup_as_item_in_the_bag(int arg1)  {
        psg.isDisplaymsg();}

    @When("^:you click on view bag link option from popup$")
    public void you_click_on_view_bag_link_option_from_popup()  {
        psg.setClick_viewbag();
    }

    @Then("^:you should able to see product in shopping bag$")
    public void you_should_able_to_see_product_in_shopping_bag()  {
        boolean trg =psg.isDisplaymsg();
        Assert.assertEquals(true,trg);
    }
    //Forgot password functionality

    @Then("^:Then :provide valid usernameas \"(.*?)\"$")
    public void then_provide_valid_usernameas(String arg1)  {
        ps=new ForgotPasswordPage(driver);
        ps.setEmail(arg1);
    }

    @Then("^:click on forgot password link$")
    public void click_on_forgot_password_link(){
        ps.setLink_forgotpass();
    }

    @Then("^:you shold get pop window to rest password click on Reset button$")
    public void you_shold_get_pop_window_to_rest_password_click_on_Reset_button() throws Throwable {
    ps.setBtn_reset();
    }

    @Then("^:check the registered email address for which  password got reset$")
    public void check_the_registered_email_address_for_which_password_got_reset() {

    }
    @Then("^it will give you temparary password and enter it into password fied$")
    public void it_will_give_you_temparary_password_and_enter_it_into_password_fied() {
        ps.setTxt_password();
        ps.setTxt_resetpass();
    }
    @Then("^:click on sign in button$")
    public void click_on_sign_in_button() {
        ps.setBtn_resetDetail();
    }

}
