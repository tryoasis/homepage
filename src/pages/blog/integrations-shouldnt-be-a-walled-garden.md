---
title: "Integrations shouldn't be walled gardens: The problem with closed source Unified API's like Merge and Finch"
excerpt: "On the surface, Unified API tools seem like a panacea for integration headaches. But there is a major catch - most are closed source proprietary platforms like Merge and Finch. These closed ecosystems create walled gardens that end up limiting companies over the long term. "
publishedAt: "07/16/2023"
image: "walledgardens.png"
alt: "walled garden with pool"
category: "Thought Leadership"
author: "James Bohrman"
layout: "../../layouts/BlogLayout.astro"
tags: [parnerships, growth, unified apis]
slug: integrations-shouldnt-be-walled-gardens
ctaTitle: "Want a free integration in less than two weeks?"
ctaDescription: "Accelerate your roadmap"
ctaLinkCopy: "Schedule a call"
ctaLinkUrl: "https://meetings.hubspot.com/james-bohrman"
---

![](https://www.tryuppercut.com/walledgardens.png)

Integration has become a strategic imperative for modern software companies. The ability to connect and exchange data with third-party apps and services is now a baseline expectation for any platform. Users demand seamless interoperability.

To accelerate integration development, purpose-built tools like Merge and Finch have emerged that unify and standardize API creation. Rather than hand-coding every new API endpoint, these Unified API platforms provide a consistent interface definition, hosting, security, and DevOps.

On the surface, Unified API tools seem like a panacea for integration headaches. But there is a major catch - most are closed source proprietary platforms like Merge and Finch. These closed ecosystems create walled gardens that end up limiting companies over the long term.

## Proprietary APIs don't age well

Proprietary APIs built on closed source Unified API platforms quickly become legacy technical debt. Platform vendors frequently go in and out of business. Even while operating, they change strategic direction causing their APIs and schema to fluctuate.

These API definition changes break backwards compatibility, forcing all API consumers to rewrite their integration code with each new release. Accidentally couple your systems too tightly to a proprietary API, and you end up locked into outdated technology.

Proprietary APIs also tend to lack clear versioning schemes that allow for smooth deprecation cycles. Integration partners never know when an API might suddenly disappear or mutate without notice. This uncertainty makes them reluctant to adopt new APIs from closed vendors.

### No ability to customize and extend

Unique business requirements inevitably arise that closed Unified API tools don't address out of the box. For example, you may need to support pagination for certain APIs or add proprietary security controls.

With closed source Unified APIs, you have no option but to raise a feature request ticket and patiently wait for the vendor to someday prioritize building what you need. They control the roadmap, leaving you helpless to tailor it to your needs.

This inability to customize stifles innovation. Your developers are reduced to only configuring settings rather than unleashing their creativity through code. Closed Unified APIs become constraint rather than opportunity.

### No visibility into issues

Bugs, performance problems, and outages will inevitably occur. But when proprietary Unified API tools break, you have limited visibility into what's wrong or how to fix it. The internal code is hidden away, giving you no option but to sit and wait for the vendor to solve the problem on their schedule.

Security vulnerabilities also arise frequently, but closed source obscures them from view. You must blindly trust vendors are properly auditing and fixing bugs affecting your data. But without access to verify, you can never be fully confident.

### Vendor lock-in risks

Once you build core integrations on closed Unified APIs, extracting yourself becomes extremely difficult. The substantial time and resources invested make switching to a competitor feel like an insurmountable hurdle.

This gives the vendor disproportionate power over pricing and terms. If support quality or features decline, you're left with no option but to keep paying the renewal fees and cope with the issues. Vendor lock-in leaves you captive.

## Focus on openness instead

Rather than building your ecosystem on the quicksand of proprietary Unified APIs, focus on openness instead. Adopt open standards like OpenAPI and GraphQL to define your interfaces. Use portable frameworks like Nango and Poozle to implement.

Open source Unified API tools avoid the innovation limits and lock-in risks of closed counterparts. The code transparency gives you ultimate flexibility to control your own destiny. Standards alignment ensures portability across vendors and generations.

APIs should connect systems, not wall them off. Build your ecosystem on the bedrock of open standards and open source rather than the shifting sands of closed Unified API platforms. The future demands openness.