import { Formats, MarkupTranslationValues, RichTranslationValues, TranslationValues } from "next-intl";
import { ReactElement, ReactNodeArray } from "react";

export interface ITrans {
  <TargetKey extends any>(
    key: TargetKey,
    values?: TranslationValues,
    formats?: Partial<Formats>
  ): string;
  rich<TargetKey extends any>(
    key: TargetKey,
    values?: RichTranslationValues,
    formats?: Partial<Formats>
  ): string | ReactElement | ReactNodeArray;
  markup<TargetKey extends any>(
    key: TargetKey,
    values?: MarkupTranslationValues,
    formats?: Partial<Formats>
  ): string;
  raw<TargetKey extends any>(key: TargetKey): any;
}
