---
sidebar_position: 3
---

# Create an TikTok Account

There are **two** ways to add TikTok accounts to TikTok Matrix:

1. **Manual**: Add registered TikTok accounts manually.
2. **Auto**: Register and add TikTok accounts automatically.

## Manual

1. Click the `Accounts` menu on the left sidebar.
2. Click the `Add` button to create a new account.
3. Input the email(Optional),password(Optional), username(Rquired, must be start with `@`)
4. Select a group to add the account to.
5. Select a device to login the account.
6. Click the `Save` button.

## Auto

Before you start, you need to prepare an domain and enable email rules on Cloudflare.

- [Use Cloudflare Email Routing to Easily Create and Route Email Addresses](https://blog.cloudflare.com/introducing-email-routing/)
- [Use Cloudflare Email Routing Catch-All Feature](https://developers.cloudflare.com/email-routing/setup/email-routing-addresses/#catch-all-address)

1. Click the `Settings` menu on the left sidebar.
2. Configure the `Custom register email suffix` and click the `Save` button.
3. Click the `Devices` menu on the left sidebar.
4. Click one device to open the device detail page.
5. Click the `Register` button in Auto Script section.
6. The register job will be started and the account will be added to the device after the job is finished.

<video src="https://r2.tikmatrix.com/register-0506.mp4" controls width="400" height="300"></video>
