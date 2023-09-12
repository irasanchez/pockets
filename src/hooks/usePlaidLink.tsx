// import { useCallback, useMemo } from "react";
// import { usePlaidLink, PlaidLinkOptions } from "react-plaid-link";

// interface Config extends Omit<PlaidLinkOptions, "token"> {}

// const usePlaid = (config: Config) => {

//   const onSuccess = useCallback(
//     (public_token: string, metadata: any) => {
//       // send public_token to server
//       console.log("public_token: ", public_token);
//       console.log("metadata: ", metadata);
//     },
//     []
//   );

//   const onExit = useCallback(
//     (err: any, metadata: any) => {
//       console.log("onExit: ", err, metadata);
//     },
//     []
//   );

//   const configMemo = useMemo(
//     () => ({
//       ...config,
//       clientName: "Your App Name",
//       env: "sandbox", 
//       product: ["auth", "transactions"],
//       publicKey: "your_public_key",
//       onExit,
//       onSuccess,
//       extraParams: { colors: { dark: "blue", light: "blue" } },
//     }),
//     [onExit, onSuccess, config]
//   );

//   const { open, ready, error } = usePlaidLink(configMemo);

//   return { openLink: open, ready, error };
// };

// export default usePlaid;

// //how to use
// // const { openLink: openPlaidLink, ready } = usePlaid({
// //     language: "en",
// //   });

// // Don't forget to replace 'your_public_key' with the actual public key provided by Plaid. Also, you should replace 'Your App Name' with your actual app name.

// // This hook will open the Plaid's Link UI when the "Connect to Bank" button is clicked.