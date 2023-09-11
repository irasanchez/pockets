## the app needs offline capability to be accessible when service sucks 
vite-pwa-plugin

## I'd like the app to feel native to the device it's being used on. 
here is an example of using MUI to make a switch look like this iOS styling https://codesandbox.io/s/ios-switch-material-ui-styled-components-forked-d3f3c8?file=/src/Switch.jsx

## when reordering pockets by priority

i'd like the animation that says you're in the priority sort edit mode to be like when you're re-ordering apps on the homescreen of your phone

https://codepen.io/Chub/pen/kajmZV

## circularprogress color problems

https://github.com/mui/material-ui/issues/38905
https://mui.com/material-ui/customization/theme-components/#theme-default-props

## plaid api 

can't implement the ability to make transfers until launching and getting production approval

can use this as a reference then https://github.com/plaid/pattern-transfers/blob/master/client/src/components/TransferForm.tsx


## simple fin bridge api notes

- the api docs really stress sanitizing the data at various points. make sure to implement this to honor the people -- including myself -- who use this. 
- this is a tool that allows me to connect to bank onfo without needing your login information. i have no say in how it works. right now, they don't have a way for me to let you connect to your bank while still using the pockets app. this means you have to go to this tool, connect, and come back with a secret code that lets pockets know you connected. because of this, there is no way for me to absorb the cost that tou are charged for connecting to your bank. i am brainstorming possible reimbursements or other solutions.  
- account balance time is in unix epoch format and will need to convert it
```js
var moment = require('moment');

function convertTimestamp(timestamp) {
    return moment.unix(timestamp).format("MM-DD-YYYY");
}
```
