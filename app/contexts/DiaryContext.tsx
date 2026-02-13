import { createContext, use } from "react";
import type { ReactNode } from "react";

import useDiaryStore from "~/stores/useDiaryStore";

type ContextType = ReturnType<typeof useDiaryStore>;

interface IProps {
  children: ReactNode;
  movieDiary: Parameters<typeof useDiaryStore>[0]["movieDiary"];
}

const DiaryContext = createContext({} as ContextType);
const useDiaryContext = () => use(DiaryContext);

function DiaryProvider({ children, movieDiary }: IProps) {
  const store = useDiaryStore({ movieDiary });

  return <DiaryContext value={store}>{children}</DiaryContext>;
}

export { DiaryContext, DiaryProvider, useDiaryContext };
