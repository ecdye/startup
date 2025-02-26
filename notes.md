# CS 260 Notes

Notes on the Wheel Spinner website.

[My startup](https://ecdye.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- [Mermaid Chart Editor](https://mermaidchart.com)

## AWS Notes

mrtops-byu
My domain is [ecdye.click](https://ecdye.click) which renews at $3 a year with ~$.50 a month for hosting.
Caddy is using Lets Encrypt to generate a free certificate and make it so we don't have to worry about manually configuring it.


## HTML Notes

Good reference for input types in HTML is [here](https://github.com/webprogramming260/.github/blob/main/profile/html/input/input.md#html-input-elements)

## CSS Notes

I thought about using Tailwind as I have a little bit of experience with it but ended up choosing to use bootstrap with a small amount of additional styling for things like the wheel. I made this choice primarily to stretch myself and learn something new.

## React Notes

I've discovered how difficult it can be in general to format and style a webpage in React. All of the elements still require quite a bit of CSS to make them appear properly.

Additionally, I have learned a lot more about using React Bootstrap. I feel like it is much easier to use than regular bootstrap as it requires a lot less inline classes to make it work.

I have also learned a lot more about how to use browser storage and json to keep track of persistence data. I also had to do a bunch of experimentation to learn how I could properly do user persistance and remember the username but also properly log in and out.

# Service Notes

For some reason, Safari doesn't like to accept cookies when generated from localhost during development and that led me on a wild goose chase to fix code that wasn't even broken for several hours.
After I figured that out the rest went pretty easy, and I was able to use simple fetch calls to access all the endpoints I created and also the external service I found for color palette generation.

Its amazing how quick it all loads though!
