// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import puppeteer from "puppeteer";
export default function handler(req, res) {
    const url = "https://accounts.spotify.com/en/login";
    const devUrl =
      "https://developer.spotify.com/dashboard/891188afc71b416fa8c632d461fced56/users";
      const cookiesJson = [
        {
          domain: ".spotify.com",
          expirationDate: 1719335727,
          hostOnly: false,
          httpOnly: false,
          name: "OptanonConsent",
          path: "/",
          sameSite: "lax",
          secure: false,
          session: false,
          storeId: null,
          value:
            "isIABGlobal=false&datestamp=Mon+Jun+26+2023+22%3A45%3A27+GMT%2B0530+(India+Standard+Time)&version=6.26.0&hosts=&landingPath=NotLandingPage&groups=s00%3A1%2Cf00%3A1%2Cm00%3A1%2Ct00%3A1%2Ci00%3A1%2Cf11%3A1&AwaitingReconsent=false",
        },
        {
          domain: ".accounts.spotify.com",
          hostOnly: false,
          httpOnly: false,
          name: "csrf_token",
          path: "/",
          sameSite: "lax",
          secure: true,
          session: true,
          storeId: null,
          value:
            "AQBSNhwAKZj3WZXY70MQZ4YrBMs3PLeIBlXztbNR4CgCoz0bSjddc4uHeo5VZjvjCcKEWZx4Jr5U84sQ",
        },
        {
          domain: ".accounts.spotify.com",
          hostOnly: false,
          httpOnly: false,
          name: "sp_tr",
          path: "/",
          sameSite: "lax",
          secure: true,
          session: true,
          storeId: null,
          value: "true",
        },
        {
          domain: ".accounts.spotify.com",
          hostOnly: false,
          httpOnly: false,
          name: "sp_sso_csrf_token",
          path: "/",
          sameSite: "lax",
          secure: true,
          session: true,
          storeId: null,
          value:
            "013acda719d1a15caf980e70cdb88277639d05173031363837373939383833303832",
        },
        {
          domain: ".spotify.com",
          expirationDate: 1710655034.100488,
          hostOnly: false,
          httpOnly: false,
          name: "sp_t",
          path: "/",
          sameSite: "no_restriction",
          secure: true,
          session: false,
          storeId: null,
          value: "54f09f72017b677c7a017632cc306608",
        },
        {
          domain: "accounts.spotify.com",
          expirationDate: 1722357834.678072,
          hostOnly: true,
          httpOnly: true,
          name: "__Host-device_id",
          path: "/",
          sameSite: "lax",
          secure: true,
          session: false,
          storeId: null,
          value:
            "AQCaIbSVxi3MbmBa-lNbEC5km5FGEgKnWWvr9gtQrvsJGZ6epTB0Kmtn5AkfqWYkrechv9O88l8L-ofbZo-OertNmPJZMa4kM9Q",
        },
        {
          domain: "accounts.spotify.com",
          expirationDate: 1687803464.283263,
          hostOnly: true,
          httpOnly: true,
          name: "__Host-sp_csrf_sid",
          path: "/",
          sameSite: "lax",
          secure: true,
          session: false,
          storeId: null,
          value: "6d852e3bd56016f0207e61478917f71e9dea8db198f4ccf74dc80f7cb2c6e47e",
        },
        {
          domain: ".accounts.spotify.com",
          hostOnly: false,
          httpOnly: true,
          name: "__Secure-TPASESSION",
          path: "/",
          sameSite: "no_restriction",
          secure: true,
          session: true,
          storeId: null,
          value:
            "AQD1SuJ/3JwCy6BNC2eQwxw2/p1ewoPBWlvXpQFmy/VvCiq0CUWMgIF0BxJyiNHnDu0C6h7Hwx/D9gZyKHCN0+TdDxoWQJ2TD6g=",
        },
        {
          domain: ".spotify.com",
          expirationDate: 1719335588,
          hostOnly: false,
          httpOnly: false,
          name: "OptanonAlertBoxClosed",
          path: "/",
          sameSite: "lax",
          secure: false,
          session: false,
          storeId: null,
          value: "2023-06-26T17:13:08.757Z",
        },
        {
          domain: "accounts.spotify.com",
          hostOnly: true,
          httpOnly: false,
          name: "remember",
          path: "/",
          sameSite: "lax",
          secure: true,
          session: true,
          storeId: null,
          value: "harshdewangan2019%40gmail.com",
        },
        {
          domain: ".spotify.com",
          expirationDate: 1719335853.028995,
          hostOnly: false,
          httpOnly: true,
          name: "sp_dc",
          path: "/",
          sameSite: "no_restriction",
          secure: true,
          session: false,
          storeId: null,
          value:
            "AQCd2DCIQGdD4xmna6wcOycQYDhLcOCTH8GKKKFmfafzu1UFIJj4MZckwTvTjWOj1BHPw2-fzEm5Qmyd96upNDGK5ln6W_wWsNaEKbD6pmQpmD29IH2i9muDNpZan37sAMTTC_T5nvhpaFNNb2PdWjsjdCSRDCbU",
        },
        {
          domain: ".spotify.com",
          expirationDate: 1719335853.029096,
          hostOnly: false,
          httpOnly: false,
          name: "sp_key",
          path: "/",
          sameSite: "no_restriction",
          secure: true,
          session: false,
          storeId: null,
          value: "2d20c47a-1ae9-47cb-b180-77023d3fda86",
        },
      ];
      if(req.method=="POST"){
        function main(name, email) {    
            return new Promise(async(resolve, reject) => {
                try {
                    const browser = await puppeteer.launch({
                        headless: true,
                        defaultViewport: null,
                        args: [`--start-maximized`],
                      });
                  
                      const pages = await browser.pages();
                      const initialPage = pages[0];
                      await initialPage.goto(url);
                      await initialPage.setCookie(...cookiesJson);
                  
                      const page = await browser.newPage();
                      await page.goto(devUrl);
                  
                      await page.waitForSelector(`[name="name"]`);
                      await page.type(`[name="name"]`, name);
                  
                      await page.waitForSelector(`[name="email"]`);
                      await page.type(`[name="email"]`, email);
                  
                      await page.click(`[type="submit"]`);
                  
                      await browser.close();
                      resolve("promise resolved")
                } catch (error) {
                    reject(error);
                  }
            })
        
            
          }
          main(req.body.name,req.body.email)
          res.status(200).json({ "success":true })
      }else{
        res.status(200).json({ "success":false })
      }
     
   
  }
  