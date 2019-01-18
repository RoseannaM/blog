---
layout: blog
title: Using LaunchDarkly's Feature Flags with React to Display Real Time Information
date: '2019-01-17T15:35:33-08:00'
thumbnail: /uploads/feature-flags-react.png
---
Have you ever needed to update information on a web page on short notice but found the whole process complicated, slow and error prone? Editing the code, re deploying...wouldn't it be great if you could do that in a simple admin console without changing any code?

Well you can with LaunchDarkly!

LaunchDarkly is a service that allows users to easily implement feature flags in their projects. Feature flags can be used to modify user defined features in a running app through the LaunchDarkly admin console.

This is incredibly powerful in cases where you would like to add a feature to a product but want to control it after deployment, avoiding the need for a re-deploy if you discover things don't go as planned.

<img class="blog-images-md" src="https://media.giphy.com/media/iGXT1ysFt9bXy/giphy.gif" alt="Gif of girl failing to knock down all dominoes" />

Feature flags can also be used to roll out features to a specified percentage of users or users that meet certain requirements, allowing for super simple canary launches.

Aside from devops and feature rollouts there are many other real world use cases for LaunchDarkly.

In this post we’ll cover how you could use LaunchDarkly to display the results of a certain well-known sporting event (**who shall not be explicitly named, but it's related to something Super 🏈**) where there is no available API and the information needs to be manually updated.

LaunchDarkly helps you decouple deployment from release and also provides a mechanism for non-technical people to manage the behaviour of your running service.


<img class="blog-images-md" src="https://media.giphy.com/media/2YnDKIixZwdLJ4WNln/giphy.gif" alt="gif of excited lady" />

So grab a drink and sit down with me as we explore the power of feature flags.

This example uses Create React App to spin up an empty project and [Netlify](https://www.netlify.com) for hosting. ❤️

Let's start with the [quickstart](https://app.launchdarkly.com/default/production/quickstart/tutorial) tutorial. This takes you through the first steps of creating a feature flag.

<img class="blog-images-md" alt="Image showing the tutorial sections" src="https://thepracticaldev.s3.amazonaws.com/i/ota4w1ickpsbk05zqwt3.png"/>


First create a feature flag and choose a name. Then choose which application language you plan to use and select the environment it will be used for.

As this example is using React, I chose to use an integration which supports the use of LaunchDarkly with React [LD-React](https://github.com/yusinto/ld-react). 

It follows idiomatic React patterns and uses the websocket LaunchDarkly API so feature flag changes will be pushed to client without the need for a page refresh.

#### Note

>Something to note with the use of the client side SDK is that you **MUST** manually enable feature flags for use client-side by checking a box in the settings section within the LaunchDarkly admin console. **see below** Otherwise you may find yourself scratching your head for a while asking yourself 'but whyyyyy?. Well, that's why. 


<img class="blog-images-md" src="https://thepracticaldev.s3.amazonaws.com/i/q1ecncnhs0fo65q1fsht.png" alt="Image of checkbox for enabling client side SDK usage" />

The code snippet below shows a flag that is a simple boolean variable called showCountDown. It toggles a countdown React component on and off.

```javascript
{
  this.props.flags.showCountDown ? (
    <H1Title>
      <Countdown date={"Sun, 03 Feb 2019"} />
    </H1Title>
  ) : (
    <div />
  );
}
```

This second flag is called a multivariate flag. It allows a user to define a number of variations which return a string value rather than a bool.

It has eight variations to represent all the teams competing in the sports event this example was based on. Go the Gliders! 


<img class="blog-images-md" alt="Picture showing the LaunchDarkly admin console with the multi variate flag" src="https://thepracticaldev.s3.amazonaws.com/i/hm576i1k3obnxbxyqsu4.png" />

Something you may notice when you have your first flag working is the page information is updated without reloading the page. This is great in the event of someone waiting for a page to update without refreshing it regularly. It ensures they will have the correct information immediately.

<img class="blog-images-md" alt="Gif of man making a rainbow with his hands" src="https://media.giphy.com/media/3o84U6421OOWegpQhq/giphy.gif"/>

Aside from feature flags, LaunchDarkly also provides support for A/B testing and tracking goals.

Being able to display certain info/features for specific groups and then getting analytics on user interactions is very useful.

So go ahead and implement those flags! I would love to hear about how you're using feature flags in your applications.

For a closer look at the project check out the repo [here](https://github.com/RoseannaM/ld-example) or visit the [live version](https://ldproject.netlify.com/).

Happy hacking.
