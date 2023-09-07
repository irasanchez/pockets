## landing page
use this template as a starting point https://codesandbox.io/s/pyfc7y?file=/App.tsx

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
