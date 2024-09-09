import dynamic from "next/dynamic";
import { colorVars } from "@/constants/cssVariables";
import { generateTitleId } from "@/hooks/usePostTOC";
import { CalloutProps } from "@/components/posts/Callout";
import MarkdownStyle from "@/styles/MarkdownStyle";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostData } from "@/types/post";

const Spacing = dynamic(() => import("@/components/common/Spacing"));
const Typography = dynamic(() => import("@/components/common/Typography"));
const HighlightText = dynamic(
  () => import("@/components/common/HighlightText")
);
const Divider = dynamic(() => import("@/components/common/Divider"));
const PostImage = dynamic(() => import("@/components/posts/PostImage"));
const Codeblock = dynamic(() => import("@/components/posts/Codeblock"));
const Callout = dynamic(() => import("@/components/posts/Callout"));
const YoutubePlayer = dynamic(
  () => import("@/components/common/YoutubePlayer")
);

type Props = {
  postData: PostData;
  mdx: MDXRemoteSerializeResult;
};

const PostMarkdown = ({ postData, mdx }: Props) => {
  const { compiledSource } = mdx;
  const { content, ...frontmatter } = postData;
  const markdownComponents = {
    h2: ({ children, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography
        variant="h3"
        element="h2"
        color={colorVars.primary}
        id={generateTitleId(children as string)}
        {...rest}
      >
        {children}
      </Typography>
    ),
    h3: ({ children, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography
        variant="h4"
        element="h3"
        color={colorVars.primary}
        id={generateTitleId(children as string)}
        {...rest}
      >
        {children}
      </Typography>
    ),
    h4: ({ children, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography
        variant="subtitle1"
        element="h4"
        color={colorVars.primary}
        id={generateTitleId(children as string)}
        {...rest}
      >
        {children}
      </Typography>
    ),
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
    YoutubePlayer,
    Divider,
  };
  return (
    <div css={MarkdownStyle}>
      <MDXRemote
        compiledSource={compiledSource}
        scope={{ ...frontmatter }}
        components={markdownComponents}
        frontmatter={{ ...frontmatter }}
      />
    </div>
  );
};

export default PostMarkdown;
