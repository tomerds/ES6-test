import { readFileSync, writeFileSync, existsSync } from "fs";
import config from "./hardhat.config";

const test = () => {
  //   const userSolidity = config?.solidity;
  //   if (userSolidity == undefined) {
  //     console.log("no sol found");
  //     return;
  //   }

  console.log(config);

  //   const contents = `
  //             require("@nomicfoundation/hardhat-toolbox");

  //             module.exports = {
  //                     solidity: ${JSON.stringify(userSolidity)},
  //                     paths: {
  //                       artifacts: "./artifacts",
  //                     },
  //                     networks: {
  //                       goerli: {
  //                         url: "https://goerli.infura.io/v3/${RPC_KEY}",
  //                         accounts: ["${PRIVATE_KEY}"],
  //                       },
  //                     },
  //                     etherscan: {
  //                       apiKey: "${ETHERSCAN_API_KEY}",
  //                     },
  //                   };`;

  //   writeFileSync(`./new.config.ts`, contents, function (err, result) {
  //     if (err) console.log("error", err);
  //   });
};

test();
