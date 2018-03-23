---
layout: blog
title: HTML Canvas
date: '2016-06-30T18:00:36-07:00'
thumbnail: /uploads/html-canvas-blog.png
---
I had this great idea… Because I am a visual person, I find services like JS Bin really helpful. I’m also all about the feedback. I like to allocate a portion of my day to message my friends and bug them with questions about my work, like…”Is the colour suitable?” “Is it nice to use?” “how do I … in CSS because it’s been DAYS with no solution!” etc (you know what I’m talking about).

I thought I could make this process of sharing my code a lot easier than linking to an Ngrok tunnel, or a JS bin. Imagine if I could link them the code snippet, and we could work on it together at the same time! :o That way I can make sure they are actually looking at my work and not just saying “I am looking at it now, it’s looks fine”. 

I need to make a COLLABORATIVE EDITOR! A collaborative code editor aimed at front-end developers like myself and teams who want to perfect their work.

I had recently learnt about some of the amazing features offered by Firebase so I was super enthusiastic to make something using their service. Build on top of Firebase is Firepad, an open-source collaborative code editor. So uh, that was pretty convenient. Because the product I wanted to build was focused around bothering, I mean, messaging people to get fast feedback I decided I wanted to make an add-on for Atlassian’s Hipchat. It’s used by many of my friends so it seemed like a great way to gain the validation of my peers when I got them to install it in their rooms :D

Thus HTML Canvas was born! A real-time collaborative editor for front-end development. It’s to be used directly inside Hipchat, without the hassle of going to another web page, because what’s the point of that?

<img src="/uploads/canvas-error.png" class="blog-images-md">

So, I had my idea, now I needed to build it. I set off by reading through the Atlassian Connect Express (ACE) documentation. ACE makes creating add-ons for Hipchat super easy, as they sort out all of the complicated authentication stuff that no one likes dealing with. The ACE documentation is very in depth and there are a handful of useful walk throughs. First I took on the almighty HipChat weather map tutorial, [”Building your first add-on (Node.js)”](https://developer.atlassian.com/hipchat/tutorials/building-your-first-add-on-node-js). It’s basically a walk through on how to build a simple weather app for Hipchat. This is a great little intro into the basics of ACE and I was able to get the add-on up and running in no time. I was feeling pretty smug around this point because it was so easy, so I moved onto the next walk through. This was more in depth and outlined the technology stack being used and how to set up the HipChat components.

I continued familiarizing myself with the tools needed to build HTML Canvas. I had my ACE template set up and was confident enough with the technology stack to begin building my application. I strolled over to Firepad to prepare for a few more days of reading docs and tapping my fingers on my desk, but I was pleasantly surprised at how simple It was to get an editor up and running. I had it working within a day and the documentation (I am a bit of a documentation connoisseur) was on point. I really encourage anyone reading this to check Firepad out. It’s used by a number of products and is really easy to use. Plus it’s fun to muck around with their frontpage editor example.

As mentioned above Firepad is powered by Firebase, which I have covered in an earlier blog post (add linky link). Firebase is cool beans and I used it as my database. Firebase’s security rules feature makes it easy to manage data authorization and means everyone's data is safe and sound. It’s also what makes Firepad’s real time collaboration possible. Now, HTML Canvas is hosted with Heroku. It offers generous plans and I can trust in the reliability of the service. It’s also used in the ACE walkthroughs so there is information about how to set up with and deploy to Heroku. Simple. :D

It was about time to make things pretty. I like making things pretty. I had an idea of how I wanted my app to work and began planning the layout and basic features. The ACE template I used as my application scaffold uses Handlebars for it’s templating engine. I also made use of AUI.

AUI (Atlassian User Interface) is Atlassian’s front-end library. The user’s experience is important to me so I like to spend a lot of time on how something looks and feels. I was set on making an app that had its own distinct style but also fitted within the Hipchat UI. AUI is pretty straightforward to use and the documentation is simple and concise. The code snippets are really useful and I made use of the AUI sandbox quite a bit. I have a special place in my heart for you.

<img src="/uploads/i-love-aui.jpg" class="blog-images-md">

So, I had my editors working and syncing data to Firebase, I now needed to sort out all of the user authorisation stuff. This was all new to me, so that was fun. Thankfully ACE manages the user authentication on the Hipchat side, I was just responsible for the users project data. I needed to ensure people were authorised to access only their data and couldn’t snoop about the place. I’ll have none of that thank you. I used the power of JWTs to make this possible. The backend creates a JWT that encodes the user’s HipChat group and room id in the token. The token is fired off to the client from where it is then passed to Firebase. Lastly, through Firebase's security rules feature I can ensure data is only accessible to people with tokens that encode the correct IDs. 



I was done with all the complicated stuff, now I just had the last few touches to work on. The easy stuff ya know? 



**Suddenly iframes! **Moving the data from one iframe to another was all new to me. Hipchat uses iframes as a security measure so I needed to work within its limits. I wanted to allow users to share their project with the room, and then be able to click on the link posted to the room where it would open the correct project. I spent a bit of time figuring this out. It was a feature I absolutely wanted my app to have so I was determined to get it working. 



Next I went to work on the rendering of the input from Firepad. Basically the HTML, CSS and JS needed to be sent to an AUI dialogue and rendered, showing the working code. However, passing the input data from Firepad to the dialogue was a bit different than a few lines of Jquery. I needed to use a parameters object with the Hipchat api to move the data to an AUI dialogue. Figuring out how to pass the data around was something I had to think about a bit longer than I expected. Eventually this “simple” task was resolved and I had the dialogue rendering the code. But that’s how it usually is, often you get caught up on the “simple” tasks. 


And viola! All sorted, done and dusted. I listed it on the Atlassian Marketplace in early April. I was able to get that delicious validation from my friends soon after when they said things like “Nice” and “It works!”. Currently close to 200 companies have installed it and it is listed as one of the top add-ons for Hipchat. 

<img src="/uploads/hipchat-canvas.png" class="blog-images-md">

Overall I really enjoyed working on HTML Canvas and am thrilled to see it being used so much. I look forward to working on similar projects in the future.
