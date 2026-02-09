import { createContext, use } from "react";
import type { ReactNode } from "react";

import useDiaryStore from "~/stores/useDiaryStore";

type ContextType = ReturnType<typeof useDiaryStore>;

interface IProps {
  children: ReactNode;
}

const DiaryContext = createContext({} as ContextType);
const useDiaryContext = () => use(DiaryContext);

function DiaryProvider({ children }: IProps) {
  const store = useDiaryStore();

  return <DiaryContext value={store}>{children}</DiaryContext>;
}

export { DiaryContext, DiaryProvider, useDiaryContext };
