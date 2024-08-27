import dynamic from "next/dynamic";
import { css } from "@emotion/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostData } from "@/types/post";
import { colorVars } from "@/constants/cssVariables";
import { media } from "@/constants/breakPoints";
import PostHeader from "@/components/posts/PostHeader";
import { colors } from "@/constants";
import { CalloutProps } from "@/components/posts/Callout";
import { typography } from "@/constants/typography";

const Spacing = dynamic(() => import("@/components/common/Spacing"));
const Typography = dynamic(() => import("@/components/common/Typography"));
const HighlightText = dynamic(
  () => import("@/components/common/HighlightText")
);
const PostImage = dynamic(() => import("@/components/posts/PostImage"));
const Codeblock = dynamic(() => import("@/components/posts/Codeblock"));
const Callout = dynamic(() => import("@/components/posts/Callout"));
const Image = dynamic(() => import("next/image"));
type Props = {
  post: PostData;
  mdx: MDXRemoteSerializeResult;
};

const PostContent = ({ post, mdx }: Props) => {
  const { title, createdAt, thumbnail, subTitle, category } = post;
  const { compiledSource, scope, frontmatter } = mdx;
  const postComponents = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="h1" element="h2" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="h3" element="h3" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="h4" element="h4" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="subtitle1" element="h5" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    img: (props: React.HTMLProps<HTMLImageElement>) => {
      console.log(props);
      return (
        <Image
          src={props.src as string}
          alt={props.alt as string}
          width={500}
          height={500}
          layout="intrinsic"
        />
      );
    },
    code: (props: React.HTMLAttributes<HTMLPreElement>) => {
      const { children, className } = props;
      const language = className?.split("-")[1];
      return (
        <Codeblock language={language || "javascript"}>
          {children as string}
        </Codeblock>
      );
    },
    Callout: ({ children, ...rest }: CalloutProps) => {
      const content =
        //@ts-ignore
        children.type === "p" ? children.props.children : children;

      return <Callout {...rest}>{content}</Callout>;
    },
    PostImage,
    Spacing,
    HighlightText,
  };

  return (
    <article css={S.self}>
      <PostHeader
        title={title}
        createdAt={createdAt}
        subTitle={subTitle}
        category={category}
      />
      <div css={S.markdown}>
        <MDXRemote
          compiledSource={compiledSource}
          scope={{ ...scope, ...frontmatter, colors }}
          components={postComponents}
          frontmatter={frontmatter}
        />
      </div>
    </article>
  );
};

const S = {
  self: css`
    margin-top: 24px;
    @media ${media.md} {
      margin-top: 32px;
    }
  `,
  markdown: css`
    word-break: keep-all;
    p {
      white-space: pre-wrap;
    }
    del {
      font-size: 14px;
      color: ${colorVars.border};
    }
    table {
      background-color: ${colorVars.backgroundGlobal};
      thead {
        border-bottom: 2px solid ${colorVars.border};
      }
      th,
      td {
        padding: 10px 16px;
        border: 1px solid ${colorVars.border};
      }
    }
    ol {
      list-style: decimal;
    }
    ul {
      list-style: disc;
    }
    li {
      margin-left: 16px;
      &:not(:first-of-type) {
        margin-top: 8px;
      }
    }
    blockquote {
      position: relative;
      padding: 12px 36px;
      background-color: ${colorVars.backgroundElement};
      font-size: ${typography.size["xs"]};
      @media ${media.md} {
        font-size: ${typography.size["sm"]};
      }
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        width: 3px;
        height: 85%;
        border-radius: 2px;
        background-color: ${colors.green[100]};
      }
    }
  `,
};

export default PostContent;
