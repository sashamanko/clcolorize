const argv = process.argv || [];
const	env = process.env;

const isColorSupported: boolean =
	!("NO_COLOR" in env || argv.includes("--no-color")) &&
	("FORCE_COLOR" in env ||
  argv.includes("--color") ||
  process.platform === "win32" ||
  (require != null && require("tty").isatty(1) && env.TERM !== "dumb") ||
  "CI" in env);

const replaceClose = (string: string, close: string, replace: string, index: number) => {
  let result = ""
  let cursor = 0
  do {
    result += string.substring(cursor, index) + replace
    cursor = index + close.length
    index = string.indexOf(close, cursor)
  } while (~index)
  return result + string.substring(cursor)
}

const formatter = (open: string, close: string, replace = open) => {
  return (input: string) => {
    let string = "" + input
    let index = string.indexOf(close, open.length)
    return ~index
      ? open + replaceClose(string, close, replace, index) + close
      : open + string + close
  }
}

export {
  isColorSupported,
  formatter
}