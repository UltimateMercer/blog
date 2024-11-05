---
title: "Building an App with the GitHub API: My Experience and Learnings"
description: "Sharing my journey in developing an app to display GitHub user data, using technologies like SvelteKit, Octokit, and Vercel."
date: "2024-11-05 11:34"
image: "/blog/articles/github-data-project-logo.jpg"
tags:
  - Github
  - SvelteKit
  - API
  - Web development
  - Deploy
  - Vercel
  - Octokit
lang: "en-us"
---

Recently, while reading some articles, I came across a project where a developer used the GitHub API to search for a username and display basic information about that user. This inspired me to create my own version of the app, aiming to add more detailed user information.

To develop this application, I used several modern technologies, including:

- **Svelte/SvelteKit**: I had previously tested Svelte and had been wanting to create a project with it. I find Svelte somewhat similar to Vue, the first framework I learned and used professionally.
- **Octokit and GitHub API**: I used Octokit to access GitHub data easily, and it allowed for a higher rate limit with authentication.
- **@tanstack/query**: Essential for better managing data fetching and caching.
- **Shadcn-svelte**: Since I enjoy using ShadcnUI with React/Next.js, I opted for a compatible version for Svelte, with components that are easy to use and style with TailwindCSS.
- **Vercel**: I chose Vercel for deployment. Typically, I use GitHub Pages for static sites, but since this app requires dynamic data fetching, Vercel was a better fit.
- **v0**: I used this AI tool as a starting point to create the user contributions display component and to set up queries for pinned repositories and contributions in GraphQL. As v0 primarily supports React, I had to adjust the component to work correctly in Svelte.
- **Lucide Icons, Phosphor Icons, and Inter font**: I selected these icon libraries and Inter font for the general typography of the application.

The application is available at [https://githubdata.ultimatemercer.com/](https://githubdata.ultimatemercer.com/?un=ultimatemercer).

You can also access it with a pre-defined username, like this: [https://githubdata.ultimatemercer.com/?un=ultimatemercer](https://githubdata.ultimatemercer.com/?un=ultimatemercer). This way, the site will fetch user data upon loading.

I ran a performance test with Lighthouse to check for performance, accessibility, best practices, and SEO, and I achieved excellent results. While performance varies slightly, the initial results were better than expected, considering I hadn’t focused much on optimization.

![Performance Lighthouse](../../../../blog/articles/github-data-project-performance.jpg)

### Some screenshots of the application:

![Screenshot 1](../../../../blog/articles/github-data-project-1.jpg)

![Screenshot 2](../../../../blog/articles/github-data-project-2.jpg)

![Screenshot 3](../../../../blog/articles/github-data-project-3.jpg)

Overall, this project was a valuable experience in terms of learning and using new tools. One area for improvement would be the planning phase, as I had to refactor the structure to integrate @tanstack/query.

### Next Steps

I plan to make further improvements to the project (I’m taking a break from it for now). The main points to work on are:

- Adding unit tests;
- Enhancing data loading with a pre-defined username;
- Refining some design details.

Best regards,  
Julian Silva da Cunha
