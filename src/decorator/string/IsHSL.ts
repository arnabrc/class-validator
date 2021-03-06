import { ValidationOptions } from "../ValidationOptions";
import { buildMessage, ValidateBy } from "../common/ValidateBy";
import validator from "validator";

export const IS_HSL = "isHSL";

/**
* Check if the string is an HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification.
 * Comma-separated format supported. Space-separated format supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
 * If given value is not a string, then it returns false.
 */
export function isHSL(value: unknown): boolean {
    return typeof value === "string" && validator.isHSL(value);
}

/**
 * Check if the string is an HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification.
 * Comma-separated format supported. Space-separated format supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
 * If given value is not a string, then it returns false.
 */
export function IsHSL(validationOptions?: ValidationOptions): PropertyDecorator {
    return ValidateBy(
        {
            name: IS_HSL,
            validator: {
                validate: (value, args) => isHSL(value),
                defaultMessage: buildMessage(
                    (eachPrefix) => eachPrefix + "$property must be a HSL color",
                    validationOptions
                )
            }
        },
        validationOptions
    );
}
