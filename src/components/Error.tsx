import React from "react";

export const ErrorString = ({ error }: { error: string }) => (
  <p className="error">{error}</p>
);
