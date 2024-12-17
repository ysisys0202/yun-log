declare module "*.svg" {
  const content: string;
  export default content;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
