import React from "react";
import Amplify from "aws-amplify";
import {AmplifyChatbot} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => (
  <AmplifyChatbot
    botName="OrderFlowers_dev"
    botTitle="My ChatBot"
    welcomeMessage="Hello, how can I help you?"
  />
);

export default App;