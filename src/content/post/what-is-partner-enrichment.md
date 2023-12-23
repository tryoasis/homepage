---
title: What is partner enrichment? A new paradigm for tracking partner influence
excerpt: With the moonlighting of third-party cookies and changes in privacy laws changing the marketing landscape, revenue leaders are having to think very hard about how to measure intent.
publishedAt: 2023-10-02T00:00:00Z
image: https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
category: Thought Leadership"
tags: 
    - parnerships
    - enrichment
    - sales
metadata:
    canonical: https://www.getoasis.io/what-is-partner-enrichment
---

With the moonlighting of third-party cookies and changes in privacy laws changing the marketing landscape, revenue leaders are having to think very hard about how to measure intent and identify relavent opportunities while keeping customers privacy top of mind. In a 2021 report titled ["Next in Personalization"](https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying), Mckinsey & Company found that 71% of respondents "expect personalization" from the brands they interact with, while also becoming frustrated when this need is not met. 

But how do companies walk the line of personalization while also respecting the privacy of their customers? The days of harvesting every single piece of user data from obscure B2B data provider using a tracking script is over. We need a better, more ethical, and transparent method of identifying intent from potential customers. This is where second party, or partner data, comes into play. 

![](https://media.tenor.com/o_7Gg-C7NN4AAAAC/johnny-cash.gif)

### What is second-party data?

First, lets identify the three types of data. We have **first-party, second-party, and third-party** data. There are some key differences in the uses and compliance processes of these different data types, so let's take a look:

**First-party Data**: This is consumer data that is collected by a organization directly from their customers. Some examples of collection vectors include:

- Customer surveys, feedback, and interviews
- Website traffic
- Email open rates and clicks
- Social media analytics 
- Google Analytics 

**Third-party Data**: This is first-party data that is collected by a organization and then sold (or given) to another organization that does not have a direct relationship with the consumer. This data has traditionally been collected using cookies (small information that companies send to your browsing device when you’re visiting a website) and sold to marketers by data vendors or aggregators. 

**First-party cookies** come from the organization that is behind the site you are browsing, and data that is collected via first-party cookies is considered first-party data **unless that data is then sold to a third party.** Third-party cookies come from third-party companies that have paid another company to host cookies on that company’s website.

**Second-party data**: This is first-party data that is **shared, not sold** between two trusted companies. The difference between data that is shared and sold is becoming increasingly important. The difference in second party data is that both the **partner and the customer** have control over sharing. So tools like [Reveal](https://www.reveal.co) [Crossbeam](https://www.crossbeam.com), as well as OAuth based apps like what we are working on with [Resin](https://resin.tryuppercut.com) that allow the revocation of sharing are crucial to second-party data.  When you **share** data with your partners, that is second-party data.

### How second party data can indentify nearbound intent

So now that we know what second party data is, let's look at what the future holds for partnership data sharing. We all know that revenue attribution is the bane of every Partner Success Manager's existence. I myself have implemented some increasingly complex pipelines using Segment and B2B intent tools like Clearbit. The problem with Clearbit however, is that you will always be at the whims of whatever data aggregation provider they are using, and the obscure "machine learning" algorithms they use to identify accuracy. 

What if there was a better way? What if we could take the best parts of tools partner data sharing tools like [Reveal](https://www.reveal.co) and [Crossbeam](https://www.crossbeam.com), and have a solution that identified intent based on the data shared by a partner, and not a arbitrary third-party. 

As circumstances would have it, that's exactly what we're working on with [Resin](https://resin.tryuppercut.com). I've always loved tools like Clearbit, but when I entered the partnerships space I knew there had to be a better way. The way we're approaching this is simple. Using OSS analytics libraries that use absolutely no third-party cookies, we're building the first Partner Intent Platform for enabling realtime enrichment of partner influence. 

### Partner influence omnipotence 🔮

By allowing partners to **share** their data with us, we are going to enable users to reveal intent actions in realtime while instantly identifying *who* the action is attached to, thanks to the accuracy of second party data. Solutions like Clearbit require complex implementation to identify person data, and usually require either a form fill or login, because the data comes from an aggregator. With *partner-sourced* data, your can instantly know who the user being driven to your organization is, because your partner has shared their contact info with you (And has the ability to revoke as well). 

Have you ever wanted to personalize your website at the atomic level? With partner-sourced intent, there is no complicated mess of implementation, just send a partner a data sharing request, add the Resin tracking script, and implement a few `resin.track` calls. This is the power of partner-sourced intent. 

![](https://media.tenor.com/gymIPuK4lZIAAAAC/jagan-hiei.gif)

### Second-party data is balanced data

To elaborate more in the compliance side of things, another awesome part about partner-intent tools like [Resin](https://resin.tryuppercut.com) is that we are implementing mechanisms for both the partner and the singlular contact to request the revokation of sharing on the platform. If your partner doesn't feel like they want to share data with you anymore, all they need to do is navigate to a secure portal and select "Revoke sharing". This goes for specific contacts as well. 

This is the balance of partner-sourced data. Allowing you to identify and personalize based on intent while also providing your partners and their customers control over their data. 

### Enlightened co-selling

We all love us some co-selling right? So what if you could instantly start a conversation via Slack with a partnership owner about a lead at the moment they navigated to your `/pricing` page? That's another power of partner-sourced intent. Co-selling effectively requires having the proper context and understanding the actions taken by leads that are coming from your partners ecosystem, and when you know exactly who is doing what, while also being able to instantly start a conversation about these events, you can become an enlightened co-seller. 

Right out of the gate, our platform will support integrations with Slack that allow you to open up a Slack conversation at the click of a button with your partners point of contact, where you can discuss opportunity potential and intent actions taken over the course of the lifecycle. 

### Extra: Our custom attribution sauce

Now, no partnership tool would be complete without the ability to attribute revenue to partners, and we're cooking up a special way of going about this in our custom `analytics.js` fork. We're buiding a custom event plugin that sends all referrals as events in Resin using `resin.refer`. This way, any time a domain or contact shows up on your page from for example, a partner's marketplace, that referall will show up as an event in Resin, and allow you to attach a value to that referall on top of it. 

### Are you ready to become omnipotent?

There's a new wave coming for partnerships. Obscure third-party data is dead. Partner-sourced data is in. Do you want to join this wave? We're launching Resin in early 2024 at the latest, and we are currently accepting waitlist signups at a cap of 1400 members. you can signup on [this Typeform](https://uypfr5suyzz.typeform.com/to/H7De7dZh) to get one month of free access when we launch, in exchange for a review and a shoutout. 