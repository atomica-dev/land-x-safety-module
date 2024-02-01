export const positiveNumericFieldHandler = (value: string, valueSetter: (value: string) => void, decimals?: number) => {
  value = value.replace(",", ".").replace(/^0+(\d)/, "$1");

  const numericValue = Number(value);
  if (!Number.isNaN(numericValue) && numericValue >= 0) {
    let [integer, fractional = ""] = value.split(".");

    if (decimals !== undefined) {
      fractional = fractional.slice(0, decimals);
    }

    valueSetter(value.includes(".") ? `${integer}.${fractional}` : integer);
  }
};

export const createFormattedNumberInputHandler =
  (prevValue: string, handler: (value: string) => void) =>
  ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    let pureValue = target.value.replace(/ /g, "");
    let valueParts = formatNumber(pureValue).split(" ");

    let caretDiff = formatNumber(pureValue).length - formatNumber(prevValue).length;

    let caret = (target.selectionStart || 0) >= (target.selectionEnd || 0) ? target.selectionStart : target.selectionEnd;

    if (caretDiff === 0 && target.value.length < formatNumber(prevValue).length && caret !== 0) {
      caretDiff -= valueParts[0].length > 1 ? 1 : 2;

      pureValue = pureValue.slice(0, (caret || 1) - 1) + pureValue.slice(caret || 1);
    }

    handler(pureValue);

    window.requestAnimationFrame(() => {
      const newPositionDelta = caretDiff > 0 ? caretDiff - 1 : caretDiff + 1;

      target.selectionStart = caret ? caret + Math.sign(newPositionDelta) : caret;
      target.selectionEnd = caret ? caret + Math.sign(newPositionDelta) : caret;
    });
  };

export const formatNumber = (value: string) => {
  const hasSign = value[0] === "-";

  const [integer = "", double] = value.substring(hasSign ? 1 : 0).split(".");

  let number = Array.from(integer)
    .reverse()
    .map((value, index) => (index > 0 && index % 3 === 0 ? value + " " : value))
    .reverse()
    .join("");

  if (value.includes(".")) {
    number += "." + double;
  }

  if (hasSign) {
    number = "-" + number;
  }

  return number;
};

export type Validator = (value: string) => string | false;
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const createEmailValidator =
  (message: string): Validator =>
    (str: string) =>
      !EMAIL_REGEX.test(String(str).toLowerCase()) && message;

