# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When you enter the URL, your ISP sends it to a DNS server to figure out what the real address is (IP address). Once it has that, it sends a request to the server where the webpage lives to retrieve the webpage. The server gets the document (webpage), which tells the browser on the client computer what to render and how to render it, and sends it back.

## From start to finish, how does data reach you to be rendered in the browser?

Data is sent in data packets using TCP/IP (internet protocols). The client's browser sends an HTTP request, and if the server approves it, it sends the client a "200 OK" message indicating that the information will be sent. Source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works

## What code is rendered in the browser?

HTML, CSS, and JavaScript. The browser engine parses anything that isn't designated as something that can wait (async, lazy loading, etc.) Source: https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3

## What is the server-side code’s main function?

Server-side code's main function is to provide functionality to dynamic websites. Instead of sending a ton of info to a browser, it can dynamically change what info is being sent depending on the info sent in the HTTP request.

## What is the client-side code’s main function?

To improve the appearance and behavior of a rendered web page. This includes doing the layout and styling (painting). Source: https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## What is runtime?
There seem to be two answers to this, depending on context. The basic answer is that runtime is the length of time a program takes to run. However, when trying to learn more about this, I kept running into "runtime library", which seemed different, but many folks insist that runtime and runtime library are interchangeable, which leads to the second answer:

On Stack Overflow, I keep seeing that runtime code is library code, but one user pointed out the difference between this and code from other (general) libraries: "runtime code is specifically the code required to implement the features of the language itself." Source: https://stackoverflow.com/questions/3900549/what-is-runtime

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

In general, an instance is anytime something is created, such as an instance of a class in programming (example: I made a Honda object from the class Car, and that would be an instance). With that in mind, I would think that there is only one instance of client-side assets per session/request. However, I could not find any adequate resources explaining this topic, so I'm not absolutely positive that I'm even on the right track.

## How many instances of the server-side code are available at any given time?

As with the last question, I couldn't find anything talking about instances outside of the topic of classes, so my best educated guess is that the number of instances of server-side code would change dynamically (there would be as many as needed) depending on the request because server-side code is mainly for making dynamic sites.

## How many instances of the databases connected to the server application are created?

As with the prior two questions, I couldn't find good resources talking about instances, and I honestly don't have a good understanding of how databases link in (whether it's one or many of them) to answer this question. My inclination is to believe that it's similar to the previous answer in that there would be as many as needed because I'm assuming it's possible to use more than one database at a time, but I'm not positive.
