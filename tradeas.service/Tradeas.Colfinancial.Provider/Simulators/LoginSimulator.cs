﻿using System;
using log4net;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using Tradeas.Models;
using Tradeas.Security;

namespace Tradeas.Colfinancial.Provider.Simulators
{
    public class LoginSimulator
    {
        private static readonly ILog Logger = LogManager.GetLogger(typeof(LoginSimulator));
        private readonly IWebDriver _webDriver;
        private readonly TransactionParameter _transactionParameter;
        private const string PasswordPhrase = "tr@d3@s.as1n";
        
        public LoginSimulator(IWebDriver webDriver,
                              TransactionParameter transactionParameter)
        {
            _webDriver = webDriver;
            _transactionParameter = transactionParameter;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public TaskResult Simulate()
        {
            var username = Crypter.DecryptString(_transactionParameter.LoginCredential.Username, PasswordPhrase);
            var usernameTokens = username.Split('-');
            var password = Crypter.DecryptString(_transactionParameter.LoginCredential.Password, PasswordPhrase);
            _webDriver.FindElement(By.Name(Constants.User1TextboxName)).SendKeys(usernameTokens[0]);
            _webDriver.FindElement(By.Name(Constants.User2TextboxName)).SendKeys(usernameTokens[1]);
            _webDriver.FindElement(By.Name(Constants.PasswordTextboxName)).SendKeys(password);
            _webDriver.FindElement(By.CssSelector(Constants.SubmitButtonSelector)).Click();

            var webDriverWait = new WebDriverWait(_webDriver, TimeSpan.FromSeconds(10));
            webDriverWait.Until(d =>
            {
                Logger.Info($"checking if url {d.Url.ToLower()} contains {Constants.HomePageLikeUrl.ToLower()}");
                return d.Url.ToLower().Contains(Constants.HomePageLikeUrl.ToLower());
            });
            return new TaskResult {IsSuccessful = true};
        }
    }
}