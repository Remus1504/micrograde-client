import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import {
  ChangeEvent,
  CSSProperties,
  Dispatch,
  KeyboardEvent,
  ReactNode,
  SetStateAction,
} from 'react';

// export type validationErrorsType =
//   | ISignInPayload
//   | ISignUpPayload
//   | IResetPassword
//   | ICreateCourse
//   //| IPersonalInfoData // TODO
//   | IExperience
//   | IEducation
//   | ILanguage;

// export interface IQueryResponse {
//   data: IAuthResponse;
//   error: FetchBaseQueryError | SerializedError;
// }

 export interface IResponse {
   message?: string;
   token?: string;
//   user?: IAuthDocument;
//   student?: studentDocument;
//   instructor?: InstructorDocument;
//   instructors?: InstructorDocument[];
//   course?: InstructorCourse;
//   courses?: InstructorCourse[];
//   total?: number;
//   sortItems?: string[];
//   conversations?: IConversationDocument[] | IMessageDocument[];
//   messages?: IMessageDocument[];
//   messageData?: IMessageDocument;
//   conversationId?: string;
//   clientSecret?: string;
//   paymentIntentId?: string;
//   order?: IEnrolmentDocument;
//   orders?: IEnrolmentDocument[];
//   review?: IReviewDocument;
//   reviews?: IReviewDocument[];
//   notifications?: IEnrolmentNotifcation[];
// }

export interface IBannerProps {
  bgColor: string;
  text: string;
  showLink: boolean;
  linkText?: string;
  onClick?: () => void;
}

export interface IAlertProps {
  type: string;
  message: string;
}

export interface IAlertTypes {
  [key: string]: string;
  success: string;
  error: string;
  warning: string;
}

export interface IBreadCrumbProps {
  breadCrumbItems: string[];
}

export interface IDropdownProps {
  text: string;
  values: string[];
  maxHeight: string;
  mainClassNames?: string;
  dropdownClassNames?: string;
  showSearchInput?: boolean;
  style?: CSSProperties;
  setValue?: Dispatch<SetStateAction<string>>;
  onClick?: (item: string) => void;
}

export interface IHtmlParserProps {
  input: string;
}

export interface IPageMessageProps {
  header: string;
  body: string;
}

export interface ITextInputProps {
  id?: string;
  name?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  readOnly?: boolean;
  checked?: boolean;
  rows?: number;
  autoFocus?: boolean;
  maxLength?: number;
  min?: string | number;
  max?: string | number;
  onChange?: (event: ChangeEvent) => void;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyUp?: () => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}

export interface IButtonProps {
  label?: string | ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  id?: string;
  className?: string;
  role?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (event?: any) => void;
  disabled?: boolean;
  testId?: string;
}

export interface ISliderImagesText {
  header: string;
  subHeader: string;
}

export interface IStarRatingProps {
  value?: number;
  size?: number;
  setReviewRating?: Dispatch<SetStateAction<number>>;
}

export interface ICourseCardItemModal {
  overlay: boolean;
  deleteApproval: boolean;
}
