import { IAuthUser } from 'src/features/auth/interfaces/auth.interface';
//import { StudentDocument } from "src/features/student/interfaces/student.interface";
//mport { InstructorDocument } from "src/features/instructors/interfaces/instructor.interface";
//import { INotification } from "src/shared/header/interfaces/header.interface";

export interface IReduxState {
  authUser: IAuthUser;
  header: string;
  logout: boolean;
  student: object;
  instructor: object;
  showCategoryContainer: boolean;
  notification: object;
}
