import { AUTWindow } from "cypress/types/cypress-global";
declare namespace Cypress {
  interface AUTWindow {
    app: {
      getArticles: () => any[];
    };
    useLanguageStore: {
      getState: () => {
        setLanguage: (lang: string) => void;
      };
    };
  }
}
