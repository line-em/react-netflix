# React Netflix Clone

<!-- NEW IMAGES -->
<!-- YARN BUILD .TOFIXED -->
<!-- NEW DESCRIPTION -->

**There are several changes being made in this project right now!**

This was a comprehensive project! Challenging, mostly because of Firebase, but I enjoyed its process 🎉

It's the result of [this guide](https://www.youtube.com/watch?v=ATz8wg6sg30) and an Scrimba exercise, both which I built upon. I was able to learn **Tailwind and Firebase**, specially Auth and Databases. I added **modals**, customizable homepage with various random categories, **useRefs** for the Rows, **loading and error states**, **toast notifications**, customizable alerts with **Sweet Alert**, extra hover and active effects like CSS transforms. My biggest challenge was making Firebase function smoothly, specially while **loading your personal library and liked movies.** You can create your own account and create your own movie library in this app, managing your movies.

Also, I'm using tools and libraries that I'm more comfortable with, such as **Vite** instead of CRA, and **Phosphor Icons**, which is a delightful library I love to use.

![](<./public/newthumb%20(2).png>)
![](<./public/newthumb%20(3).png>)
![](<./public/newthumb%20(1).png>)
![](<./public/newthumb%20(4).png>)

## Overview

For this project, I used:

-   React
-   Firebase
-   Tailwind CSS & Tailwind-Scrollbar-hide
-   Axios
-   Vite

And as for visual libraries:

-   Phosphor Icons
-   @uiball/loaders
-   Sweet Alert

# Challenges

I had a lot of difficulties adjusting the Firebase promises with the API calls. Sometimes the functions don't work, and there is some data that fails to load. I found out that often, simply refreshing the page fixes these issues, although it is still a problem. I learned a lot about the differences about onSnapshot, getDoc, etc, but was still unable to resolve the issues. It affects mostly:

-   The first loading of the page: the liked movies don't appear as likes (the heart symbol)
-   Liking movies don't work until refreshing, same as removing the movies from the Account page.
-   Sometimes the images may fail to load.

As mentioned, though, it tends to work as expected when refreshing the page.

This wasn't happening until I tried to fetch the cloud data from Firebase. If I don't use getDoc() on row, the problem vanishes. I know that there is something I'm missing and that isn't clicking, and I will try to fix this in the future.

## Changelog

-   1.0 - Initial commit.
-   2.0 - Huge bugfixes. Added SweetAlert and improved the Firebase code.
