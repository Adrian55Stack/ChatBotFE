import { TranslateLoader } from "@ngx-translate/core";
import { of } from "rxjs";

export class FakeTranslateLoader implements TranslateLoader {
  getTranslation() {
    return of({});
  }
}