import dotenv from "dotenv";
dotenv.config();

const env = (key: string) => {
  const value = process.env[key];
  if (value === "undefined") {
    throw new Error(`${key}는 환경변수에 정의되지 않았습니다.`);
  }
  return value;
};

export const envConfig = {
  ga: {
    id: env("NEXT_PUBLIC_GA_ID"),
  },
  giscus: {
    repoName: env("NEXT_PUBLIC_GISCUS_REPO_NAME"),
    repoId: env("NEXT_PUBLIC_GISCUS_REPO_ID"),
    categoryId: env("NEXT_PUBLIC_GISCUS_CATEGORY_ID"),
  },
  cypress: {
    id: env("NEXT_PUBLIC_CYPRESS_ID"),
    recordKey: env("CYPRESS_RECORD_KEY"),
  },
  vercel: {
    token: env("VERCEL_TOKEN"),
    orgId: env("VERCEL_ORG_ID"),
    projectId: env("VERCEL_PROJECT_ID"),
  },
  slack: {
    webhookURLDeploymentLog: env("SLACK_WEBHOOK_URL_DEPLOYMENT_LOG"),
  },
};
