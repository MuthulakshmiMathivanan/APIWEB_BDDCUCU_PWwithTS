Feature:Ad flow 

Background: Ad flow in Vocher
        Given User navigate to login page with "https://demo.cyclos.org/ui/login"
        And Enter the username and password "demo" and "1234"
        And Click the login submit button
        And Click the user payment option
       
 @jeyagandhi_Web_Adflow
 Scenario: Selecting Vocher 
    Given User navigate to Home page and click dashboard
    When I click on Vocher Module
    And navigate to Gift Vocher option
    And Enter the amount and click the gift vocher option
    And Validate the gift vocher page
    Then click the confirm button to complete the process
    Then verify the gift vocher details