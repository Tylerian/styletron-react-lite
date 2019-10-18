/// <reference types="react" />
/**
 * Passes an styletron instance down the component tree.
 *
 * @param Component A react component to pass styletron.
 */
declare const withStyletron: (Component: any) => (props: any) => JSX.Element;
export { withStyletron };
