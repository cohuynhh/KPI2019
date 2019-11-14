# KPI Learning Project (use for self-study purpose)

 
## Development Environment
- Visual Studio 2019
- Visual Studio Code
- .NET Core SDK 2.2.104 
- Angular 7.2.9
- IdentityServer4 2.4.0 
- SQL Server Express 2016 LocalDB

## Setup

#### To run this project:

**1.** Create the database on your SQL Server Express LocalDB by using the dotnet cli to run the migrations from within the AuthServer.Infrastrucuture project folder.
<code>dotnet ef</code> must be installed as a global or local tool. Most developers will install dotnet ef as a global tool with the following command:
<pre><code>dotnet tool install --global dotnet-ef</code></pre>
<pre><code>AuthServer.Infrastructure> dotnet ef database update --context AppIdentityDbContext</code></pre>
<pre><code>AuthServer.Infrastructure> dotnet ef database update --context PersistedGrantDbContext</code></pre>

**2.** Install Angular CLI if necessary. `npm install -g @angular/cli`

**3.** Install Angular SPA dependencies.
<pre><code>Spa\oauth-client> npm install</code></pre>

**4.** Run the Angular CLI dev server to build and run the Angular app.
<pre><code>Spa\oauth-client> ng serve</code></pre>
  - **Important:** This must be running on the default http://localhost:4200

**5.** Build/Run the `AuthServer.sln` solution using your preferred method: Visual Studio,  VSCode, dotnet CLI.
  - **Important:** This must be running on http://localhost:5000

**6.** Build/Run the `Resource.Api.sln` solution using your preferred method: Visual Studio,  VSCode, dotnet CLI.
  - **Important:** This must be running on http://localhost:5050

**7.** Point a browser to `http://localhost:4200` to access the Angular client.

**8.** Use the *Signup* and *Login* functions to perform the authentication flow, then try and access the *Top Secret Area* to hit the protected ASP.NET Core Web API.

## Contact
cohuynhhuu@nashtechglobal.com
 

