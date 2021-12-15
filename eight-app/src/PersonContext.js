import React from "react";

//create a new context
const personContext= React.createContext();

//provider
const PersonProvider= personContext.Provider;

//consumer
const PersonConsumer= personContext.Consumer;

export {PersonProvider, PersonConsumer};