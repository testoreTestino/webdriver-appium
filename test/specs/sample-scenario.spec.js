describe('Load apk', () => {
    it('Open Application', async () => {

        //find by accessibilityID
        const backButton = await $('~Back');
        //find by class name
        const jailBreakMessage = await $('android.view.View');
        await expect(jailBreakMessage).toBeExisting();
        await expect(backButton).toBeExisting();
//click on element
        await backButton.click();
//add waiter
        await browser.pause(2000)
        //assertion
    })

    it('Sign in to the app ', async () => {
        const signInWithQRCode = '//android.widget.Button[@content-desc="Sign In with QR Code"]'
        const signInWithTenant = '//android.widget.Button[@content-desc="Sign In with Tenant"]'
        // const inputTenantName = 'android=new UISelector().text("Tenant Name")'
        // const inputTenantName ='//android.view.View[@text="Tena"]'
        const inputTenantName = await $('android.widget.EditText');
        // const environment = '//android.widget.Button[@content-desc="drydock"]'

        const okButton = await $('~OK');
        const cancelButton = await $('~CANCEL');

        expect(signInWithQRCode).toBeExisting();
        expect(signInWithTenant).toBeExisting();
        await $(signInWithTenant).click();

        await expect(inputTenantName).toBeExisting();
        await expect(inputTenantName).toHaveText('Tenant name');
        // await expect(environment).toBeExisting();
        await expect(okButton).toBeExisting();
        await expect(cancelButton).toBeExisting();

        await $(inputTenantName).setValue('90');
        await okButton.click()
        await browser.pause(20000)

    });
})
