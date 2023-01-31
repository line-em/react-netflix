# React Netflix Clone

**There are several changes being made in this project right now!**

This was a comprehensive project! Challenging, mostly because of Firebase, but I enjoyed its process 🎉

I used [this video as a guide](https://www.youtube.com/watch?v=ATz8wg6sg30), and it was wonderful in explaining a lot of new technologies for me (**Tailwind and Firebase**, mostly). However, I did some things differently, like using the **useRef hook**, adding extra **loading and error states**, **toast notifications**, extra hover and active effects (mostly CSS transforms). Also, I'm using tools and libraries that I'm more comfortable with, such as **Vite** instead of CRA, and **Phosphor Icons**, which is a delightful library I love to use. While I loved the guide, I just feel that I learn better if I deviate a little, not following it 100%. 😊

Contrary to my other projects, I decided that for this one, I ought to stick closer to the original Netflix design, and focus more on the other functionalities instead of the CSS.

Firebase was a challenge, but fun! You can **create an account** and save your liked movies in this demo, managing your movies.

![](<./public/thumb%20(2).png>)
![](<./public/thumb%20(3).png>)
![](<./public/thumb%20(1).png>)

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

# Challenges

I had a lot of difficulties adjusting the Firebase promises with the API calls. Sometimes the functions don't work, and there is some data that fails to load. I found out that often, simply refreshing the page fixes these issues, although it is still a problem. I learned a lot about the differences about onSnapshot, getDoc, etc, but was still unable to resolve the issues. It affects mostly:

-   The first loading of the page: the liked movies don't appear as likes (the heart symbol)
-   Liking movies don't work until refreshing, same as removing the movies from the Account page.
-   Sometimes the images may fail to load.

As mentioned, though, it tends to work as expected when refreshing the page.

This wasn't happening until I tried to fetch the cloud data from Firebase. If I don't use getDoc() on row, the problem vanishes. I know that there is something I'm missing and that isn't clicking, and I will try to fix this in the future.

## Changelog

-   1.0 - Initial commit.
