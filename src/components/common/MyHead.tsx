import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  keyword?: string;
  description?: string;
  ogImage?: string;
};
const MyHead = ({
  title,
  keyword = "개발, 프론트엔드, 자바스크립트, 리액트, 넥스트",
  description = "프론트엔드 개발자 이윤슬의 개발 블로그입니다.",
  ogImage = "",
}: Props) => {
  const siteName = "이윤슬 개발 블로그";
  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="Keywords" content={keyword} />
      <meta name="Description" content={description} />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    </Head>
  );
};

export default MyHead;
