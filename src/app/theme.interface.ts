export interface IThemeProperties {
    primaryColor: string;
    textPrimary: string;
    defaultTextSize: string;
    // Se pueden añadir + propiedades si queremos ampliar
}

export interface ITheme {
    default: IThemeProperties;
    dark?: IThemeProperties;
    // Otros themes
}
