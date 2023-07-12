export default (err: unknown): Error => {
  if (err instanceof Error) {
    return err;
  }

  let stringifiedMessage = `Error can't be stringified`;

  try {
    stringifiedMessage = JSON.stringify(err);
  } catch {
    // do nothing
  }

  const errMsg = `This error is thrown as is, not as an Error: [${stringifiedMessage}]}`;

  return new Error(errMsg, { cause: err });
};
