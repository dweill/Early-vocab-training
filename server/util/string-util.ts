export class StringUtil {

  public static capitalizeFirstLetter(text: string) {
    return typeof text === 'string' ?  text[0].toUpperCase() + text.slice(1) : text;
  }
}
