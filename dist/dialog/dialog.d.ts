import React, { ReactElement, ReactNode } from 'react';
import './dialog.scss';
interface Props {
  visible: boolean;
  buttons?: ReactElement[];
  onClose: React.MouseEventHandler;
  clickMaskClose?: boolean;
  enableMask?: boolean;
}
declare const Dialog: React.FunctionComponent<Props>;
declare const modal: (
  content: ReactNode,
  buttons?:
    | React.ReactElement<
        any,
        | string
        | ((
            props: any,
          ) => React.ReactElement<
            any,
            string | any | (new (props: any) => React.Component<any, any, any>)
          > | null)
        | (new (props: any) => React.Component<any, any, any>)
      >[]
    | undefined,
  afterClose?: (() => void) | undefined,
) => () => void;
declare const alert: (content: string) => void;
declare const confirm: (
  content: string,
  yes?: (() => void) | undefined,
  no?: (() => void) | undefined,
) => void;
export { alert, confirm, modal };
export default Dialog;
