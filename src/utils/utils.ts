import React from "react";

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
