# Primer on Professional Websites

_Presented by the Advanced Scientific Computing and Statistics Network (ASCSN)_

The purpose of this repository is to present a few examples, at different levels of sophistication, of how you can construct a professional website that will act as the authoritative source of your web presence.

Slides can be found [here](https://docs.google.com/presentation/d/1VAOjj8mneREj86s4Q8j2TwCm8KRGypY74grdX59oc8U/edit?usp=sharing)

## Running the development environment

To streamline the process, you can run the examples in this repository in a cloud-based development environment by using the GitHub`codespaces` feature:

- First, consider forking the repository so that you can play directly with the code and push your changes
- Second, press the big green `code` button and select `codespaces` if it is not already selected
- Finally, start your codespace!

This will start up your online development environment and now you can play around with minimal installation.

## How to 'serve' the websites

### Basics

The first example found in the `basics` folder represents the simplest form of website consisting of just basic `html`. To view this website in a preview browser, just run the following in the terminal:

`./runbasics.sh`

You quit the http server by pressing `ctrl+c` in the terminal and restart it at any time as you change the file.

### Retro

A more involved example can be found in `retro`. This mixes together `html` and `css` to have a little more control over the styling of your website. It can be ran in the same way as before, but with the following command:

`./runretro.sh`

### A Little More Modern

Now we will fold in a bit of javascript to round out our web framework. We will also use a static sebsite generator framework to leave a lot of the heavy lifting in styling and `html` wrangling. This process is a bit more complicated, but when you deploy this on a static site provider like vercel or netlify these technical details will be handled for you. To run, enter the following:

`./runmodern.sh`

This example is pulled straight from my Next.js site hosted on [my personal github page](https://github.com/kylegodbey/kyle-nextjs), which itself was based off of a template. I'll include it here just so you have a sandbox to play in.


