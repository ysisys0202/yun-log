import { isClient } from "@/utils/common";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const pageview = (url: URL) => {
  isClient &&
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
};

type GTag = {
  action: "click" | "submit" | "view" | "scroll" | "play"; // 행동
  category?: string; // 이벤트 그룹
  label?: string; // action이 일어난 주체
  value?: string; // 이벤트 관련 값, 숫자만 들어갈 수 있다고 하는데 스트링 넣어보고 안되면 수정, 객체는 안된다고 함
};

export const event = ({ action, category, label, value }: GTag) => {
  isClient &&
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
};
