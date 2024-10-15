import { format } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";

interface DateProps {
  date: string;
  locale?: typeof ptBR | typeof enUS;
}

const FormatDate = ({ date, locale = ptBR }: DateProps) => {
  return format(new Date(date), "dd MMM yyyy", {
    locale,
  });
};

const FormatFullDate = ({ date, locale = ptBR }: DateProps) => {
  const localePattern =
    locale === ptBR ? "dd 'de' MMMM 'de' yyyy" : "dd MMMM yyyy";
  return format(new Date(date), localePattern, {
    locale,
  });
};

const FormatFullTimeStamp = ({ date, locale = ptBR }: DateProps) => {
  const localePattern =
    locale === ptBR
      ? "dd 'de' MMMM 'de' yyyy', às' H:mm"
      : "dd MMMM 'de' yyyy', at' H:mm";

  return format(new Date(date), localePattern, {
    locale,
  });
};

const FormatMonthYear = (date: string) => {
  return format(new Date(date), "MMM yyyy", {
    locale: ptBR,
  });
};

export { FormatDate, FormatFullDate, FormatFullTimeStamp, FormatMonthYear };
