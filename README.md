# YUN LOG
![블로그 메인 이미지](https://drive.google.com/uc?export=view&id=1yOlfpgm4njlZWaw6QkgCrY1ufD_uKOaJ)
## 소개
- FE 개발자 YUN의 기술 블로그입니다. 🤓
- 개발 지식을 정리하기 위하여 포스트를 작성하고 있습니다. 📚
- 배운 것을 직접 적용해보는 작은 실험실입니다. 🧪

## 사용기술

| 목적 | 기술 |
|------|------|
|코어 | TypeScript, React, Next.js |
|스타일 | Emotion |
|상태관리 | Recoil |
|테스트 | Jest, RTL, Cypress, Storybook |
|CI/CD | GitHub Actions, Vercel|

## 구현 사항
- Next.js SSG 렌더링
  - 빠른 로딩 속도와 SEO을 위하여 Next.js에서 제공하는 SSG(정적 사이트 생성) 뱡식으로 포스트를 렌더링하였습니다.
- mdx 파일을 이용한 포스트 데이터 관리
  - 간편한 에디팅, 커스텀 컴포넌트 사용을 위해 mdx 파일로 포스트 데이터를 생성하고 관리합니다.
  - Node.js의 fs을 사용하여 포스트 데이터를 불러옵니다.
  - next-remote-mdx룰 사용하여 mdx 파일을 화면에 렌더링합니다. 

