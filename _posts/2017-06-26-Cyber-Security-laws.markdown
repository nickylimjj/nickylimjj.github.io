---
layout: post
title: Cyber Security in the 21st Century
date: 2017-06-26 22:15:24 +0800
published: true
---

Couple days ago, a friend shared about someone's facebook account being hacked and how the hacker is impersonating the victim to trick the her facebook connections into sending private information. This *modus operandi* is so widely employed by hackers that the official term is called [**Social hacking**](https://en.wikipedia.org/wiki/Social_hacking). We were talking about how to react to the situation and Facebook has a solution for you.

![text](../assets/cybersec-laws/facebook-hacked.jpg)

*Facebook suggestion to change your credentials*

What if you are logged out of your account? Meaning that the hacker has already changed your credentials[^1] such that you cannot log in? Seems like you are `0xdeadbeef`. The idea of reporting to the police came up, which made me think. Can the police actually help?

![text](../assets/cybersec-laws/spf.jpg)

*The Singapore Police Force (SPF) is capable, but a hacked facebook seems like a weird task for them to pursue*

But as I mentioned how Social Hacking is so widespread, it's pretty easy to find other people who fell prey.

![text](../assets/cybersec-laws/spf-help-1.jpg)

![text](../assets/cybersec-laws/spf-help-2.jpg)

## Singapore's Computer Misuse Act
Under the [Computer Misuse and Cybersecurity Act (CMCA)](http://statutes.agc.gov.sg/aol/search/display/view.w3p;page=0;query=DocId:8a3534de-991c-4e0e-88c5-4ffa712e72af%20%20Status:inforce%20Depth:0;rec=0),

> Under the Computer Misuse Act, various offences involving the unauthorised access of computer material are punishable crimes. These include, for instance:
> * Logging into your account without permission
> * Logging into your account to commit a further crime
> * Modifying the contents of your account without permission
> * Using the account (for example, sending out emails) without permission
> * Causing the owner to be unable to access his account
> * Disclosing the account password without permission

Another interesting thing about CMCA is that the hacker does not need to be in Singapore. As long as the offence in question causes risk or harm in Singapore or the computer/program/data was in Singapore, the Act applies. I guess this make sense because of the *borderless* nature of these attacks.

In reading, there's a rather draconic clause,

![text](../assets/cybersec-laws/draconic-clause.jpg)
*Think twice before anything, script kiddies![^2]*

So it seems that the reporting to the police can help, but I would imagine that catching the perpertuator will not be easy. Especailly if he is not on Singapore soil.

## Cyber Security is huge

CMCA has been around since 1993 and is based primarily on the United Kingdom's 1990 legislation of the same name[^3]. The act was recently ammended in 2017 to tackle the increasing scale and transnational nature of cyber crime, as well as the evolving tactics of hackers [^4]. Using broad strokes to describe it, the ammendment just criminializes more style of attacks.

Singapore recognizes the growing threat. If you keep up with recent local news, you will know of the emphasis the government is putting on cyber security. MINDEF has Defense Cyber Organisation (DCO), PMO has Cyber Security Agency (CSA) managed by our MCI Minister, and if you have heard of SingCERT, they are part of CSA and is the emergency response term (ERT). The *C* just means Computer. CSA also organizes the Singapore International Cyber Week (SICW), which is an annual event for the region. Find out about the upcoming one [here](https://www.sicw.sg/).

Regionally, we are also banding up. The Asean Regional Forum (ARF) has stepped up its engagement in cyberspace, running an ASEAN Cyber Capacity Program (ACCP) that builds member states' capacity, skill base, and incident response capabilities.

Looking West, the Federal Communications Commission (FCC) is charged with regulating the internet. Taken from their [website](https://www.fcc.gov/general/cyber-security-and-network-reliability),

> The FCC’s responsibility is to ensure the reliability and resiliency of the Nation’s communications network and to promote public safety through communications. The FCC, because of its relationship with the nation’s communications network service providers, is particularly well positioned to work with industry to secure the networks upon which the Internet depends.

There are many cool parts to the internet and how to secure it, but that is certainly best left to another post. I'm also not sure if I can explain the complexities well. We'll see how it goes in the future.

We are even seeing the private sector contributing to the cyber security scene. Microsoft, who has about 90% of the Desktop market share as reported by NetMarketShare[^5], has recently opened a **Cyber Defense Operations Centre (CDOC)** in 2015 to combat hackers, and they do it 24/7. They are committed to protect their customers, and work hard to detect and respond to threats before it blows up. This new structure highlights an important understanding: Cyber Security is huge and growing, and everyone should be concerned about it. You can read about Microsoft's post [here](https://blogs.microsoft.com/microsoftsecure/2017/01/17/microsofts-cyber-defense-operations-center-shares-best-practices/).

## What do I do?

I hope I have somewhat enlightened you that Cyber Security is here to stay, and you cannot just ignore it. Good technologies can only be used if they are secure. What good are driverless cars if a hacker can crash me into a wall? What good is a "smart" house if a stranger can monitor my chat logs with my AI personal assistant like Alexa or Siri? There are good security practices that you can adopt such as making your credentials hard to crack, and thinking twice before clicking a malicious link -- *called phishing, more next time!* -- in your email, and that there are an cyber security analysts defending our space. Your acknowledgement and awareness is already a help.

This concludes my *first* real post and I hope it has been a good read. Comment below to help me improve, and share what you want to learn about!

[^1]: private information to verify the physical you
[^2]: Script kiddies is a term used to refer to hackers who use existing exploits to hack computers. The often lack expertise to write their own and are usually just curious or making a quick one.
[^3]: https://law.nus.edu.sg/asli/pdf/WPS001.pdf
[^4]: http://www.channelnewsasia.com/news/singapore/changes-to-singapore-s-cybercrime-law-passed-8712368
[^5]: https://www.netmarketshare.com/operating-system-market-share.aspx?qprid=10&qpcustomd=0
