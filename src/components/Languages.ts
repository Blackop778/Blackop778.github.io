class Language {
    public static createLanguage(displayName: string): Language {
        return new Language(displayName, Language.gIndex++);
    }

    private static gIndex = 0;
    public readonly displayName: string;
    public readonly index: number;

    private constructor(displayName: string, index: number) {
        this.displayName = displayName;
        this.index = index;
    }
}

const languages = {
    CPP: Language.createLanguage("C++"),
    JAVA: Language.createLanguage("Java"),
    JAVASCRIPT: Language.createLanguage("Javascript"),
    TYPESCRIPT: Language.createLanguage("Typescript"),
};

export { Language, languages };
